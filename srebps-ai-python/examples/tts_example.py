"""
Esempio Vocale (TTS & Voci) — SREBPS AI Python SDK
==================================================
Test e comparazione delle 4 voci ufficiali di SREBPS AI.
"""

from srebps_ai import SrebpsAI, VOICES

def main():
    client = SrebpsAI()
    print("🎙️ Voci ufficiali disponibili in SREBPS AI:")
    for key, prof in VOICES.items():
        print(f"  • {prof.name} ({key}) - {prof.gender.upper()} - {prof.tone}")

    testo = "Ciao! Questo è un test del sintetizzatore vocale neurale di SREBPS AI. Sono pronto per aiutarti."

    print("\nGenerazione audio con Isabella...")
    res_isabella = client.text_to_speech(testo, voice="isabella")
    res_isabella.save("isabella_test.mp3")
    print("✓ Salvato isabella_test.mp3")

    print("\nGenerazione audio con Giuseppe...")
    res_giuseppe = client.text_to_speech(testo, voice="giuseppe")
    res_giuseppe.save("giuseppe_test.mp3")
    print("✓ Salvato giuseppe_test.mp3")

if __name__ == "__main__":
    main()
