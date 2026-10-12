"""
SREBPS AI Python SDK — Client Ufficiale (Sync & Async)
"""

import os
import re
import io
import json
import base64
from typing import List, Optional, Union, Dict, Any

import requests

from .models import ChatMessage, ChatResponse, TTSResponse, VOICES, VoiceProfile
from .exceptions import (
    SrebpsAIError,
    APIConnectionError,
    RateLimitError,
    AuthenticationError,
    MaintenanceError
)


DEFAULT_ENDPOINT = "https://srebps-ai.gt.tc/ai/api-proxy.php"


def _clean_response_text(text: str) -> str:
    """Rimuove tag di reasoning interno e pulisce il testo."""
    if not text:
        return ""
    cleaned = re.sub(r'<think>[\s\S]*?</think>', '', text, flags=re.IGNORECASE).strip()
    return cleaned


class SrebpsAI:
    """
    Client principale per interagire con l'ecosistema SREBPS AI.
    
    Esempio base:
        client = SrebpsAI()
        risposta = client.chat("Ciao SREBPS! Chi ti ha creato?")
        print(risposta)
    """

    def __init__(
        self,
        api_key: Optional[str] = None,
        endpoint_url: Optional[str] = None,
        timeout: int = 45,
        default_voice: str = "noura"
    ):
        self.api_key = api_key or os.getenv("SREBPS_API_KEY") or "guest"
        self.endpoint_url = endpoint_url or os.getenv("SREBPS_API_URL") or DEFAULT_ENDPOINT
        self.timeout = timeout
        self.default_voice = default_voice
        self.session = requests.Session()
        self.session.headers.update({
            "User-Agent": "SrebpsAI-PythonSDK/1.0",
            "Accept": "application/json"
        })

    # ─── Chat & Completions ───────────────────────────────────

    def chat(
        self,
        prompt_or_messages: Union[str, List[Union[ChatMessage, Dict[str, Any]]]],
        system_prompt: Optional[str] = None,
        image_url: Optional[str] = None,
        temperature: float = 0.7,
        max_tokens: int = 1024,
    ) -> ChatResponse:
        """
        Invia una richiesta di conversazione a SREBPS AI.

        Args:
            prompt_or_messages: Stringa con la domanda oppure lista di messaggi.
            system_prompt: Istruzione di sistema opzionale.
            image_url: URL o base64 di un'immagine per analisi multimodale (Vision).
            temperature: Creatività del modello (0.0 - 1.0).
            max_tokens: Limite di token nella risposta.

        Returns:
            ChatResponse con testo della risposta e metadata.
        """
        payload = self._build_chat_payload(
            prompt_or_messages=prompt_or_messages,
            system_prompt=system_prompt,
            image_url=image_url,
            temperature=temperature,
            max_tokens=max_tokens
        )

        try:
            resp = self.session.post(self.endpoint_url, json=payload, timeout=self.timeout)
        except requests.RequestException as e:
            raise APIConnectionError(f"Errore di connessione a SREBPS AI: {e}") from e

        return self._process_chat_response(resp)

    async def chat_async(
        self,
        prompt_or_messages: Union[str, List[Union[ChatMessage, Dict[str, Any]]]],
        system_prompt: Optional[str] = None,
        image_url: Optional[str] = None,
        temperature: float = 0.7,
        max_tokens: int = 1024,
    ) -> ChatResponse:
        """Versione asincrona (aiohttp) per bot Discord, Telegram o FastAPI."""
        try:
            import aiohttp
        except ImportError:
            raise ImportError("Installa aiohttp per usare i metodi asincroni: pip install aiohttp")

        payload = self._build_chat_payload(
            prompt_or_messages=prompt_or_messages,
            system_prompt=system_prompt,
            image_url=image_url,
            temperature=temperature,
            max_tokens=max_tokens
        )

        async with aiohttp.ClientSession() as session:
            try:
                async with session.post(
                    self.endpoint_url,
                    json=payload,
                    timeout=aiohttp.ClientTimeout(total=self.timeout)
                ) as resp:
                    data = await resp.json(content_type=None)
                    status = resp.status
            except Exception as e:
                raise APIConnectionError(f"Errore async verso SREBPS AI: {e}") from e

        return self._parse_json_result(data, status)

    # ─── Text-to-Speech (TTS) ─────────────────────────────────

    def text_to_speech(
        self,
        text: str,
        voice: Optional[str] = None
    ) -> TTSResponse:
        """
        Genera l'audio parlato tramite le voci ufficiali di SREBPS AI
        (Giuseppe, Fabio, Isabella, Zoe).
        """
        target_voice = self._resolve_voice_id(voice or self.default_voice)
        payload = {
            "action": "text_to_speech",
            "text": text,
            "voice": target_voice
        }

        try:
            resp = self.session.post(self.endpoint_url, json=payload, timeout=self.timeout)
        except requests.RequestException as e:
            raise APIConnectionError(f"Errore TTS: {e}") from e

        if resp.status_code != 200:
            raise SrebpsAIError(f"Errore TTS (HTTP {resp.status_code})", resp.status_code)

        data = resp.json()
        audio_b64 = data.get("audioContent") or data.get("audio_base64")
        if not audio_b64:
            raise SrebpsAIError("Risposta TTS priva di contenuto audio.")

        return TTSResponse(audio_base64=audio_b64, voice=target_voice)

    # ─── Speech-to-Text (STT) ─────────────────────────────────

    def transcribe(
        self,
        audio_file_or_bytes: Union[str, bytes, io.BytesIO],
        filename: str = "audio.webm"
    ) -> str:
        """
        Trascrive un file audio in testo tramite Whisper ad alte prestazioni.
        """
        if isinstance(audio_file_or_bytes, str):
            with open(audio_file_or_bytes, "rb") as f:
                content = f.read()
        elif isinstance(audio_file_or_bytes, io.BytesIO):
            content = audio_file_or_bytes.getvalue()
        else:
            content = audio_file_or_bytes

        files = {"audio_file": (filename, content, "audio/webm")}
        try:
            resp = self.session.post(self.endpoint_url, files=files, timeout=self.timeout)
        except requests.RequestException as e:
            raise APIConnectionError(f"Errore trascrizione STT: {e}") from e

        if resp.status_code != 200:
            raise SrebpsAIError(f"Errore STT (HTTP {resp.status_code})", resp.status_code)

        data = resp.json()
        return data.get("text", "").strip()

    # ─── Image Generation ─────────────────────────────────────

    def generate_image(self, prompt: str) -> str:
        """
        Genera un'immagine tramite il motore FLUX / Imagen di SREBPS AI.
        Restituisce l'URL pubblico o data URI base64.
        """
        payload = {
            "action": "generate_image",
            "prompt": prompt
        }
        try:
            resp = self.session.post(self.endpoint_url, json=payload, timeout=self.timeout)
        except requests.RequestException as e:
            raise APIConnectionError(f"Errore generazione immagine: {e}") from e

        data = resp.json()
        if data.get("status") == "success" and data.get("image_url"):
            return data["image_url"]

        raise SrebpsAIError(data.get("error", "Generazione immagine non riuscita."))

    # ─── Conversation Helper ──────────────────────────────────

    def start_conversation(self, system_prompt: Optional[str] = None) -> 'Conversation':
        """Inizia una conversazione con memoria storica automatica."""
        return Conversation(self, system_prompt=system_prompt)

    # ─── Internals ────────────────────────────────────────────

    def _resolve_voice_id(self, voice_name: str) -> str:
        v = voice_name.lower().strip()
        if v in ("giuseppe", "fahad"): return "fahad"
        if v in ("fabio", "sultan"): return "sultan"
        if v in ("isabella", "noura"): return "noura"
        if v in ("zoe", "lulwa"): return "lulwa"
        return "noura"

    def _build_chat_payload(
        self,
        prompt_or_messages: Union[str, List[Union[ChatMessage, Dict[str, Any]]]],
        system_prompt: Optional[str] = None,
        image_url: Optional[str] = None,
        temperature: float = 0.7,
        max_tokens: int = 1024
    ) -> Dict[str, Any]:
        messages = []

        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})

        if isinstance(prompt_or_messages, str):
            user_msg = {"role": "user", "content": prompt_or_messages}
            if image_url:
                user_msg["image_url"] = image_url
                user_msg["images"] = [image_url]
            messages.append(user_msg)
        else:
            for m in prompt_or_messages:
                if isinstance(m, ChatMessage):
                    messages.append(m.to_dict())
                elif isinstance(m, dict):
                    messages.append(m)

        return {
            "messages": messages,
            "temperature": temperature,
            "max_tokens": max_tokens
        }

    def _process_chat_response(self, resp: requests.Response) -> ChatResponse:
        try:
            data = resp.json()
        except ValueError:
            raise SrebpsAIError(f"Risposta non valida dal server (HTTP {resp.status_code})")

        return self._parse_json_result(data, resp.status_code)

    def _parse_json_result(self, data: dict, status_code: int) -> ChatResponse:
        if status_code == 503 or data.get("error") == "MAINTENANCE_ACTIVE":
            raise MaintenanceError("SREBPS AI è temporaneamente in manutenzione.")

        if "choices" in data and len(data["choices"]) > 0:
            msg = data["choices"][0].get("message", {})
            raw_text = msg.get("content", "")
            clean_text = _clean_response_text(raw_text)
            model_name = data.get("model", "srebps-ai-core")
            return ChatResponse(text=clean_text, model=model_name, raw=data)

        if "error" in data:
            raise SrebpsAIError(str(data["error"]), status_code=status_code, response_body=data)

        raise SrebpsAIError(f"Formato risposta non riconosciuto: {data}")


class Conversation:
    """Gestore conversazione multi-turno con cronologia automatica."""

    def __init__(self, client: SrebpsAI, system_prompt: Optional[str] = None, max_history: int = 12):
        self.client = client
        self.system_prompt = system_prompt
        self.max_history = max_history
        self.messages: List[Dict[str, str]] = []
        if system_prompt:
            self.messages.append({"role": "system", "content": system_prompt})

    def send(self, user_text: str, image_url: Optional[str] = None) -> str:
        """Invia un messaggio e aggiorna la cronologia."""
        msg = {"role": "user", "content": user_text}
        if image_url:
            msg["image_url"] = image_url
            msg["images"] = [image_url]
        self.messages.append(msg)

        res = self.client.chat(self.messages)
        self.messages.append({"role": "assistant", "content": res.text})

        # Trim della cronologia per non superare il limite
        if len(self.messages) > self.max_history:
            # Mantieni eventuale system prompt
            if self.messages[0]["role"] == "system":
                self.messages = [self.messages[0]] + self.messages[-(self.max_history - 1):]
            else:
                self.messages = self.messages[-self.max_history:]

        return res.text

    def clear(self) -> None:
        """Azzera la cronologia dei messaggi."""
        self.messages = []
        if self.system_prompt:
            self.messages.append({"role": "system", "content": self.system_prompt})
