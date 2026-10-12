/**
 * SREBPS AI — Documentation Hub Engine
 * Interactive Tree Sidebar · Live Markdown Renderer · Code Copier · Search
 */

// ─── Database dei Documenti e Tutorial in Ordine Numerico ───
const DOCS_DATABASE = [
    // ═══════════════════════════════════════════════════════
    // SEZIONE 1: INTRODUZIONE & DISTRIBUZIONE
    // ═══════════════════════════════════════════════════════
    {
        id: "intro-panoramica",
        folder: "1. 🚀 Panoramica & Architettura",
        folderId: "folder-intro",
        folderIcon: "fas fa-rocket",
        stepBadge: "Passo 1 di 5: Fondamenta",
        title: "Guida Generale all'Ecosistema SREBPS AI SDK",
        description: "Introduzione alle librerie ufficiali, architettura e capacità multimodali.",
        markdown: `# 🧠 SREBPS AI SDK & Librerie Ufficiali

Benvenuto nel portale ufficiale per sviluppatori di **SREBPS AI**!
Questo ecosistema ti permette di integrare in modo nativo tutte le funzionalità di SREBPS AI nei tuoi progetti: **bot Discord**, **bot Telegram**, **siti web**, **applicazioni desktop** e backend aziendali.

---

## 📦 Struttura del Pacchetto Librerie

\`\`\`
srebps-ai-libreria/
├── srebps-ai-python/       # SDK Ufficiale Python (Sync & Async, bot Discord/Telegram)
├── srebps-ai-javascript/   # SDK Ufficiale JavaScript / Node.js (Browser & Backend)
├── srebps-ai-web/          # Widget Web pronto all'uso in 1 sola riga di codice
└── spiegazioni-e-tutorial/ # Guide passo-passo per GitHub, PyPI e NPM
\`\`\`

---

## 🌟 Cosa Può Fare la Libreria nei Tuoi Progetti?

1. 💬 **Chat & Risposte Intelligenti**: Modelli multimodali avanzati di SREBPS AI con supporto streaming, memoria multi-turno e system prompt personalizzati.
2. 🎙️ **Text-to-Speech (TTS)**: Accesso immediato alle 4 voci neurali ufficiali:
   - **Giuseppe** (\`fahad\`): Maschile, calda, naturale e colloquiale.
   - **Fabio** (\`sultan\`): Maschile, autorevole, professionale e carismatica.
   - **Isabella** (\`noura\`): Femminile, elegante, dolce e rassicurante.
   - **Zoe** (\`lulwa\`): Femminile, brillante, solare ed energica.
3. 👂 **Speech-to-Text (STT)**: Trascrizione Whisper ad altissima precisione.
4. 🎨 **Generazione Immagini**: Creazione immagini FLUX.1-schnell in tempo reale.
5. 🔍 **Web Search Integrata**: Ricerca sul web in tempo reale integrata nei flussi di risposta.
6. 🤖 **Helper Pronti per Bot**: Classi preconfigurate per Discord (\`discord.py\` / \`discord.js\`) e Telegram.
`
    },
    {
        id: "intro-distribuzione",
        folder: "1. 🚀 Panoramica & Architettura",
        folderId: "folder-intro",
        folderIcon: "fas fa-rocket",
        stepBadge: "Passo 1 di 5: Strategia",
        title: "Come Funziona la Distribuzione e Pubblicazione",
        description: "Capire i 2 livelli: installazione diretta da GitHub vs registri globali PyPI e NPM.",
        markdown: `# 🌐 Come Funziona la Distribuzione di una Libreria

Quando crei una libreria, come fanno gli altri utenti o tu stesso a installarla?
Ci sono **due livelli** di distribuzione:

---

## 🌟 Status Python: UFFICIALMENTE ATTIVA SU PYPI!

La libreria Python **\`srebps-ai\`** è stata pubblicata ufficialmente ed è già installabile in tutto il mondo:
\`\`\`bash
pip install srebps-ai
\`\`\`
👉 **Pagina Ufficiale**: [pypi.org/project/srebps-ai/1.0.0/](https://pypi.org/project/srebps-ai/1.0.0/)

---

## 📦 Installazione Diretta da GitHub (Alternative):

Puoi installare le librerie anche direttamente dal repository GitHub di **\`c77576250-sudo\`**:

### Per Python (da GitHub):
\`\`\`bash
pip install git+https://github.com/c77576250-sudo/srebps-ai.git#subdirectory=srebps-ai-python
\`\`\`

### Per JavaScript (Node.js):
\`\`\`bash
npm install git+https://github.com/c77576250-sudo/srebps-ai.git#srebps-ai-javascript
\`\`\`

### Per Siti Web HTML (Widget):
\`\`\`html
<script src="https://srebps-ai.gt.tc/srebps-ai-libreria/srebps-ai-web/srebps-widget.js"></script>
<script>
  SrebpsWidget.init();
</script>
\`\`\`
*(Oppure via CDN jsDelivr: https://cdn.jsdelivr.net/gh/c77576250-sudo/srebps-ai@main/srebps-ai-libreria/srebps-ai-web/srebps-widget.js)*

---

## Livello 2: Pubblicazione sui Registri Mondiali (PyPI e NPM)

Questo è lo standard mondiale dove il nome della libreria diventa universale e installabile con il comando breve:
- Python: \`pip install srebps-ai\` (su [pypi.org](https://pypi.org/))
- JavaScript: \`npm install srebps-ai\` (su [npmjs.com](https://npmjs.com/))

Troverai le guide complete per entrambi i livelli nelle sezioni dedicate qui a sinistra!
`
    },

    // ═══════════════════════════════════════════════════════
    // SEZIONE 2: TUTORIAL GITHUB DA ZERO
    // ═══════════════════════════════════════════════════════
    {
        id: "github-guida-da-zero",
        folder: "2. 🐙 Tutorial GitHub da Zero",
        folderId: "folder-github",
        folderIcon: "fab fa-github",
        stepBadge: "Passo 2 di 5: GitHub Guida Completa",
        title: "Guida Completa per Chi Non Ha Mai Usato GitHub",
        description: "3 metodi passo-passo: da Browser con Drag & Drop, da Terminale, o con GitHub Desktop.",
        markdown: `# 🚀 Tutorial GitHub da Zero: Pubblicare la Tua Prima Libreria

Se non hai mai pubblicato una libreria su GitHub, non preoccuparti! Questa guida ti spiega tutto passo-passo con **3 metodi diversi**: scegli quello che preferisci.

---

## 🧭 Cos'è GitHub in Parole Semplici?

- **GitHub** è un sito web dove puoi salvare e condividere il tuo codice.
- Un **Repository** (o *Repo*) è semplicemente la "cartella di progetto" online su GitHub.
- Il file **README.md** è la copertina del tuo progetto: è la prima pagina formattata che tutti leggono.
- La **Release (v1.0.0)** è il timbro di versione ufficiale che rende il tuo progetto professionale.

---

## 🎯 Metodo 1: Il Più Facile — Dal Sito Web (Zero Terminale, Drag & Drop)

Se non vuoi usare comandi da tastiera:

1. **Entra su GitHub**:
   - Vai su [github.com](https://github.com/) ed esegui l'accesso.
2. **Crea un nuovo Repository**:
   - Clicca sul pulsante verde **"New"** in alto a sinistra.
   - Sotto **Repository name**, scrivi: \`srebps-ai-libreria\` (oppure \`srebps-ai-python\`).
   - Lascia la spunta su **Public** (così tutti possono vederlo e installarlo).
   - **NON** spuntare "Add a README file" (i file li abbiamo già pronti!).
   - Clicca su **"Create repository"**.
3. **Carica i file**:
   - Nella pagina che appare, clicca sul link blu: **"uploading an existing file"**.
   - Trascina con il mouse tutti i file della libreria dentro la finestra del browser.
   - In fondo alla pagina, sotto *"Commit changes"*, scrivi: \`Prima release ufficiale v1.0.0\`.
   - Clicca sul pulsante verde **"Commit changes"**.

🎉 **Fatto!** Il tuo progetto è online e pubblico!

---

## 💻 Metodo 2: Tramite Git da Terminale (PowerShell)

Questo è il metodo standard per programmatori:

### 1. Configura il tuo nome ed email (GIÀ CONFIGURATO SUL TUO PC!)
\`\`\`powershell
git config --global user.name "SREBPS"
git config --global user.email "c77576250@gmail.com"
\`\`\`

### 2. Crea il repository vuoto su GitHub
- Vai su [github.com/new](https://github.com/new).
- Chiamalo \`srebps-ai\`, scegli **Public** e clicca **Create repository**.
- L'indirizzo del tuo repository sarà: \`https://github.com/c77576250-sudo/srebps-ai.git\`.

### 3. Invia i file con i comandi:
\`\`\`powershell
# 1. Entra nella cartella della libreria
cd "c:\\Users\\Shadow\\Downloads\\SREBPS AI\\srebps-ai-libreria"

# 2. Inizializza Git
git init

# 3. Prepara tutti i file
git add .

# 4. Salva il commit
git commit -m "feat: prima release ufficiale SREBPS AI v1.0.0"

# 5. Imposta il ramo principale
git branch -M main

# 6. Collega GitHub al tuo repository
git remote add origin https://github.com/c77576250-sudo/srebps-ai.git

# 7. Invia i file online!
git push -u origin main
\`\`\`

---

## 🏷️ Come Creare la "Release Ufficiale v1.0.0" su GitHub

Una volta caricati i file:
1. Nella pagina del tuo repository su GitHub, guarda la colonna di destra e clicca su **"Releases"** (oppure *Create a new release*).
2. Clicca su **"Draft a new release"**.
3. In **Choose a tag**, scrivi \`v1.0.0\` e premi Invio.
4. In **Release title**, scrivi: \`SREBPS AI SDK v1.0.0 — Official Launch\`.
5. Nel testo scrivi: \`Prima release ufficiale per Python, Node.js e Web Widget.\`.
6. Clicca sul pulsante verde **"Publish release"**.
`
    },
    {
        id: "github-comandi-rapidi",
        folder: "2. 🐙 Tutorial GitHub da Zero",
        folderId: "folder-github",
        folderIcon: "fab fa-github",
        stepBadge: "Passo 2 di 5: Cheat Sheet",
        title: "Comandi Rapidi da Copiare e Incollare",
        description: "Cheat sheet con tutti i comandi per caricare e aggiornare il codice su GitHub.",
        markdown: `# ⚡ Comandi Rapidi da Copiare e Incollare

Tieni questa pagina aperta per avere sempre a portata di mano i comandi Git più usati.

---

## 1. Primo Caricamento su GitHub

\`\`\`powershell
cd "c:\\Users\\Shadow\\Downloads\\SREBPS AI\\srebps-ai-libreria"
git init
git add .
git commit -m "feat: prima release v1.0.0"
git branch -M main
git remote add origin https://github.com/c77576250-sudo/srebps-ai.git
git push -u origin main
\`\`\`

---

## 2. Inviare un Aggiornamento (quando modifichi il codice)

Ogni volta che fai modifiche ai file e vuoi aggiornare GitHub:

\`\`\`powershell
git add .
git commit -m "update: migliorate funzioni e documentazione"
git push
\`\`\`

---

## 3. Controllare lo Stato dei File Modificati

\`\`\`powershell
git status
\`\`\`
`
    },

    // ═══════════════════════════════════════════════════════
    // SEZIONE 3: SDK PYTHON
    // ═══════════════════════════════════════════════════════
    {
        id: "python-readme",
        folder: "3. 🐍 SDK Python (`srebps-ai`)",
        folderId: "folder-python",
        folderIcon: "fab fa-python",
        stepBadge: "Passo 3 di 5: Python Quickstart",
        title: "Python SDK — Installazione & Esempi Rapidi",
        description: "Guida completa per usare SREBPS AI in Python con esempi sincroni e asincroni.",
        markdown: `# 🐍 SREBPS AI — Python SDK

Libreria ufficiale Python per integrare **SREBPS AI** in bot Discord, bot Telegram, applicazioni web (FastAPI, Flask, Django), script di automazione e sistemi intelligenti.

---

## 📥 Installazione

### Ufficiale da PyPI (Consigliato):
\`\`\`bash
pip install srebps-ai
\`\`\`

### Installazione diretta da GitHub:
\`\`\`bash
pip install git+https://github.com/c77576250-sudo/srebps-ai.git#subdirectory=srebps-ai-python
\`\`\`

### Modalità locale (da cartella sorgente):
\`\`\`bash
pip install -e .
\`\`\`

---

## ⚡ Esempi Rapidi

### 1. Chat Semplice
\`\`\`python
from srebps_ai import SrebpsAI

client = SrebpsAI()
risposta = client.chat("Ciao SREBPS! Spiegami in tre punti come funziona una rete neurale.")
print(risposta.text)
\`\`\`

### 2. Conversazione con Memoria (Multi-Turn)
\`\`\`python
from srebps_ai import SrebpsAI

client = SrebpsAI()
chat = client.start_conversation(system_prompt="Sei un assistente per programmatori.")

print(chat.send("Ciao, mi chiamo Alex e programmo in Python!"))
print(chat.send("In quale linguaggio programmo?"))  # Ricorda il contesto
\`\`\`

### 3. Text-to-Speech con le 4 Voci Ufficiali
\`\`\`python
from srebps_ai import SrebpsAI

client = SrebpsAI()

# Voci disponibili: 'giuseppe', 'fabio', 'isabella', 'zoe'
audio = client.text_to_speech("Benvenuto nell'ecosistema SREBPS AI!", voice="isabella")
audio.save("benvenuto.mp3")
print("Audio salvato con successo in benvenuto.mp3")
\`\`\`

### 4. Generazione Immagini (FLUX.1)
\`\`\`python
from srebps_ai import SrebpsAI

client = SrebpsAI()
url_immagine = client.generate_image("Un cyber drago al neon che sorvola una città futuristica")
print("URL immagine generata:", url_immagine)
\`\`\`
`
    },
    {
        id: "python-api",
        folder: "3. 🐍 SDK Python (`srebps-ai`)",
        folderId: "folder-python",
        folderIcon: "fab fa-python",
        stepBadge: "Passo 3 di 5: Python API Reference",
        title: "Python SDK — Riferimento Dettagliato API",
        description: "Tutte le classi, metodi, parametri, codici di ritorno ed eccezioni dell'SDK Python.",
        markdown: `# 📚 Riferimento Completo API Python

Questa guida descrive nel dettaglio ogni metodo e classe del pacchetto \`srebps_ai\`.

---

## 1. Inizializzazione Client \`SrebpsAI\`

\`\`\`python
from srebps_ai import SrebpsAI

client = SrebpsAI(
    api_key=None,          # Opzionale: prelevata da variabile SREBPS_API_KEY o 'guest'
    endpoint_url=None,     # Opzionale: default 'https://srebps-ai.gt.tc/ai/api-proxy.php'
    timeout=45,            # Timeout HTTP in secondi
    default_voice="noura"  # Voce di default ('noura', 'fahad', 'sultan', 'lulwa')
)
\`\`\`

---

## 2. Metodi del Client

| Metodo | Descrizione | Parametri Principali | Ritorno |
| :--- | :--- | :--- | :--- |
| \`chat()\` | Invia un messaggio all'AI | \`prompt_or_messages\`, \`system_prompt\`, \`image_url\`, \`temperature\` | \`ChatResponse\` |
| \`chat_async()\` | Versione asincrona non bloccante | Stessi di \`chat()\` | \`ChatResponse\` |
| \`text_to_speech()\` | Sintetizza testo in voce | \`text\`, \`voice\` (\`"isabella"\`, \`"giuseppe"\`, \`"fabio"\`, \`"zoe"\`) | \`TTSResponse\` |
| \`transcribe()\` | Trascrive audio con Whisper | \`audio_file_or_bytes\`, \`filename\` | \`str\` |
| \`generate_image()\` | Genera immagini con FLUX | \`prompt\` | \`str\` (URL immagine) |
| \`start_conversation()\` | Avvia chat con memoria | \`system_prompt\`, \`max_history\` | \`Conversation\` |

---

## 3. Classe \`Conversation\`

Mantiene automaticamente lo storico dei messaggi tagliando i più vecchi senza superare il limite di contesto:

\`\`\`python
chat = client.start_conversation(
    system_prompt="Sei un assistente per Discord.",
    max_history=12
)

risposta1 = chat.send("Ciao, mi chiamo Alex!")
risposta2 = chat.send("Chi sono io?")  # Ricorda il nome
chat.clear()  # Azzera la memoria
\`\`\`
`
    },
    {
        id: "python-discord",
        folder: "3. 🐍 SDK Python (`srebps-ai`)",
        folderId: "folder-python",
        folderIcon: "fab fa-python",
        stepBadge: "Passo 3 di 5: Esempio Bot Discord",
        title: "Codice Completo: Bot Discord in Python",
        description: "Bot Discord completo pronto all'uso con comandi !ai, !immagine, !voce e Vision multimodale.",
        markdown: `# 🤖 Bot Discord Completo con SREBPS AI Python SDK

Copia questo codice in un file \`bot.py\` per avere subito un bot Discord potenziato con SREBPS AI!

### Prerequisiti:
\`\`\`bash
pip install discord.py aiohttp requests
\`\`\`

### Codice Sorgente \`bot.py\`:
\`\`\`python
import os
import io
import discord
from discord.ext import commands
from srebps_ai import SrebpsAI

# Configurazione Bot
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

# Inizializza SREBPS AI
ai = SrebpsAI()
user_conversations = {}

@bot.event
async def on_ready():
    print(f"🤖 Bot connesso come {bot.user}!")
    await bot.change_presence(activity=discord.Activity(type=discord.ActivityType.listening, name="!ai o !help"))

@bot.command(name="ai", aliases=["chiedi"])
async def cmd_ai(ctx, *, prompt: str):
    """Fa una domanda a SREBPS AI mantenendo la memoria della conversazione."""
    user_id = ctx.author.id
    if user_id not in user_conversations:
        user_conversations[user_id] = ai.start_conversation(
            system_prompt="Sei SREBPS AI, assistente ufficiale nel server Discord."
        )

    chat = user_conversations[user_id]
    async with ctx.typing():
        try:
            # Rileva eventuali immagini allegate (Vision multimodale)
            image_url = None
            if ctx.message.attachments:
                att = ctx.message.attachments[0]
                if att.content_type and att.content_type.startswith("image/"):
                    image_url = att.url

            risposta = chat.send(prompt, image_url=image_url)

            # Divisione automatica se supera i 2000 caratteri di Discord
            if len(risposta) <= 1990:
                await ctx.reply(risposta)
            else:
                for i in range(0, len(risposta), 1950):
                    await ctx.send(risposta[i:i+1950])
        except Exception as e:
            await ctx.reply(f"❌ Errore SREBPS AI: {e}")

@bot.command(name="immagine")
async def cmd_immagine(ctx, *, prompt: str):
    """Genera un'immagine con SREBPS AI."""
    async with ctx.typing():
        try:
            url = ai.generate_image(prompt)
            embed = discord.Embed(title=f"🎨 SREBPS AI Art: {prompt[:60]}", color=0x6366f1)
            embed.set_image(url=url)
            await ctx.reply(embed=embed)
        except Exception as e:
            await ctx.reply(f"❌ Errore: {e}")

@bot.command(name="voce")
async def cmd_voce(ctx, voce: str, *, testo: str):
    """Sintetizza un audio vocale. Uso: !voce [isabella|giuseppe|fabio|zoe] testo"""
    async with ctx.typing():
        try:
            import base64
            res = ai.text_to_speech(testo, voice=voce)
            audio_bytes = base64.b64decode(res.audio_base64)
            audio_file = discord.File(io.BytesIO(audio_bytes), filename="srebps_voce.mp3")
            await ctx.reply(content=f"🎙️ Voce SREBPS AI ({res.voice}):", file=audio_file)
        except Exception as e:
            await ctx.reply(f"❌ Errore vocale: {e}")

bot.run("IL_TUO_DISCORD_TOKEN")
\`\`\`
`
    },
    {
        id: "python-pypi",
        folder: "3. 🐍 SDK Python (`srebps-ai`)",
        folderId: "folder-python",
        folderIcon: "fab fa-python",
        stepBadge: "Passo 3 di 5: Pubblicazione PyPI",
        title: "Come Pubblicare su PyPI (`pip install srebps-ai`)",
        description: "Guida passo-passo per pubblicare la libreria sul registro mondiale di Python.",
        markdown: `# 📦 Pubblicare su PyPI: Rendere la Libreria Installabile con \`pip\`

Questa guida ti mostra come registrare la tua libreria su **PyPI** (Python Package Index), così chiunque nel mondo potrà installarla digitando:
\`\`\`bash
pip install srebps-ai
\`\`\`

---

## 📋 1. Crea un Account su PyPI
1. Registrati gratis su [pypi.org](https://pypi.org/account/register/).
2. Vai su **Account settings** → scorri fino a **API tokens** → clicca **Add API token**.
3. Inserisci un nome per il token (es: \`srebps-upload\`), seleziona Scope *"Entire account"* e clicca **Add token**.
4. Copia il token generato (inizia con \`pypi-...\`).

---

## 🚀 2. Genera il Pacchetto e Caricalo

Apri PowerShell ed esegui questi comandi:

\`\`\`powershell
# 1. Entra nella cartella di Python
cd "c:\\Users\\Shadow\\Downloads\\SREBPS AI\\srebps-ai-libreria\\srebps-ai-python"

# 2. Installa gli strumenti di packaging
pip install build twine

# 3. Compila la libreria in formato Wheel e Tarball
python -m build

# 4. Carica la libreria su PyPI!
twine upload dist/*
\`\`\`

Quando ti viene richiesto:
- **Username**: inserisci \`__token__\` (con due trattini bassi prima e dopo)
- **Password**: incolla il tuo token PyPI copiato prima (\`pypi-AgEI...\`)

🎉 **Completato!** La tua libreria è ora ufficialmente pubblicata nel mondo su PyPI!
`
    },

    // ═══════════════════════════════════════════════════════
    // SEZIONE 4: SDK JAVASCRIPT & NODE.JS
    // ═══════════════════════════════════════════════════════
    {
        id: "js-readme",
        folder: "4. ⚡ SDK JavaScript & Node.js",
        folderId: "folder-js",
        folderIcon: "fab fa-js-square",
        stepBadge: "Passo 4 di 5: JS Quickstart",
        title: "JavaScript SDK — Installazione & Esempi Rapidi",
        description: "Guida per usare SREBPS AI in Node.js, bot Discord.js v14 e nel browser.",
        markdown: `# ⚡ SREBPS AI — JavaScript & Node.js SDK

Libreria universale JavaScript e Node.js per integrare le capacità di **SREBPS AI** in bot Discord (\`discord.js\`), bot Telegram, server backend (Express, Fastify, Next.js) e direttamente nel browser.

---

## 📥 Installazione

### Tramite npm:
\`\`\`bash
npm install srebps-ai
\`\`\`

### Tramite Git:
\`\`\`bash
npm install git+https://github.com/c77576250-sudo/srebps-ai.git#srebps-ai-javascript
\`\`\`

---

## 🚀 Esempi Rapidi

### 1. Chat Rapida in Node.js
\`\`\`javascript
import { SrebpsAI } from 'srebps-ai';

const ai = new SrebpsAI();
const response = await ai.chat("Ciao SREBPS! Spiegami in breve cos'è un WebSocket.");
console.log(response);
\`\`\`

### 2. Conversazione con Memoria (Multi-Turn)
\`\`\`javascript
import { SrebpsAI } from 'srebps-ai';

const ai = new SrebpsAI();
const chat = ai.startConversation("Sei un assistente per sviluppatori web.");

console.log(await chat.send("Ciao, mi chiamo Alex!"));
console.log(await chat.send("Qual è il mio nome?")); // Ricorda il contesto
\`\`\`

### 3. Text-to-Speech (Voci Ufficiali)
\`\`\`javascript
import { SrebpsAI } from 'srebps-ai';
import fs from 'fs';

const ai = new SrebpsAI();
// Voci: 'isabella', 'giuseppe', 'fabio', 'zoe'
const audio = await ai.textToSpeech("Benvenuto nel server di SREBPS AI!", "isabella");

fs.writeFileSync("benvenuto.mp3", Buffer.from(audio.audioBase64, "base64"));
console.log("Audio salvato in benvenuto.mp3");
\`\`\`
`
    },
    {
        id: "js-discord",
        folder: "4. ⚡ SDK JavaScript & Node.js",
        folderId: "folder-js",
        folderIcon: "fab fa-js-square",
        stepBadge: "Passo 4 di 5: Discord.js Bot",
        title: "Codice Completo: Bot Discord in Discord.js v14",
        description: "Bot Discord completo in JavaScript moderno con comandi !ai, !immagine e !voce.",
        markdown: `# 🤖 Bot Discord Completo con Discord.js v14

Un bot Discord completo e reattivo scritto in JavaScript moderno per Node.js.

### Prerequisiti:
\`\`\`bash
npm install discord.js srebps-ai
\`\`\`

### Codice Sorgente \`bot.js\`:
\`\`\`javascript
import { Client, GatewayIntentBits, AttachmentBuilder, EmbedBuilder } from 'discord.js';
import { SrebpsAI } from 'srebps-ai';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const ai = new SrebpsAI();
const userConversations = new Map();

client.once('ready', () => {
    console.log(\`🤖 Bot Discord connesso come \${client.user.tag}\`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    const content = message.content.trim();

    // Comando !ai [domanda]
    if (content.startsWith('!ai ')) {
        const prompt = content.slice(4).trim();
        const userId = message.author.id;

        if (!userConversations.has(userId)) {
            userConversations.set(userId, ai.startConversation(
                "Sei SREBPS AI, assistente ufficiale nel server Discord."
            ));
        }

        const chat = userConversations.get(userId);

        try {
            await message.channel.sendTyping();
            const response = await chat.send(prompt);

            if (response.length <= 1990) {
                await message.reply(response);
            } else {
                for (let i = 0; i < response.length; i += 1950) {
                    await message.channel.send(response.slice(i, i + 1950));
                }
            }
        } catch (err) {
            await message.reply(\`❌ Errore SREBPS AI: \${err.message}\`);
        }
    }

    // Comando !immagine [prompt]
    if (content.startsWith('!immagine ')) {
        const prompt = content.slice(10).trim();
        try {
            await message.channel.sendTyping();
            const imgUrl = await ai.generateImage(prompt);
            const embed = new EmbedBuilder()
                .setTitle(\`🎨 SREBPS AI Art: \${prompt.slice(0, 60)}\`)
                .setImage(imgUrl)
                .setColor(0x6366f1);
            await message.reply({ embeds: [embed] });
        } catch (err) {
            await message.reply(\`❌ Errore: \${err.message}\`);
        }
    }
});

client.login("IL_TUO_DISCORD_TOKEN");
\`\`\`
`
    },
    {
        id: "js-npm",
        folder: "4. ⚡ SDK JavaScript & Node.js",
        folderId: "folder-js",
        folderIcon: "fab fa-js-square",
        stepBadge: "Passo 4 di 5: Pubblicazione NPM",
        title: "Come Pubblicare su NPM (`npm publish`)",
        description: "Guida passo-passo per pubblicare il pacchetto ufficiale su npmjs.com.",
        markdown: `# 📦 Pubblicare su NPM: Rendere la Libreria Installabile con \`npm\`

Questa guida ti mostra come pubblicare ufficialmente il pacchetto su **NPM** (Node Package Manager).

---

## 📋 1. Crea un Account su NPM
1. Registrati gratis su [npmjs.com/signup](https://www.npmjs.com/signup).
2. Conferma l'indirizzo email (obbligatorio per pubblicare).

---

## 🚀 2. Effettua il Login da PowerShell

\`\`\`powershell
# 1. Entra nella cartella di JavaScript
cd "c:\\Users\\Shadow\\Downloads\\SREBPS AI\\srebps-ai-libreria\\srebps-ai-javascript"

# 2. Login su npm
npm login
\`\`\`
Inserisci username, password e il codice One-Time Password ricevuto via email.

---

## 3. Pubblica il Pacchetto

\`\`\`powershell
npm publish --access public
\`\`\`

🎉 **Fatto!** Il tuo pacchetto è ora online su npmjs.com e chiunque può installarlo con:
\`\`\`bash
npm install srebps-ai
\`\`\`
`
    },

    // ═══════════════════════════════════════════════════════
    // SEZIONE 5: WEB WIDGET PLUG & PLAY
    // ═══════════════════════════════════════════════════════
    {
        id: "web-widget",
        folder: "5. 🌐 Web Widget Plug & Play",
        folderId: "folder-web",
        folderIcon: "fas fa-globe",
        stepBadge: "Passo 5 di 5: Widget Web",
        title: "Web Widget — Come Inserirlo in Qualsiasi Sito HTML",
        description: "Aggiungi un assistente SREBPS AI fluttuante in 1 sola riga di codice su WordPress, HTML, React o PHP.",
        markdown: `# 🌐 SREBPS AI — Web Widget Plug & Play

Il Web Widget consente a qualsiasi proprietario di sito web (WordPress, HTML statico, React, Vue, PHP, Shopify) di aggiungere un assistente fluttuante SREBPS AI in **1 sola riga di codice**.

---

## ✨ Provalo Subito Live!
*Nota: Se guardi in basso a destra in questa stessa pagina di documentazione, vedrai già il pulsante circolare al neon in funzione! Cliccaci sopra per chattare in tempo reale.*

---

## 📥 Come Includerlo nel Tuo Sito Web

Aggiungi semplicemente queste due righe prima della chiusura del tag \`</body>\` del tuo sito:

\`\`\`html
<!-- SREBPS AI Widget Ufficiale -->
<script src="https://srebps-ai.gt.tc/srebps-ai-libreria/srebps-ai-web/srebps-widget.js"></script>
<script>
  window.addEventListener('DOMContentLoaded', () => {
    SrebpsWidget.init();
  });
</script>
\`\`\`

---

## 🎨 Caratteristiche del Widget
- **Zero Dipendenze**: Nessuna libreria esterna richiesta, pura grafica nativa ultra-leggera.
- **Design Cyber Glassmorphic**: Stile scuro e neon coordinato all'identità di SREBPS AI.
- **Totalmente Responsive**: Si adatta automaticamente sia da desktop che da smartphone.
- **Riconoscimento Istantaneo**: Collegato in tempo reale ai server di intelligenza artificiale SREBPS AI.
`
    }
];

// ─── DOM References ───
const DOM = {
    treeNav: document.getElementById('treeNav'),
    docSearch: document.getElementById('docSearch'),
    docStepBadge: document.getElementById('docStepBadge'),
    docTitle: document.getElementById('docTitle'),
    docDescription: document.getElementById('docDescription'),
    markdownRendered: document.getElementById('markdownRendered'),
    breadcrumbCurrent: document.getElementById('breadcrumbCurrent'),
    prevDocBtn: document.getElementById('prevDocBtn'),
    nextDocBtn: document.getElementById('nextDocBtn'),
    prevDocName: document.getElementById('prevDocName'),
    nextDocName: document.getElementById('nextDocName'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    docsSidebar: document.getElementById('docsSidebar'),
    sidebarOverlay: document.getElementById('sidebarOverlay'),
    docsContentArea: document.getElementById('docsContentArea'),
};

let currentDocId = "intro-panoramica";

// ─── Generazione Menu ad Albero Laterale ───
function renderTreeSidebar() {
    // Raggruppa i documenti per cartella
    const groups = {};
    DOCS_DATABASE.forEach(doc => {
        if (!groups[doc.folderId]) {
            groups[doc.folderId] = {
                id: doc.folderId,
                name: doc.folder,
                icon: doc.folderIcon,
                items: []
            };
        }
        groups[doc.folderId].items.push(doc);
    });

    let html = '';
    Object.values(groups).forEach((grp, index) => {
        // La prima cartella è espansa di default
        const isExpanded = index === 0 ? 'expanded' : '';
        html += `
            <div class="tree-group ${isExpanded}" data-folder-id="${grp.id}">
                <div class="tree-folder" onclick="toggleFolder('${grp.id}')">
                    <div class="folder-title-left">
                        <i class="${grp.icon} folder-icon"></i>
                        <span>${grp.name}</span>
                    </div>
                    <i class="fas fa-chevron-right folder-arrow"></i>
                </div>
                <div class="tree-children">
        `;

        grp.items.forEach(item => {
            const isActive = item.id === currentDocId ? 'active' : '';
            html += `
                <a class="tree-file ${isActive}" data-doc-id="${item.id}" onclick="loadDocument('${item.id}')">
                    <i class="far fa-file-alt tree-file-icon"></i>
                    <span>${item.title.split('—')[0].replace('Guida', '').replace('Codice Completo:', '').trim()}</span>
                </a>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    DOM.treeNav.innerHTML = html;
}

// ─── Espansione / Chiusura Cartelle ───
window.toggleFolder = function(folderId) {
    const el = document.querySelector(`[data-folder-id="${folderId}"]`);
    if (el) {
        el.classList.toggle('expanded');
    }
};

// ─── Caricamento e Rendering Documento ───
window.loadDocument = function(docId) {
    const doc = DOCS_DATABASE.find(d => d.id === docId);
    if (!doc) return;

    currentDocId = docId;

    // Aggiorna classe active nella sidebar
    document.querySelectorAll('.tree-file').forEach(el => {
        el.classList.toggle('active', el.dataset.docId === docId);
    });

    // Assicura che la cartella padre sia espansa
    const parentFolder = document.querySelector(`[data-folder-id="${doc.folderId}"]`);
    if (parentFolder) parentFolder.classList.add('expanded');

    // Aggiorna Header Documento
    DOM.docStepBadge.textContent = doc.stepBadge;
    DOM.docTitle.textContent = doc.title;
    DOM.docDescription.textContent = doc.description;
    DOM.breadcrumbCurrent.textContent = doc.title.split('—')[0].trim();

    // Renderizza Markdown
    const rawHtml = marked.parse(doc.markdown);
    const cleanHtml = DOMPurify.sanitize(rawHtml);
    DOM.markdownRendered.innerHTML = cleanHtml;

    // Aggiungi pulsanti "Copia" ai blocchi di codice e Syntax Highlighting
    enhanceCodeBlocks();

    // Aggiorna navigazione Precedente / Successivo
    updatePrevNextNav(docId);

    // Scroll verso l'alto
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Chiudi sidebar mobile se aperta
    closeMobileSidebar();
};

// ─── Aggiunta Copy Button e Syntax Highlighting ai Blocchi Codice ───
function enhanceCodeBlocks() {
    const codeBlocks = DOM.markdownRendered.querySelectorAll('pre');

    codeBlocks.forEach(pre => {
        const code = pre.querySelector('code');
        if (!code) return;

        // Rileva lingua
        let lang = 'code';
        const classes = code.className.split(' ');
        classes.forEach(c => {
            if (c.startsWith('language-')) {
                lang = c.replace('language-', '');
            }
        });

        // Crea wrapper per codice con header
        const wrapper = document.createElement('div');
        wrapper.className = 'code-wrapper';

        const header = document.createElement('div');
        header.className = 'code-header';
        header.innerHTML = `
            <span>${lang.toUpperCase()}</span>
            <button class="copy-btn"><i class="far fa-copy"></i> Copia</button>
        `;

        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(header);
        wrapper.appendChild(pre);

        // Highlight
        hljs.highlightElement(code);

        // Copy listener
        const copyBtn = header.querySelector('.copy-btn');
        copyBtn.addEventListener('click', () => {
            const textToCopy = code.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                copyBtn.classList.add('copied');
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copiato!';
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtn.innerHTML = '<i class="far fa-copy"></i> Copia';
                }, 2000);
            });
        });
    });
}

// ─── Gestione Pulsanti Successivo / Precedente ───
function updatePrevNextNav(currentId) {
    const currentIndex = DOCS_DATABASE.findIndex(d => d.id === currentId);

    // Precedente
    if (currentIndex > 0) {
        const prevDoc = DOCS_DATABASE[currentIndex - 1];
        DOM.prevDocBtn.disabled = false;
        DOM.prevDocBtn.style.visibility = 'visible';
        DOM.prevDocName.textContent = prevDoc.title.split('—')[0].trim();
        DOM.prevDocBtn.onclick = () => loadDocument(prevDoc.id);
    } else {
        DOM.prevDocBtn.disabled = true;
        DOM.prevDocBtn.style.visibility = 'hidden';
    }

    // Successivo
    if (currentIndex < DOCS_DATABASE.length - 1) {
        const nextDoc = DOCS_DATABASE[currentIndex + 1];
        DOM.nextDocBtn.disabled = false;
        DOM.nextDocBtn.style.visibility = 'visible';
        DOM.nextDocName.textContent = nextDoc.title.split('—')[0].trim();
        DOM.nextDocBtn.onclick = () => loadDocument(nextDoc.id);
    } else {
        DOM.nextDocBtn.disabled = true;
        DOM.nextDocBtn.style.visibility = 'hidden';
    }
}

// ─── Ricerca in Tempo Reale ───
DOM.docSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const files = document.querySelectorAll('.tree-file');
    const folders = document.querySelectorAll('.tree-group');

    if (!query) {
        files.forEach(f => f.style.display = 'flex');
        folders.forEach(f => f.style.display = 'block');
        return;
    }

    folders.forEach(f => f.classList.add('expanded'));

    files.forEach(f => {
        const docId = f.dataset.docId;
        const doc = DOCS_DATABASE.find(d => d.id === docId);
        const match = doc && (
            doc.title.toLowerCase().includes(query) ||
            doc.description.toLowerCase().includes(query) ||
            doc.markdown.toLowerCase().includes(query)
        );
        f.style.display = match ? 'flex' : 'none';
    });
});

// Shortcut Ctrl+K per focus ricerca
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        DOM.docSearch.focus();
    }
});

// ─── Gestione Mobile Sidebar ───
DOM.mobileMenuBtn.addEventListener('click', () => {
    DOM.docsSidebar.classList.toggle('open');
    DOM.sidebarOverlay.classList.toggle('active');
});

DOM.sidebarOverlay.addEventListener('click', closeMobileSidebar);

function closeMobileSidebar() {
    DOM.docsSidebar.classList.remove('open');
    DOM.sidebarOverlay.classList.remove('active');
}

// ─── Avvio ───
document.addEventListener('DOMContentLoaded', () => {
    renderTreeSidebar();
    loadDocument("intro-panoramica");
});
