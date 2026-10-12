"""
SREBPS AI Python SDK — Eccezioni personalizzate
"""

class SrebpsAIError(Exception):
    """Eccezione base per tutti gli errori dell'SDK SREBPS AI."""
    def __init__(self, message: str, status_code: int = None, response_body: dict = None):
        super().__init__(message)
        self.status_code = status_code
        self.response_body = response_body or {}


class APIConnectionError(SrebpsAIError):
    """Errore durante la connessione di rete ai server SREBPS AI."""
    pass


class RateLimitError(SrebpsAIError):
    """Raggiunto il limite di richieste verso l'API."""
    pass


class AuthenticationError(SrebpsAIError):
    """Chiave API o credenziali non valide."""
    pass


class ContentModerationError(SrebpsAIError):
    """La richiesta ha attivato le misure di salvaguardia o sicurezza di SREBPS AI."""
    pass


class MaintenanceError(SrebpsAIError):
    """La piattaforma SREBPS AI è temporaneamente in manutenzione programmata."""
    pass
