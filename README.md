# 🧠 SREBPS AI SDK & Librerie Ufficiali

Benvenuto nel repository ufficiale delle librerie e degli SDK di **SREBPS AI**!
Questo pacchetto consente agli sviluppatori di integrare l'ecosistema di SREBPS AI nei propri progetti: **bot Discord**, **bot Telegram**, **siti web**, **applicazioni desktop**, script di automazione e backend aziendali.

---

## 📦 Struttura del Repository

```
srebps-ai-libreria/
├── srebps-ai-python/       # SDK Ufficiale Python (Sync & Async, supporto bot Discord/Telegram)
├── srebps-ai-javascript/   # SDK Ufficiale JavaScript / Node.js (Browser & Backend)
├── srebps-ai-web/          # Widget Web pronto all'uso da incorporare in qualsiasi sito HTML
└── README.md               # Guida generale e documentazione architettura
```

---

## 🌟 Funzionalità Principali

Tutte le librerie SREBPS AI offrono accesso unificato a:

1. 💬 **Chat & Completions**: Modelli multimodali avanzati di SREBPS AI con supporto streaming, memoria conversazionale e system prompt personalizzati.
2. 🎙️ **Text-to-Speech (TTS)**: Voci ultra-realistiche native di SREBPS AI:
   - **Giuseppe** (`fahad`): Maschile, calda, naturale e colloquiale.
   - **Fabio** (`sultan`): Maschile, autorevole, carismatica e professionale.
   - **Isabella** (`noura`): Femminile, elegante, dolce e rassicurante.
   - **Zoe** (`lulwa`): Femminile, brillante, vivace e solare.
3. 👂 **Speech-to-Text (STT)**: Trascrizione vocale istantanea e ad altissima fedeltà in italiano e multilingua (Whisper ad alte prestazioni).
4. 🎨 **Generazione Immagini**: Creazione immagini fotorealistiche e artistiche in tempo reale (FLUX.1-schnell / Imagen).
5. 🔍 **Web Search Integrata**: Ricerca sul web in tempo reale integrata nei flussi di risposta.
6. 🤖 **Helper per Bot**: Classi preconfigurate per Discord (`discord.py` / `discord.js`), Telegram e webhook.

---

## 🚀 Quick Start per Sviluppatori

### 🐍 Python
```bash
cd srebps-ai-libreria/srebps-ai-python
pip install -e .
```
```python
from srebps_ai import SrebpsAI

client = SrebpsAI()
response = client.chat("Ciao SREBPS! Spiegami in breve cosa puoi fare.")
print(response)
```

### ⚡ JavaScript / Node.js
```bash
cd srebps-ai-libreria/srebps-ai-javascript
npm install
```
```javascript
import { SrebpsAI } from 'srebps-ai';

const client = new SrebpsAI();
const response = await client.chat("Ciao SREBPS! Dimmi una curiosità scientifica.");
console.log(response);
```

### 🌐 Widget Web per Siti
Includi lo script nella tua pagina HTML per aggiungere l'assistente vocale/chat fluttuante in 1 riga:
```html
<script src="https://srebps-ai.gt.tc/srebps-ai-libreria/srebps-ai-web/srebps-widget.js"></script>
<script>
  SrebpsWidget.init({ position: 'bottom-right', voice: 'isabella' });
</script>
```

---

## 📖 Documentazione Completa
- Per Python: vedi [srebps-ai-python/README.md](file:///c:/Users/Shadow/Downloads/SREBPS%20AI/srebps-ai-libreria/srebps-ai-python/README.md)
- Per JavaScript/Node.js: vedi [srebps-ai-javascript/README.md](file:///c:/Users/Shadow/Downloads/SREBPS%20AI/srebps-ai-libreria/srebps-ai-javascript/README.md)
- Per Web Widget: vedi [srebps-ai-web/README.md](file:///c:/Users/Shadow/Downloads/SREBPS%20AI/srebps-ai-libreria/srebps-ai-web/README.md)
