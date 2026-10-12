# ⚡ Cheat Sheet: Comandi Rapidi da Copiare e Incollare

Tutti i comandi pronti all'uso per caricare, aggiornare e pubblicare.

---

## 1. Caricare per la PRIMA VOLTA su GitHub (Git da Terminale)

Tutti i comandi sono già preconfigurati con il tuo username GitHub **`c77576250-sudo`**:

```powershell
# 1. Configura il tuo account (GIÀ CONFIGURATO SUL TUO PC!)
git config --global user.name "SREBPS"
git config --global user.email "c77576250@gmail.com"

# 2. Entra nella cartella che vuoi pubblicare
cd "c:\Users\Shadow\Downloads\SREBPS AI\srebps-ai-libreria"

# 3. Inizializza e prepara i file
git init
git add .
git commit -m "feat: prima release ufficiale v1.0.0"
git branch -M main

# 4. Collega il repo GitHub e invia
git remote add origin https://github.com/c77576250-sudo/srebps-ai.git
git push -u origin main
```

---

## 2. Inviare un AGGIORNAMENTO su GitHub (dopo aver modificato dei file)

Quando modifichi codice o documentazione, basta dare questi 3 comandi:

```powershell
git add .
git commit -m "update: migliorate funzioni e documentazione"
git push
```

---

## 3. Pubblicare su PyPI (Python: `pip install srebps-ai`)

```powershell
cd "c:\Users\Shadow\Downloads\SREBPS AI\srebps-ai-libreria\srebps-ai-python"
pip install build twine
python -m build
twine upload dist/*
```

---

## 4. Pubblicare su NPM (JavaScript: `npm install srebps-ai`)

```powershell
cd "c:\Users\Shadow\Downloads\SREBPS AI\srebps-ai-libreria\srebps-ai-javascript"
npm login
npm publish --access public
```
