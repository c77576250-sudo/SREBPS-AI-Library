/**
 * SREBPS AI — Universal JavaScript & Node.js SDK
 * Compatibile con Browser, Node.js (18+), Bun e Deno.
 */

const DEFAULT_ENDPOINT = "https://srebps-ai.gt.tc/ai/api-proxy.php";

export const VOICES = {
    giuseppe: { id: "fahad", name: "Giuseppe", gender: "maschile", tone: "caldo e colloquiale" },
    fabio: { id: "sultan", name: "Fabio", gender: "maschile", tone: "profondo e autorevole" },
    isabella: { id: "noura", name: "Isabella", gender: "femminile", tone: "dolce ed elegante" },
    zoe: { id: "lulwa", name: "Zoe", gender: "femminile", tone: "brillante e vivace" }
};

export class SrebpsAI {
    /**
     * Inizializza il client SREBPS AI.
     * @param {Object} [options]
     * @param {string} [options.apiKey]
     * @param {string} [options.endpoint]
     * @param {string} [options.defaultVoice]
     */
    constructor(options = {}) {
        this.endpoint = options.endpoint || (typeof process !== 'undefined' && process.env?.SREBPS_API_URL) || DEFAULT_ENDPOINT;
        this.apiKey = options.apiKey || (typeof process !== 'undefined' && process.env?.SREBPS_API_KEY) || 'guest';
        this.defaultVoice = options.defaultVoice || 'noura';
    }

    /**
     * Invia una richiesta di chat a SREBPS AI.
     * @param {string|Array<{role: string, content: string}>} promptOrMessages
     * @param {Object} [options]
     * @param {string} [options.systemPrompt]
     * @param {string} [options.imageUrl]
     * @param {number} [options.temperature=0.7]
     * @param {number} [options.maxTokens=1024]
     * @returns {Promise<string>} Risposta generata
     */
    async chat(promptOrMessages, options = {}) {
        const messages = [];

        if (options.systemPrompt) {
            messages.push({ role: 'system', content: options.systemPrompt });
        }

        if (typeof promptOrMessages === 'string') {
            const userMsg = { role: 'user', content: promptOrMessages };
            if (options.imageUrl) {
                userMsg.image_url = options.imageUrl;
                userMsg.images = [options.imageUrl];
            }
            messages.push(userMsg);
        } else if (Array.isArray(promptOrMessages)) {
            messages.push(...promptOrMessages);
        }

        const payload = {
            messages,
            temperature: options.temperature ?? 0.7,
            max_tokens: options.maxTokens ?? 1024
        };

        const res = await fetch(this.endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            throw new Error(`SREBPS AI HTTP ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        if (data.error) {
            throw new Error(`SREBPS AI Error: ${data.error}`);
        }

        const content = data.choices?.[0]?.message?.content || "";
        return this._cleanText(content);
    }

    /**
     * Sintetizza testo in voce usando una delle 4 voci ufficiali.
     * @param {string} text
     * @param {string} [voiceName] 'giuseppe', 'fabio', 'isabella', 'zoe'
     * @returns {Promise<{audioBase64: string, voice: string, audioUrl: string}>}
     */
    async textToSpeech(text, voiceName = null) {
        const resolvedVoice = this._resolveVoice(voiceName || this.defaultVoice);
        const res = await fetch(this.endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'text_to_speech',
                text,
                voice: resolvedVoice
            })
        });

        if (!res.ok) throw new Error(`SREBPS TTS fallito (HTTP ${res.status})`);
        const data = await res.json();
        const b64 = data.audioContent || data.audio_base64;
        if (!b64) throw new Error("Audio content mancante nella risposta TTS.");

        return {
            audioBase64: b64,
            voice: resolvedVoice,
            audioUrl: `data:audio/mp3;base64,${b64}`
        };
    }

    /**
     * Genera un'immagine con FLUX / Imagen SREBPS AI.
     * @param {string} prompt
     * @returns {Promise<string>} URL o Data URI dell'immagine generata
     */
    async generateImage(prompt) {
        const res = await fetch(this.endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'generate_image',
                prompt
            })
        });

        if (!res.ok) throw new Error(`Generazione immagine fallita (HTTP ${res.status})`);
        const data = await res.json();
        if (data.status === 'success' && data.image_url) {
            return data.image_url;
        }
        throw new Error(data.error || "Immagine non generata.");
    }

    /**
     * Crea un gestore conversazione multi-turno con memoria.
     * @param {string} [systemPrompt]
     * @returns {Conversation}
     */
    startConversation(systemPrompt = null) {
        return new Conversation(this, systemPrompt);
    }

    _resolveVoice(name) {
        const s = (name || '').toLowerCase();
        if (s.includes('giuseppe') || s === 'fahad') return 'fahad';
        if (s.includes('fabio') || s === 'sultan') return 'sultan';
        if (s.includes('isabella') || s === 'noura') return 'noura';
        if (s.includes('zoe') || s === 'lulwa') return 'lulwa';
        return 'noura';
    }

    _cleanText(text) {
        if (!text) return "";
        return text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
    }
}

/**
 * Gestore conversazione multi-turno con memoria automatica
 */
export class Conversation {
    constructor(client, systemPrompt = null, maxHistory = 10) {
        this.client = client;
        this.systemPrompt = systemPrompt;
        this.maxHistory = maxHistory;
        this.messages = [];
        if (systemPrompt) {
            this.messages.push({ role: 'system', content: systemPrompt });
        }
    }

    async send(userText, options = {}) {
        const userMsg = { role: 'user', content: userText };
        if (options.imageUrl) {
            userMsg.image_url = options.imageUrl;
            userMsg.images = [options.imageUrl];
        }
        this.messages.push(userMsg);

        const reply = await this.client.chat(this.messages);
        this.messages.push({ role: 'assistant', content: reply });

        // Trim storico
        if (this.messages.length > this.maxHistory) {
            if (this.messages[0].role === 'system') {
                this.messages = [this.messages[0], ...this.messages.slice(-(this.maxHistory - 1))];
            } else {
                this.messages = this.messages.slice(-this.maxHistory);
            }
        }
        return reply;
    }

    clear() {
        this.messages = [];
        if (this.systemPrompt) {
            this.messages.push({ role: 'system', content: this.systemPrompt });
        }
    }
}

export default SrebpsAI;
