# 📚 Documentazione Dettagliata API — SREBPS AI JavaScript & Node.js SDK

Guida completa alle classi, metodi e parametri dell'SDK `srebps-ai` per JavaScript e Node.js.

---

## 1. Classe `SrebpsAI`

```javascript
import { SrebpsAI } from 'srebps-ai';

const client = new SrebpsAI({
    endpoint: "https://srebps-ai.gt.tc/ai/api-proxy.php", // opzionale
    apiKey: "guest",                                      // opzionale
    defaultVoice: "noura"                                 // 'noura', 'fahad', 'sultan', 'lulwa'
});
```

---

### Metodi di `SrebpsAI`

#### `async chat(promptOrMessages, options = {}) -> Promise<string>`
Invia un prompt o una serie di messaggi a SREBPS AI e restituisce il testo pulito della risposta.
- **`promptOrMessages`** (*string | Array<{role: string, content: string}>*): Testo della domanda o lista messaggi.
- **`options.systemPrompt`** (*string, opzionale*): Istruzione di sistema per impostare personalità o vincoli.
- **`options.imageUrl`** (*string, opzionale*): URL o base64 dell'immagine da analizzare con la Visione.
- **`options.temperature`** (*number*): Da `0.0` a `1.0` (default: `0.7`).
- **`options.maxTokens`** (*number*): Limite token (default: `1024`).
- **Ritorna**: Stringa con la risposta testuale (tag `<think>` già rimossi automaticamente).

#### `async textToSpeech(text, voiceName = null) -> Promise<Object>`
Genera l'audio parlato tramite sintesi vocale neurale.
- **`text`** (*string*): Frase da pronunciare.
- **`voiceName`** (*string*): Uno tra `'giuseppe'`, `'fabio'`, `'isabella'`, `'zoe'`.
- **Ritorna**:
  ```javascript
  {
    audioBase64: "...", // Stringa base64 MP3
    voice: "noura",     // ID voce utilizzato
    audioUrl: "data:audio/mp3;base64,..." // Data URI pronto per il tag <audio> o play()
  }
  ```

#### `async generateImage(prompt) -> Promise<string>`
Genera un'immagine con FLUX.1.
- **`prompt`** (*string*): Descrizione testuale dell'immagine.
- **Ritorna**: URL pubblico o Data URI dell'immagine creata.

#### `startConversation(systemPrompt = null) -> Conversation`
Istanzia una sessione di chat multi-turno con memoria.

---

## 2. Classe `Conversation`

```javascript
const chat = ai.startConversation("Sei un assistente per Discord.");

const r1 = await chat.send("Ciao, mi chiamo Davide!");
const r2 = await chat.send("Chi sono io?"); // Ricorda il nome
chat.clear(); // Azzera lo storico
```

- **`send(userText, options = {})`**: Invia il messaggio, aggiorna la cronologia e restituisce la risposta dell'AI.
- **`clear()`**: Cancella i messaggi precedenti mantenendo l'eventuale `systemPrompt`.
