# 🌐 SREBPS AI — Web Widget

Widget web autonomo e pronto all'uso per incorporare l'assistente SREBPS AI in qualsiasi sito web (WordPress, HTML statico, React, Vue, PHP, Shopify).

---

## ⚡ Come Includerlo nel Tuo Sito

Inserisci queste due righe prima della chiusura del tag `</body>`:

```html
<!-- Widget SREBPS AI -->
<script src="/srebps-ai-libreria/srebps-ai-web/srebps-widget.js"></script>
<script>
  window.addEventListener('DOMContentLoaded', () => {
    SrebpsWidget.init();
  });
</script>
```

Apparirà automaticamente un pulsante circolare al neon in basso a destra con finestra di chat fluttuante in stile glassmorphism!
