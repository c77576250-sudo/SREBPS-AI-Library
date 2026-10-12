# 🧠 SREBPS AI Official SDK & Libraries

[![PyPI version](https://img.shields.io/pypi/v/srebps-ai.svg?style=flat-square&color=3b82f6)](https://pypi.org/project/srebps-ai/)
[![npm version](https://img.shields.io/npm/v/srebps-ai.svg?style=flat-square&color=6366f1)](https://www.npmjs.com/package/srebps-ai)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Official Website](https://img.shields.io/badge/Website-srebps--ai.gt.tc-purple.svg?style=flat-square)](https://srebps-ai.gt.tc)
[![Docs](https://img.shields.io/badge/Docs-Portal-emerald.svg?style=flat-square)](https://srebps-ai.gt.tc/srebps-ai-libreria/)

Welcome to the official repository of **SREBPS AI** client SDKs and developer libraries.
This repository enables developers to seamlessly integrate the multimodal intelligence of **SREBPS AI** into:
- 🤖 **Discord Bots** (`discord.py` / `discord.js v14`)
- 📱 **Telegram Bots**
- 🌐 **Web Applications** (React, Vue, Next.js, Express, Fastify)
- 🖥️ **Desktop & Automation Scripts**
- 🎙️ **Voice Assistants & Interactive Web Widgets**

---

## 📦 Repository Structure

```
srebps-ai-libreria/
├── srebps-ai-python/       # Official Python SDK (Sync, Async, Models, Discord/Telegram bots)
├── srebps-ai-javascript/   # Official JavaScript & Node.js SDK (ESM, Browser & Node)
├── srebps-ai-web/          # 1-Line Embeddable Web Widget for Websites
└── spiegazioni-e-tutorial/ # Step-by-Step Developer Guides & Documentation Hub
```

---

## 🌟 Core Capabilities

All SREBPS AI client SDKs provide unified access to:

1. 💬 **Multimodal Chat & Reasoning**: Advanced LLM reasoning, multi-turn memory management, custom system instructions, and real-time streaming.
2. 🎙️ **Neural Text-to-Speech (TTS)**: Ultra-realistic official voices:
   - **Giuseppe** (`fahad`): Warm, natural, deep, and conversational masculine voice.
   - **Fabio** (`sultan`): Authoritative, professional, charismatic masculine voice.
   - **Isabella** (`noura`): Elegant, soothing, sweet, and calm feminine voice.
   - **Zoe** (`lulwa`): Bright, energetic, dynamic, and youthful feminine voice.
3. 👂 **Speech-to-Text (STT)**: High-precision speech transcription with automatic noise reduction and multiline buffering.
4. 🎨 **Real-time Image Generation**: High-fidelity visual creation powered by FLUX.1 and Imagen models.
5. 🔍 **Live Web Search**: Real-time web retrieval integration inside completion workflows.
6. 🛡️ **Built-in Resilience**: Automatic retries, error handling, and safe fallback systems.

---

## 🚀 Quick Start

### 🐍 Python (`pip install srebps-ai`)

```bash
pip install srebps-ai
```

```python
from srebps_ai import SrebpsAI

client = SrebpsAI()

# 1. Quick Chat
response = client.chat("Hello SREBPS! Explain quantum computing in 3 sentences.")
print(response.text)

# 2. Neural Voice (TTS)
audio = client.text_to_speech("Welcome to SREBPS AI!", voice="isabella")
audio.save("welcome.mp3")

# 3. Image Generation
image_url = client.generate_image("A futuristic cyber city illuminated by violet neon lights")
print("Image URL:", image_url)
```

---

### ⚡ JavaScript & Node.js (`npm install srebps-ai`)

```bash
npm install srebps-ai
```

```javascript
import { SrebpsAI } from 'srebps-ai';

const ai = new SrebpsAI();

// 1. Quick Chat
const response = await ai.chat("Hello SREBPS! Give me 3 tips for writing clean code.");
console.log(response);

// 2. Neural Voice (TTS)
const audio = await ai.textToSpeech("Hello world from SREBPS AI!", "fabio");
// audio.audioBase64 contains the generated MP3 data

// 3. FLUX Image Generation
const imageUrl = await ai.generateImage("A robotic astronaut walking on Mars, photorealistic 8k");
console.log("Image URL:", imageUrl);
```

---

### 🌐 Embeddable Web Widget (1-Line HTML Integration)

Add the live assistant to any webpage with a single script tag:

```html
<script src="https://srebps-ai.gt.tc/srebps-ai-libreria/srebps-ai-web/srebps-widget.js"></script>
<script>
  SrebpsWidget.init({
    position: 'bottom-right',
    voice: 'isabella',
    title: 'SREBPS Assistant'
  });
</script>
```

---

## 📖 Official Documentation & Developer Portal

- **Live Interactive Docs**: [https://srebps-ai.gt.tc/srebps-ai-libreria/](https://srebps-ai.gt.tc/srebps-ai-libreria/)
- **PyPI Package**: [https://pypi.org/project/srebps-ai/](https://pypi.org/project/srebps-ai/)
- **NPM Package**: [https://www.npmjs.com/package/srebps-ai](https://www.npmjs.com/package/srebps-ai)
- **Web App**: [https://srebps-ai.gt.tc/ai/](https://srebps-ai.gt.tc/ai/)

---

## 📄 License

MIT © [SREBPS Company](https://srebps-ai.gt.tc) — Founder & C.E.O of SREBPS AI
