# ⚡ SREBPS AI — JavaScript & Node.js SDK

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-green.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![Creator](https://img.shields.io/badge/Creator-Srebps-indigo.svg)](https://srebps-portfolio.com)
[![Platform](https://img.shields.io/badge/Platform-SREBPS%20AI-cyan.svg)](https://srebps-ai.gt.tc)

Libreria universale JavaScript e Node.js per integrare le capacità di **SREBPS AI** in bot Discord (`discord.js`), bot Telegram, server backend (Express, Fastify, Next.js) e direttamente nel browser.

---

## ✨ Funzionalità

- 🌐 **Universale**: Funziona su Node.js (18+), Bun, Deno e nei browser moderni senza configurazioni complesse.
- 💬 **Chat & Completions**: Risposte istantanee con supporto per messaggi singoli o cronologia multi-turno.
- 🧠 **Classe `Conversation`**: Mantiene in automatico la memoria della chat tagliando i messaggi più vecchi.
- 🎙️ **Text-to-Speech Ufficiale**: Sintesi vocale con le 4 voci ufficiali (**Giuseppe**, **Fabio**, **Isabella**, **Zoe**).
- 🎨 **Generazione Immagini**: Creazione immagini FLUX.1 / Imagen.
- 🤖 **Pronto per Discord.js**: Snippet e bot completi inclusi.
- 🧹 **Filtro Thinking Trasparente**: Rimuove automaticamente i blocchi interni `<think>...</think>`.

---

## 📥 Installazione

### Tramite npm:
```bash
npm install srebps-ai
```

### Tramite Git:
```bash
npm install git+https://github.com/c77576250-sudo/srebps-ai.git#srebps-ai-javascript
```

---

## 🚀 Quick Start

### 1. Chat Rapida in Node.js
```javascript
import { SrebpsAI } from 'srebps-ai';

const ai = new SrebpsAI();
const response = await ai.chat("Ciao SREBPS! Spiegami in breve cos'è un WebSocket.");
console.log(response);
```

### 2. Conversazione con Memoria (Multi-Turn)
```javascript
import { SrebpsAI } from 'srebps-ai';

const ai = new SrebpsAI();
const chat = ai.startConversation("Sei un assistente per sviluppatori web.");

console.log(await chat.send("Ciao, mi chiamo Alex!"));
console.log(await chat.send("Qual è il mio nome?")); // Ricorda il contesto
```

### 3. Text-to-Speech (Voci Ufficiali)
```javascript
import { SrebpsAI } from 'srebps-ai';
import fs from 'fs';

const ai = new SrebpsAI();
// Voci: 'isabella', 'giuseppe', 'fabio', 'zoe'
const audio = await ai.textToSpeech("Benvenuto nel server di SREBPS AI!", "isabella");

fs.writeFileSync("benvenuto.mp3", Buffer.from(audio.audioBase64, "base64"));
console.log("Audio salvato in benvenuto.mp3");
```

### 4. Generazione Immagini
```javascript
import { SrebpsAI } from 'srebps-ai';

const ai = new SrebpsAI();
const url = await ai.generateImage("Un'astronave al neon in orbita attorno a Giove");
console.log("URL immagine:", url);
```

### 5. Bot Discord (Discord.js v14)
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
        const query = message.content.slice(4);
        await message.channel.sendTyping();
        const reply = await ai.chat(query);
        message.reply(reply);
    }
});

client.login(process.env.DISCORD_TOKEN);
```

---

## 🎙️ Voci Ufficiali Disponibili

- **Giuseppe** (`fahad`): Maschile, caldo e naturale
- **Fabio** (`sultan`): Maschile, autorevole e carismatico
- **Isabella** (`noura`): Femminile, dolce ed elegante
- **Zoe** (`lulwa`): Femminile, brillante e vivace

---

## 📄 Licenza
Rilasciato sotto licenza [MIT](LICENSE). Creato e mantenuto da **Srebps** (Portfolio: [srebps-portfolio.com](https://srebps-portfolio.com)).
