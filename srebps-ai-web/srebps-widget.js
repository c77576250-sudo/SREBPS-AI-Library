/**
 * SREBPS AI — Embeddable Web Widget
 * Permette a qualsiasi sito web di integrare SREBPS AI con una sola riga di codice.
 */

(function () {
    const DEFAULT_ENDPOINT = "https://srebps-ai.gt.tc/ai/api-proxy.php";

    const CSS = `
    .srebps-widget-btn {
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: radial-gradient(circle at 35% 35%, #8b5cf6, #312e81 60%, #0f0c2d 100%);
        border: 2px solid rgba(168, 85, 247, 0.8);
        box-shadow: 0 0 25px rgba(139, 92, 246, 0.5), 0 8px 30px rgba(0,0,0,0.5);
        cursor: pointer;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .srebps-widget-btn:hover {
        transform: scale(1.08);
    }
    .srebps-widget-btn svg {
        width: 28px;
        height: 28px;
        fill: #fff;
    }
    .srebps-widget-box {
        position: fixed;
        bottom: 96px;
        right: 24px;
        width: 380px;
        height: 520px;
        max-width: calc(100vw - 32px);
        max-height: calc(100vh - 120px);
        background: rgba(10, 10, 26, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
        z-index: 99998;
        display: none;
        flex-direction: column;
        overflow: hidden;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .srebps-widget-box.open {
        display: flex;
    }
    .srebps-widget-header {
        padding: 16px;
        background: rgba(255, 255, 255, 0.04);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-weight: 600;
        font-size: 15px;
    }
    .srebps-widget-body {
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .srebps-msg {
        max-width: 82%;
        padding: 10px 14px;
        border-radius: 14px;
        font-size: 13.5px;
        line-height: 1.45;
    }
    .srebps-msg-user {
        align-self: flex-end;
        background: #6366f1;
        color: #fff;
        border-bottom-right-radius: 4px;
    }
    .srebps-msg-ai {
        align-self: flex-start;
        background: rgba(255, 255, 255, 0.07);
        color: #f1f5f9;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-bottom-left-radius: 4px;
    }
    .srebps-widget-footer {
        padding: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        gap: 8px;
    }
    .srebps-widget-input {
        flex: 1;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 10px 14px;
        color: #fff;
        font-size: 13.5px;
        outline: none;
    }
    .srebps-widget-send {
        background: #6366f1;
        border: none;
        color: #fff;
        border-radius: 12px;
        padding: 0 16px;
        cursor: pointer;
        font-weight: 600;
    }
    `;

    class SrebpsWidgetEngine {
        constructor() {
            this.history = [];
            this.endpoint = DEFAULT_ENDPOINT;
        }

        init(options = {}) {
            if (options.endpoint) this.endpoint = options.endpoint;

            const style = document.createElement('style');
            style.textContent = CSS;
            document.head.appendChild(style);

            // Button
            const btn = document.createElement('div');
            btn.className = 'srebps-widget-btn';
            btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18 2.5 2.5 0 0 0 10 15.5 2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5Z"/></svg>`;

            // Box
            const box = document.createElement('div');
            box.className = 'srebps-widget-box';
            box.innerHTML = `
                <div class="srebps-widget-header">
                    <span>SREBPS AI</span>
                    <button style="background:none;border:none;color:#aaa;cursor:pointer;font-size:18px;" id="srebpsClose">✕</button>
                </div>
                <div class="srebps-widget-body" id="srebpsBody">
                    <div class="srebps-msg srebps-msg-ai">Ciao! Come posso aiutarti oggi?</div>
                </div>
                <div class="srebps-widget-footer">
                    <input type="text" class="srebps-widget-input" id="srebpsInput" placeholder="Chiedi a SREBPS AI...">
                    <button class="srebps-widget-send" id="srebpsSend">Invia</button>
                </div>
            `;

            document.body.appendChild(btn);
            document.body.appendChild(box);

            btn.onclick = () => box.classList.toggle('open');
            box.querySelector('#srebpsClose').onclick = () => box.classList.remove('open');

            const input = box.querySelector('#srebpsInput');
            const sendBtn = box.querySelector('#srebpsSend');
            const body = box.querySelector('#srebpsBody');

            const handleSend = async () => {
                const text = input.value.trim();
                if (!text) return;
                input.value = '';

                // Add user msg
                const userEl = document.createElement('div');
                userEl.className = 'srebps-msg srebps-msg-user';
                userEl.textContent = text;
                body.appendChild(userEl);
                body.scrollTop = body.scrollHeight;

                // Add loading AI msg
                const aiEl = document.createElement('div');
                aiEl.className = 'srebps-msg srebps-msg-ai';
                aiEl.textContent = '...';
                body.appendChild(aiEl);
                body.scrollTop = body.scrollHeight;

                this.history.push({ role: 'user', content: text });

                try {
                    const res = await fetch(this.endpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ messages: this.history })
                    });
                    const data = await res.json();
                    let reply = data.choices?.[0]?.message?.content || "Scusami, non ho potuto elaborare la risposta.";
                    reply = reply.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();

                    aiEl.textContent = reply;
                    this.history.push({ role: 'assistant', content: reply });
                } catch (e) {
                    aiEl.textContent = "Errore di connessione a SREBPS AI.";
                }
                body.scrollTop = body.scrollHeight;
            };

            sendBtn.onclick = handleSend;
            input.onkeydown = (e) => { if (e.key === 'Enter') handleSend(); };
        }
    }

    window.SrebpsWidget = new SrebpsWidgetEngine();
})();
