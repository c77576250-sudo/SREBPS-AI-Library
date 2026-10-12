# 📚 Documentazione Dettagliata API — SREBPS AI Python SDK

Questa guida descrive ogni classe, metodo, parametro e codice di ritorno disponibile nell'SDK Python `srebps-ai`.

---

## 1. Classe `SrebpsAI`

La classe principale per inizializzare il client e interagire con le API.

```python
from srebps_ai import SrebpsAI

client = SrebpsAI(
    api_key=None,          # Opzionale: prelevata da variabile SREBPS_API_KEY o 'guest'
    endpoint_url=None,     # Opzionale: default 'https://srebps-ai.gt.tc/ai/api-proxy.php'
    timeout=45,            # Timeout HTTP in secondi (default: 45)
    default_voice="noura"  # Voce default ('noura', 'fahad', 'sultan', 'lulwa')
)
```

---

### Metodi di `SrebpsAI`

#### `chat(prompt_or_messages, system_prompt=None, image_url=None, temperature=0.7, max_tokens=1024) -> ChatResponse`
Esegue una chiamata sincrona al motore di conversazione.
- **`prompt_or_messages`** (*str | list*): Il testo della domanda, oppure una lista di messaggi `[{"role": "user", "content": "..."}]`.
- **`system_prompt`** (*str, opzionale*): Istruzioni di personalità o comportamento per l'AI.
- **`image_url`** (*str, opzionale*): URL o immagine codificata in base64 per analisi Vision.
- **`temperature`** (*float*): Creatività tra `0.0` (preciso/deterministico) e `1.0` (creativo). Default `0.7`.
- **`max_tokens`** (*int*): Limite massimo di token generati. Default `1024`.
- **Ritorna**: Oggetto `ChatResponse` con attributi `.text`, `.model`, `.raw`.

#### `async chat_async(...) -> ChatResponse`
Versione asincrona non bloccante di `chat()`, ideale per bot Discord e Telegram o server asincroni come FastAPI.

#### `text_to_speech(text: str, voice: str = None) -> TTSResponse`
Sintetizza testo in audio parlato.
- **`text`** (*str*): Il testo da pronunciare.
- **`voice`** (*str*): Una tra `'giuseppe'`, `'fabio'`, `'isabella'`, `'zoe'`.
- **Ritorna**: Oggetto `TTSResponse`. Dispone del metodo `.save(filepath)`.

#### `transcribe(audio_file_or_bytes, filename="audio.webm") -> str`
Trascrive una registrazione audio in testo con Whisper.
- **`audio_file_or_bytes`** (*str | bytes | BytesIO*): Percorso del file su disco oppure byte in memoria.
- **Ritorna**: Stringa contenente il testo trascritto.

#### `generate_image(prompt: str) -> str`
Genera un'immagine con FLUX.1.
- **`prompt`** (*str*): Descrizione in italiano o inglese dell'immagine desiderata.
- **Ritorna**: URL o Data URI dell'immagine generata.

#### `start_conversation(system_prompt=None) -> Conversation`
Avvia una sessione di chat multi-turno con gestione automatica della memoria.

---

## 2. Classe `Conversation`

Gestore dello storico di conversazione.

```python
chat = client.start_conversation(
    system_prompt="Sei un assistente per Discord.",
    max_history=12  # Numero massimo di turni conservati prima del trimming automatico
)

risposta1 = chat.send("Ciao, mi chiamo Davide!")
risposta2 = chat.send("Chi sono io?")  # SREBPS AI ricorda il nome
chat.clear()  # Azzera la memoria conservando il system prompt
```

---

## 3. Gestione Eccezioni

Tutte le eccezioni ereditano da `SrebpsAIError`:

```python
from srebps_ai.exceptions import (
    SrebpsAIError,
    APIConnectionError,
    RateLimitError,
    AuthenticationError,
    MaintenanceError
)

try:
    res = client.chat("Domanda")
except MaintenanceError:
    print("SREBPS AI è in manutenzione programmata.")
except APIConnectionError as e:
    print("Errore di rete:", e)
except SrebpsAIError as e:
    print(f"Errore SREBPS AI (HTTP {e.status_code}):", e)
```
