# 📦 Guida: Pubblicare la Libreria Python su PyPI (`pip install srebps-ai`)

Questa guida spiega come pubblicare ufficialmente la libreria su **PyPI** (Python Package Index), in modo che chiunque nel mondo possa installarla digitando semplicemente:
```bash
pip install srebps-ai
```

---

## 📋 Prerequisiti

1. Un account gratuito su [pypi.org](https://pypi.org/).
2. Generare un **API Token** su PyPI:
   - Vai su *Account settings* → *API tokens* → *Add API token*.
   - Seleziona scope "Entire account" (o "Project" se esiste già).
   - Salva la stringa del token (inizia con `pypi-...`).
3. Installa gli strumenti di packaging:
   ```bash
   pip install --upgrade build twine
   ```

---

## 🚀 Procedura di Pubblicazione Passo-Passo

### 1. Posizionati nella cartella di Python
```bash
cd "c:\Users\Shadow\Downloads\SREBPS AI\srebps-ai-libreria\srebps-ai-python"
```

### 2. Genera il pacchetto distribuibile (Wheel e Tarball)
Esegui:
```bash
python -m build
```
Questo comando creerà una cartella `dist/` contenente due file:
- `srebps_ai-1.0.0-py3-none-any.whl` (formato binario ottimizzato)
- `srebps_ai-1.0.0.tar.gz` (archivio sorgente)

### 3. (Consigliato) Testa su TestPyPI
Prima di pubblicare sulla versione ufficiale, puoi testarla sull'ambiente di test:
```bash
twine upload --repository testpypi dist/*
```
Inserisci `__token__` come nome utente e incolla il token di TestPyPI come password.

### 4. Pubblica Ufficialmente su PyPI
Quando sei pronto:
```bash
twine upload dist/*
```
- **Username**: `__token__`
- **Password**: incolla il tuo token PyPI (`pypi-AgEI...`)

Fatto! 🎉 Da quel momento in poi, chiunque potrà eseguire:
```bash
pip install srebps-ai
```

---

## 🔄 Come Pubblicare Aggiornamenti Futuri
Quando fai modifiche al codice:
1. Apri `setup.py` e `srebps_ai/__init__.py`.
2. Aumenta la versione (es. `1.0.1` o `1.1.0`).
3. Cancella la vecchia cartella `dist/`.
4. Riesegui `python -m build` e `twine upload dist/*`.
