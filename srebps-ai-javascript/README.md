# ⚡ SREBPS AI — JavaScript & Node.js SDK

[![npm version](https://img.shields.io/npm/v/srebps-ai.svg?style=flat-square&color=6366f1)](https://www.npmjs.com/package/srebps-ai)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-green.svg?style=flat-square)](https://nodejs.org/)
[![Website](https://img.shields.io/badge/Website-srebps--ai.gt.tc-purple.svg?style=flat-square)](https://srebps-ai.gt.tc/srebps-ai-libreria/)

SDK ufficiale JavaScript e Node.js per integrare le potenti funzionalità di **SREBPS AI** in bot Discord (`discord.js`), server web (Express, Fastify, Next.js, Nest.js) e direttamente nel browser.

---

## 🌟 Funzionalità

- 💬 **Chat Intelligente**: Risposte contestuali rapide con memoria multi-turno conversazionale.
- 🎙️ **Text-to-Speech Neurale (TTS)**: 4 voci ufficiali in altissima definizione:
  - **Isabella** (`noura`): Dolce, elegante e rassicurante.
  - **Giuseppe** (`fahad`): Maschile, calda e colloquiale.
  - **Fabio** (`sultan`): Maschile, carismatica e professionale.
  - **Zoe** (`lulwa`): Femminile, giovane ed energica.
- 🎨 **Generazione Immagini FLUX.1**: Creazione immagini fotorealistiche in tempo reale.
- 🤖 **Supporto Nativo Bot Discord**: Esempi integrati pronti all'uso per `discord.js v14`.
- 🌐 **Zero Dipendenze Obbligatorie**: Costruito su standard nativo `fetch` moderno.

---

## 📥 Installazione

```bash
npm install srebps-ai
```

---

## 🚀 Quick Start

### 1. In Node.js (Chat Rapida)
```javascript
import { SrebpsAI } from 'srebps-ai';

const ai = new SrebpsAI();
const response = await ai.chat("Ciao SREBPS! Spiegami la relatività in 3 punti.");
console.log(response);
```

### 2. Conversazione con Memoria (Multi-Turn)
```javascript
import { SrebpsAI } from 'srebps-ai';

const ai = new SrebpsAI();
const chat = ai.startConversation("Sei un assistente per sviluppatori web.");

console.log(await chat.send("Ciao, mi chiamo Alex!"));
console.log(await chat.send("Qual è il mio nome?")); // Ricorda 'Alex'
```

### 3. Text-to-Speech (TTS Neurale con Voci Ufficiali)
```javascript
import { SrebpsAI } from 'srebps-ai';
import fs from 'fs';

const ai = new SrebpsAI();
// Voci disponibili: 'isabella', 'giuseppe', 'fabio', 'zoe'
const audio = await ai.textToSpeech("Benvenuto nel mondo di SREBPS AI!", "isabella");

// Salvataggio file MP3 su disco:
fs.writeFileSync("saluto.mp3", Buffer.from(audio.audioBase64, "base64"));
```

### 4. Generazione Immagini (FLUX)
```javascript
import { SrebpsAI } from 'srebps-ai';

const ai = new SrebpsAI();
const imgUrl = await ai.generateImage("Un'astronave al neon in orbita attorno a Saturno");
console.log("URL Immagine:", imgUrl);
```

### 5. Bot Discord.js v14 Completo
```javascript
import { Client, GatewayIntentBits } from 'discord.js';
import { SrebpsAI } from 'srebps-ai';

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});
const ai = new SrebpsAI();

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith('!ai ')) {
        const prompt = message.content.slice(4);
        await message.channel.sendTyping();
        const reply = await ai.chat(prompt);
        message.reply(reply);
    }
});

client.login("IL_TUO_DISCORD_TOKEN");
```

---

## 📖 Documentazione Ufficiale
- Portale Sviluppatori & Guide: [https://srebps-ai.gt.tc/srebps-ai-libreria/](https://srebps-ai.gt.tc/srebps-ai-libreria/)
- Web App SREBPS AI: [https://srebps-ai.gt.tc/ai/](https://srebps-ai.gt.tc/ai/)
- GitHub Repository: [https://github.com/c77576250-sudo/srebps-ai](https://github.com/c77576250-sudo/srebps-ai)

---

## 📄 Licenza
MIT © [SREBPS Company](https://srebps-ai.gt.tc) — Founder & C.E.O of SREBPS AI
