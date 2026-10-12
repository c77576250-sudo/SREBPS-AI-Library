# 🌐 SREBPS AI — Embeddable Web Widget

Standalone, plug-and-play interactive chat & voice assistant widget to embed **SREBPS AI** into any website (WordPress, static HTML, React, Vue, PHP, Shopify, Webflow).

---

## ⚡ How to Add It to Your Website

Insert these lines before the closing `</body>` tag of your HTML:

```html
<!-- SREBPS AI Web Assistant Widget -->
<script src="https://srebps-ai.gt.tc/srebps-ai-libreria/srebps-ai-web/srebps-widget.js"></script>
<script>
  window.addEventListener('DOMContentLoaded', () => {
    SrebpsWidget.init({
      position: 'bottom-right',
      voice: 'isabella',
      title: 'SREBPS Assistant'
    });
  });
</script>
```

A glowing neon launcher icon will float seamlessly on your page with responsive glassmorphic chat and voice controls!

---

## ⚙️ Configuration Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `position` | `string` | `'bottom-right'` | Position on screen: `'bottom-right'`, `'bottom-left'` |
| `voice` | `string` | `'isabella'` | Default TTS neural voice: `'isabella'`, `'giuseppe'`, `'fabio'`, `'zoe'` |
| `title` | `string` | `'SREBPS Assistant'` | Assistant header title |
| `theme` | `string` | `'dark'` | Visual theme: `'dark'`, `'midnight'`, `'light'` |

---

## 📄 License
MIT © [SREBPS Company](https://srebps-ai.gt.tc) — Founder & C.E.O of SREBPS AI
