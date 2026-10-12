"""
Esempio Chat Semplice — SREBPS AI Python SDK
"""

from srebps_ai import SrebpsAI

def main():
    client = SrebpsAI()
    print("🤖 Connessione a SREBPS AI...")

    # Chiamata diretta
    domanda = "Ciao! Presentati e dimmi chi ti ha creato."
    print(f"\nUtente: {domanda}")
    risposta = client.chat(domanda)
    print(f"SREBPS AI: {risposta.text}\n")

    # Conversazione multi-turno
    print("--- Test Conversazione con Memoria ---")
    chat = client.start_conversation(system_prompt="Sei un assistente gentile e conciso.")
    print("Utente: Ricordati che il mio colore preferito è l'arancione.")
    r1 = chat.send("Ricordati che il mio colore preferito è l'arancione.")
    print(f"SREBPS AI: {r1}\n")

    print("Utente: Qual è il mio colore preferito?")
    r2 = chat.send("Qual è il mio colore preferito?")
    print(f"SREBPS AI: {r2}\n")

if __name__ == "__main__":
    main()
