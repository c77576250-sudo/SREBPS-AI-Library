# ⚡ SREBPS AI — JavaScript & Node.js SDK

Libreria ufficiale JavaScript e Node.js per integrare le capacità di **SREBPS AI** in bot Discord (`discord.js`), server web (Express, Fastify, Next.js) e direttamente nel browser.

---

## 📥 Installazione

```bash
npm install srebps-ai
```
*(Oppure copia direttamente la cartella `src/` nel tuo progetto)*

---

## 🚀 Quick Start

### 1. In Node.js (Chat Rapida)
```javascript
import { SrebpsAI } from 'srebps-ai';

const ai = new SrebpsAI();
const response = await ai.chat("Ciao SREBPS! Dammi 3 consigli per ottimizzare il mio codice JavaScript.");
console.log(response);
```

### 2. Conversazione con Memoria (Multi-Turn)
```javascript
import { SrebpsAI } from 'srebps-ai';

const ai = new SrebpsAI();
const chat = ai.startConversation("Sei un assistente esperto di programmazione web.");

console.log(await chat.send("Ciao, mi chiamo Marco!"));
console.log(await chat.send("Qual è il mio nome?")); // Ricorda il contesto
```

### 3. Text-to-Speech (Voci Ufficiali SREBPS AI)
```javascript
import { SrebpsAI } from 'srebps-ai';
import fs from 'fs';

const ai = new SrebpsAI();
// Voci: 'isabella', 'giuseppe', 'fabio', 'zoe'
const audio = await ai.textToSpeech("Messaggio audio generato da SREBPS AI!", "isabella");

// Salvataggio su disco in Node.js
fs.writeFileSync("audio.mp3", Buffer.from(audio.audioBase64, "base64"));
```

### 4. Generazione Immagini
```javascript
import { SrebpsAI } from 'srebps-ai';

const ai = new SrebpsAI();
const imgUrl = await ai.generateImage("Un'astronave al neon in orbita attorno a Saturno");
console.log("URL Immagine:", imgUrl);
```

### 5. Bot Discord.js v14 Pronto all'Uso
Vedi il file completo in [`examples/discord_bot.js`](file:///c:/Users/Shadow/Downloads/SREBPS%20AI/srebps-ai-libreria/srebps-ai-javascript/examples/discord_bot.js).

---

## 📁 Esempi Inclusi
- [`examples/node_chat.js`](file:///c:/Users/Shadow/Downloads/SREBPS%20AI/srebps-ai-libreria/srebps-ai-javascript/examples/node_chat.js): Script Node.js da 5 righe.
- [`examples/discord_bot.js`](file:///c:/Users/Shadow/Downloads/SREBPS%20AI/srebps-ai-libreria/srebps-ai-javascript/examples/discord_bot.js): Bot Discord completo con `discord.js`.
- [`examples/website_embed.html`](file:///c:/Users/Shadow/Downloads/SREBPS%20AI/srebps-ai-libreria/srebps-ai-javascript/examples/website_embed.html): Esempio di integrazione su sito web HTML.
