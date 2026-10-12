"""
SREBPS AI Official Python SDK
=============================
Libreria ufficiale per integrare SREBPS AI nei propri bot, siti web e script.
"""

from .client import SrebpsAI, Conversation
from .models import ChatMessage, ChatResponse, TTSResponse, VOICES, VoiceProfile
from .exceptions import (
    SrebpsAIError,
    APIConnectionError,
    RateLimitError,
    AuthenticationError,
    MaintenanceError
)

__version__ = "1.0.0"
__author__ = "Srebps"

__all__ = [
    "SrebpsAI",
    "Conversation",
    "ChatMessage",
    "ChatResponse",
    "TTSResponse",
    "VOICES",
    "VoiceProfile",
    "SrebpsAIError",
    "APIConnectionError",
    "RateLimitError",
    "AuthenticationError",
    "MaintenanceError"
]
