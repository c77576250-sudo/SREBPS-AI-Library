"""
SREBPS AI Python SDK — Modelli di dati e strutture
"""

from dataclasses import dataclass, field
from typing import List, Optional, Dict, Any


@dataclass
class VoiceProfile:
    """Profilo vocale ufficiale SREBPS AI."""
    id: str
    name: str
    gender: str
    tone: str
    description: str


# Le 4 voci ufficiali dell'ecosistema SREBPS AI
VOICES = {
    "giuseppe": VoiceProfile(
        id="fahad",
        name="Giuseppe",
        gender="maschile",
        tone="caldo, profondo e naturale",
        description="Voce maschile calda, autentica e amichevole di SREBPS AI."
    ),
    "fabio": VoiceProfile(
        id="sultan",
        name="Fabio",
        gender="maschile",
        tone="profondo, carismatico e autorevole",
        description="Voce maschile profonda, professionale e carismatica di SREBPS AI."
    ),
    "isabella": VoiceProfile(
        id="noura",
        name="Isabella",
        gender="femminile",
        tone="elegante, dolce e rassicurante",
        description="Voce femminile dolce ed elegante di SREBPS AI."
    ),
    "zoe": VoiceProfile(
        id="lulwa",
        name="Zoe",
        gender="femminile",
        tone="brillante, giovane, energica e vivace",
        description="Voce femminile solare, allegra e dinamica di SREBPS AI."
    )
}


@dataclass
class ChatMessage:
    """Messaggio singolo all'interno di una conversazione."""
    role: str  # 'system', 'user', 'assistant'
    content: str
    image_url: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        d = {"role": self.role, "content": self.content}
        if self.image_url:
            d["image_url"] = self.image_url
            d["images"] = [self.image_url]
        return d


@dataclass
class ChatResponse:
    """Risposta restituita dal motore SREBPS AI."""
    text: str
    model: str
    raw: Dict[str, Any] = field(default_factory=dict)

    def __str__(self) -> str:
        return self.text


@dataclass
class TTSResponse:
    """Risultato della sintesi vocale SREBPS AI."""
    audio_base64: str
    voice: str
    audio_format: str = "mp3"

    def save(self, filepath: str) -> None:
        """Salva il file audio generato sul disco."""
        import base64
        with open(filepath, "wb") as f:
            f.write(base64.b64decode(self.audio_base64))
