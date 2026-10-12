# 🚀 Guida Completa: Come Pubblicare una Libreria su GitHub da Zero

Se non hai mai pubblicato una libreria su GitHub, questa guida è pensata apposta per te! Ti spiegherà in modo semplice e chiaro tutto ciò che devi sapere, mostrandoti ben **3 metodi diversi** (da quello più visivo e facile a quello da terminale).

---

## 🧭 Cos'è GitHub e Come Funziona una Libreria?

- **GitHub** è una piattaforma online dove sviluppatori di tutto il mondo condividono il proprio codice.
- Un **Repository** (chiamato spesso *Repo*) è la "cartella di progetto" pubblica su GitHub.
- Il file **`README.md`** è la copertina del tuo progetto: è la prima pagina che chiunque vede quando visita il tuo repository su GitHub. Spiega cosa fa la libreria, come si installa e mostra degli esempi.
- La **Licenza (`LICENSE`)** (es. MIT) dice agli altri sviluppatori che possono usare liberamente la tua libreria nei loro progetti.

---

## 🎯 Metodo 1: Il Più Semplice — Da Browser Web (Senza Installare Nulla)

Se vuoi pubblicare senza toccare terminali o scaricare programmi:

1. **Accedi a GitHub**:
   - Vai su [github.com](https://github.com/) ed esegui l'accesso con il tuo account.
2. **Crea un nuovo repository**:
   - Clicca sul pulsante verde **"New"** in alto a sinistra (oppure l'icona `+` in alto a destra → *New repository*).
   - Inserisci il **Repository name**, ad esempio:
     - Per Python: `srebps-ai-python`
     - Per JavaScript: `srebps-ai-javascript`
     - Per tutto il pacchetto: `srebps-ai-library`
   - Lascia la visibilità su **Public** (così tutti possono scaricarlo).
   - **NON** spuntare "Add a README file" (i file li abbiamo già pronti!).
   - Clicca sul pulsante verde **"Create repository"**.
3. **Carica i file**:
   - Nella pagina vuota che compare, clicca sul link blu: **"uploading an existing file"**.
   - Trascina semplicemente tutti i file e le cartelle della libreria dal tuo PC all'interno della finestra del browser.
   - Sotto a "Commit changes", scrivi un titolo (es: `Prima release ufficiale v1.0.0`).
   - Clicca sul pulsante verde **"Commit changes"**.
4. **Fatto!** Il tuo repository è online e visibile a tutti!

---

## 💻 Metodo 2: Tramite Git da Terminale (Consigliato per Sviluppatori)

Questo è il metodo standard utilizzato dai professionisti. È veloce e permette di inviare aggiornamenti con un solo comando.

### Passo 1: Configura il tuo nome ed email su Git (si fa solo la prima volta)
Apri il terminale PowerShell ed esegui:
```powershell
git config --global user.name "IlTuoNomeOUsername"
git config --global user.email "la_tua_email@esempio.com"
```

### Passo 2: Crea il repository su GitHub
1. Vai su [github.com/new](https://github.com/new).
2. Chiama il repository ad esempio `srebps-ai-python`.
3. Scegli **Public** e clicca **Create repository**.
4. GitHub ti mostrerà un URL: `https://github.com/c77576250-sudo/srebps-ai.git`.

### Passo 3: Inizializza e invia i file dal terminale
Supponiamo di voler pubblicare la cartella della libreria:
```powershell
# 1. Entra nella cartella della libreria
cd "c:\Users\Shadow\Downloads\SREBPS AI\srebps-ai-libreria"

# 2. Inizializza il repository locale
git init

# 3. Aggiungi tutti i file
git add .

# 4. Crea il primo commit (salvataggio)
git commit -m "feat: prima release ufficiale SREBPS AI SDK v1.0.0"

# 5. Rinomina il ramo principale in 'main'
git branch -M main

# 6. Collega il tuo repository locale a quello su GitHub
git remote add origin https://github.com/c77576250-sudo/srebps-ai.git

# 7. Invia i file su GitHub
git push -u origin main
```
*Nota: Alla prima esecuzione, Windows ti aprirà una finestrella nel browser per effettuare il login rapido su GitHub.*

---

## 🖥️ Metodo 3: Con l'App Visuale "GitHub Desktop" (Zero Comandi)

Se preferisci un'applicazione con finestre e pulsanti:

1. Scarica e installa **GitHub Desktop** da [desktop.github.com](https://desktop.github.com/).
2. Accedi con il tuo account GitHub.
3. Clicca su **File** → **Add Local Repository...**.
4. Seleziona la cartella della libreria (es: `srebps-ai-python`).
5. Se ti dice *"This directory does not appear to be a Git repository"*, clicca sul link **"create a repository"**.
6. Clicca sul pulsante blu **"Publish repository"** in alto.
7. Togli la spunta da *"Keep this code private"* se vuoi che sia pubblico.
8. Clicca **"Publish repository"**: in 5 secondi il tuo codice sarà online su GitHub!

---

## 🏷️ Come Creare una "Release Ufficiale" (v1.0.0) su GitHub

Creare una Release fa apparire la tua libreria professionale, con un badge di versione ufficiale e un archivio ZIP scaricabile:

1. Vai sulla pagina del tuo repository su GitHub.
2. Nella colonna di destra, clicca su **"Releases"** (o "Create a new release").
3. Clicca su **"Draft a new release"**.
4. In **Choose a tag**, scrivi `v1.0.0` e premi Invio (*Create new tag: v1.0.0*).
5. In **Release title**, scrivi: `SREBPS AI SDK v1.0.0 — Official Launch`.
6. Nel box di descrizione scrivi un riassunto delle novità (es: *Supporto chat, 4 voci TTS, Vision, esempi Discord*).
7. Clicca sul pulsante verde **"Publish release"** in fondo.

La tua libreria ora ha un tag di versione ufficiale! 🎉
