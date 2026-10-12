# 📦 Guida: Pubblicare la Libreria JavaScript su NPM (`npm publish`)

Questa guida spiega come pubblicare ufficialmente il pacchetto su **NPM** (Node Package Manager), in modo che chiunque possa installarlo con:
```bash
npm install srebps-ai
```

---

## 📋 Prerequisiti

1. Un account gratuito su [npmjs.com](https://www.npmjs.com/).
2. Aver verificato l'email dell'account npm.
3. Node.js e npm installati nel terminale.

---

## 🚀 Procedura di Pubblicazione Passo-Passo

### 1. Posizionati nella cartella di JavaScript
```bash
cd "c:\Users\Shadow\Downloads\SREBPS AI\srebps-ai-libreria\srebps-ai-javascript"
```

### 2. Effettua il login da terminale su npm
Esegui:
```bash
npm login
```
Ti verrà chiesto:
- Username di npm
- Password di npm
- Codice di verifica via email (One-Time Password)

Verifica che il login sia attivo con:
```bash
npm whoami
```

### 3. Pubblica il pacchetto
Esegui semplicemente:
```bash
npm publish --access public
```

Fatto! 🎉 Il pacchetto è ora online su npmjs.com e chiunque può installarlo con:
```bash
npm install srebps-ai
```

---

## 🔄 Come Pubblicare Aggiornamenti Futuri
Quando aggiorni il codice:
1. Apri `package.json`.
2. Incrementa `"version"` (ad esempio da `"1.0.0"` a `"1.0.1"` o `"1.1.0"`).
3. Esegui nuovamente:
   ```bash
   npm publish
   ```
