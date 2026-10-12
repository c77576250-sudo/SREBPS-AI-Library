# 🐍 SREBPS AI — Official Python SDK

[![PyPI version](https://img.shields.io/pypi/v/srebps-ai.svg?style=flat-square&color=3b82f6)](https://pypi.org/project/srebps-ai/)
[![Python Version](https://img.shields.io/pypi/pyversions/srebps-ai.svg?style=flat-square)](https://pypi.org/project/srebps-ai/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Documentation](https://img.shields.io/badge/Docs-Live-emerald.svg?style=flat-square)](https://srebps-ai.gt.tc/srebps-ai-libreria/)

Official Python client library for **SREBPS AI**. Easily integrate conversational AI, neural text-to-speech, real-time image generation, and speech recognition into your Discord bots, Telegram bots, web backends, and Python applications.

---

## 📥 Installation

```bash
pip install srebps-ai
```

Or install with optional async / bot dependencies:
```bash
pip install "srebps-ai[bot]"
```

---

## ⚡ Quick Start

### 1. Synchronous Chat
```python
from srebps_ai import SrebpsAI

client = SrebpsAI()
response = client.chat("Hello SREBPS! Explain quantum computing in two sentences.")
print(response.text)
```

### 2. Multi-Turn Conversation (With Memory)
```python
from srebps_ai import SrebpsAI

client = SrebpsAI()
chat = client.start_conversation(system_prompt="You are an expert software engineering assistant.")

print(chat.send("Hi, my name is Alex!"))
print(chat.send("What is my name?"))  # Retains context: responds with "Alex"
```

### 3. Neural Text-to-Speech (Official High-Definition Voices)
```python
from srebps_ai import SrebpsAI

client = SrebpsAI()

# Available voices: 'isabella', 'giuseppe', 'fabio', 'zoe'
audio = client.text_to_speech("Welcome to the SREBPS AI ecosystem!", voice="isabella")
audio.save("welcome.mp3")
print("Audio saved successfully!")
```

### 4. Real-time Image Generation (FLUX)
```python
from srebps_ai import SrebpsAI

client = SrebpsAI()
image_url = client.generate_image("An astronaut riding a futuristic neon motorcycle in deep space, 8k")
print("Generated Image URL:", image_url)
```

### 5. Asynchronous Client (for FastAPI, aiohttp, etc.)
```python
import asyncio
from srebps_ai import AsyncSrebpsAI

async def main():
    async with AsyncSrebpsAI() as client:
        response = await client.chat("Tell me a fascinating space fact.")
        print(response.text)

asyncio.run(main())
```

---

## 🤖 Discord Bot Example (`discord.py`)

A production-ready Discord bot script is included in [`examples/discord_bot.py`](file:///c:/Users/Shadow/Downloads/SREBPS%20AI/srebps-ai-libreria/srebps-ai-python/examples/discord_bot.py):

```python
import discord
from discord.ext import commands
from srebps_ai import SrebpsAI

bot = commands.Bot(command_prefix="!", intents=discord.Intents.all())
ai = SrebpsAI()

@bot.command()
async def chat(ctx, *, prompt: str):
    async with ctx.typing():
        response = ai.chat(prompt)
        await ctx.reply(response.text)

@bot.command()
async def tts(ctx, *, text: str):
    async with ctx.typing():
        audio = ai.text_to_speech(text, voice="isabella")
        audio.save("speech.mp3")
        await ctx.reply(file=discord.File("speech.mp3"))

bot.run("YOUR_DISCORD_BOT_TOKEN")
```

---

## 🎙️ Official Voices Reference

| Voice Key | Persona | Gender | Tone & Characteristics |
| :--- | :--- | :--- | :--- |
| `noura` / `isabella` | Isabella | Female | Elegant, soothing, sweet, and comforting. |
| `fahad` / `giuseppe` | Giuseppe | Male | Warm, natural, deep, and conversational. |
| `sultan` / `fabio` | Fabio | Male | Authoritative, charismatic, and professional. |
| `lulwa` / `zoe` | Zoe | Female | Bright, energetic, youthful, and vibrant. |

---

## 📖 Documentation & Links

- **Documentation Hub**: [https://srebps-ai.gt.tc/srebps-ai-libreria/](https://srebps-ai.gt.tc/srebps-ai-libreria/)
- **PyPI Package**: [https://pypi.org/project/srebps-ai/](https://pypi.org/project/srebps-ai/)
- **GitHub Repository**: [https://github.com/c77576250-sudo/SREBPS-AI-Library](https://github.com/c77576250-sudo/SREBPS-AI-Library)
- **Official Web Platform**: [https://srebps-ai.gt.tc](https://srebps-ai.gt.tc)

---

## 📄 License

MIT License © [SREBPS Company](https://srebps-ai.gt.tc) — Founder & C.E.O of SREBPS AI
