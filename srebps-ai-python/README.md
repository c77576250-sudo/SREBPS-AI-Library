# 🐍 SREBPS AI — Python SDK

Libreria Python ufficiale per sviluppatori per integrare facilmente **SREBPS AI** in qualsiasi bot Discord, bot Telegram, applicazione web o script di automazione.

---

## 📥 Installazione

```bash
pip install -e .
```
Oppure:
```bash
pip install requests aiohttp
```

---

## ⚡ Quick Start

### 1. Chat semplice (Sincrono)
```python
from srebps_ai import SrebpsAI

client = SrebpsAI()
risposta = client.chat("Ciao SREBPS! Parlami della teoria della relatività in due frasi.")
print(risposta.text)
```

### 2. Conversazione con Memoria (Multi-Turn)
```python
from srebps_ai import SrebpsAI

client = SrebpsAI()
chat = client.start_conversation(system_prompt="Sei un assistente per sviluppatori.")

print(chat.send("Ciao, mi chiamo Alex!"))
print(chat.send("Come mi chiamo?"))  # Ricorda il contesto
```

### 3. Text-to-Speech (Voci Ufficiali SREBPS AI)
```python
from srebps_ai import SrebpsAI

client = SrebpsAI()

# Voci disponibili: 'giuseppe', 'fabio', 'isabella', 'zoe'
audio = client.text_to_speech("Benvenuto nel server di SREBPS AI!", voice="isabella")
audio.save("benvenuto.mp3")
print("File audio salvato con successo!")
```

### 4. Generazione Immagini
```python
from srebps_ai import SrebpsAI

client = SrebpsAI()
image_url = client.generate_image("Un gatto astronauta che viaggia nello spazio profondo, cyber neon")
print("Immagine generata:", image_url)
```

### 5. Bot Discord Pronto all'Uso (Asincrono)
Vedi l'esempio completo in `examples/discord_bot.py`.
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

## 📁 Esempi Inclusi
- [`examples/simple_chat.py`](file:///c:/Users/Shadow/Downloads/SREBPS%20AI/srebps-ai-libreria/srebps-ai-python/examples/simple_chat.py): Esempio base da 5 righe.
- [`examples/discord_bot.py`](file:///c:/Users/Shadow/Downloads/SREBPS%20AI/srebps-ai-libreria/srebps-ai-python/examples/discord_bot.py): Bot Discord con comandi `/chat`, `/immagine`, `/voce`.
- [`examples/telegram_bot.py`](file:///c:/Users/Shadow/Downloads/SREBPS%20AI/srebps-ai-libreria/srebps-ai-python/examples/telegram_bot.py): Bot Telegram con AI vocale e testuale.
- [`examples/tts_example.py`](file:///c:/Users/Shadow/Downloads/SREBPS%20AI/srebps-ai-libreria/srebps-ai-python/examples/tts_example.py): Test e confronto delle 4 voci ufficiali.
