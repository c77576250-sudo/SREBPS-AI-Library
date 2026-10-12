# 🧠 SREBPS AI — Python SDK

[![Python Version](https://img.shields.io/badge/python-3.8%2B-blue.svg)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![Creator](https://img.shields.io/badge/Creator-Srebps-indigo.svg)](https://srebps-portfolio.com)
[![Platform](https://img.shields.io/badge/Platform-SREBPS%20AI-cyan.svg)](https://srebps-ai.gt.tc)

Libreria ufficiale Python per integrare **SREBPS AI** in bot Discord, bot Telegram, applicazioni web (FastAPI, Flask, Django), script di automazione e sistemi intelligenti.

---

## ✨ Funzionalità

- 💬 **Chat e Completions**: Supporto per messaggi singoli, chat multi-turn e analisi multimodale immagini (Vision).
- 🧠 **Memoria Automatica**: Classe `Conversation` con gestione automatica dello storico dei messaggi e trimming intelligente.
- 🎙️ **Text-to-Speech (TTS)**: Accesso alle 4 voci ufficiali dell'ecosistema (**Giuseppe**, **Fabio**, **Isabella**, **Zoe**) con salvataggio MP3.
- 👂 **Speech-to-Text (STT)**: Trascrizione vocale Whisper ad altissima precisione.
- 🎨 **Generazione Immagini**: Creazione immagini fotorealistiche con FLUX.1 / Imagen.
- ⚡ **Supporto Asincrono Nativo**: Metodi `chat_async()` per bot Discord (`discord.py`) e Telegram (`aiogram` / `python-telegram-bot`).
- 🧹 **Filtro Thinking Integrato**: Rimozione automatica e trasparente dei tag `<think>...</think>`.

---

## 📥 Installazione

### Tramite pip locale:
```bash
pip install -e .
```

### Tramite pip da GitHub:
```bash
pip install git+https://github.com/c77576250-sudo/srebps-ai.git#subdirectory=srebps-ai-python
```

---

## 🚀 Esempi Rapidi

### 1. Chat Semplice
```python
from srebps_ai import SrebpsAI

client = SrebpsAI()
risposta = client.chat("Ciao SREBPS! Spiegami in tre punti come funziona una rete neurale.")
print(risposta.text)
```

### 2. Conversazione con Memoria (Multi-Turn)
```python
from srebps_ai import SrebpsAI

client = SrebpsAI()
chat = client.start_conversation(system_prompt="Sei un assistente per programmatori.")

print(chat.send("Ciao, mi chiamo Alex e programmo in Python!"))
print(chat.send("In quale linguaggio programmo?"))  # Ricorda il contesto
```

### 3. Text-to-Speech (Voci Ufficiali)
```python
from srebps_ai import SrebpsAI

client = SrebpsAI()

# Voci disponibili: 'giuseppe', 'fabio', 'isabella', 'zoe'
audio = client.text_to_speech("Benvenuto nell'ecosistema SREBPS AI!", voice="isabella")
audio.save("benvenuto.mp3")
print("Audio salvato in benvenuto.mp3")
```

### 4. Generazione Immagini
```python
from srebps_ai import SrebpsAI

client = SrebpsAI()
url_immagine = client.generate_image("Un cyber drago al neon che sorvola una città futuristica")
print("URL immagine generata:", url_immagine)
```

### 5. Bot Discord (Comando !ai)
```python
import discord
from discord.ext import commands
from srebps_ai import SrebpsAI

bot = commands.Bot(command_prefix="!", intents=discord.Intents.all())
ai = SrebpsAI()

@bot.command()
async def chiedi(ctx, *, domanda: str):
    async with ctx.typing():
        risposta = await ai.chat_async(domanda)
        await ctx.reply(risposta.text)

bot.run("DISCORD_TOKEN")
```

---

## 🎙️ Voci Ufficiali Disponibili

| Nome | ID Interno | Genere | Timbro & Personalità |
| :--- | :--- | :--- | :--- |
| **Giuseppe** | `fahad` | Maschile | Caldo, profondo, naturale e colloquiale |
| **Fabio** | `sultan` | Maschile | Profondo, autorevole, carismatico e professionale |
| **Isabella** | `noura` | Femminile | Elegante, dolce, rassicurante e posata |
| **Zoe** | `lulwa` | Femminile | Brillante, giovane, solare, energica e vivace |

---

## 📄 Licenza
Rilasciato sotto licenza [MIT](LICENSE). Creato e mantenuto da **Srebps** (Portfolio: [srebps-portfolio.com](https://srebps-portfolio.com)).
