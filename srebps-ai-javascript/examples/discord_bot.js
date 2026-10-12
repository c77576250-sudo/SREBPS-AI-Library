/**
 * Bot Discord con SREBPS AI e Discord.js v14
 * ==========================================
 * Richiede: npm install discord.js
 * Avvio: DISCORD_TOKEN="il_tuo_token" node discord_bot.js
 */

import { Client, GatewayIntentBits, AttachmentBuilder, EmbedBuilder } from 'discord.js';
import { SrebpsAI } from '../src/index.js';

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
    console.log(`🤖 Bot Discord connesso come ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const content = message.content.trim();

    // Comando !ai [domanda]
    if (content.startsWith('!ai ')) {
        const prompt = content.slice(4).trim();
        if (!prompt) return message.reply("Inserisci una domanda per SREBPS AI!");

        const userId = message.author.id;
        if (!userConversations.has(userId)) {
            userConversations.set(userId, ai.startConversation(
                "Sei SREBPS AI, assistente ufficiale nel server Discord. Rispondi con stile amichevole e preciso."
            ));
        }

        const chat = userConversations.get(userId);

        try {
            await message.channel.sendTyping();

            let imageUrl = null;
            if (message.attachments.size > 0) {
                const first = message.attachments.first();
                if (first.contentType?.startsWith('image/')) {
                    imageUrl = first.url;
                }
            }

            const response = await chat.send(prompt, { imageUrl });

            // Invio risposta dividendo se supera i 2000 caratteri
            if (response.length <= 1990) {
                await message.reply(response);
            } else {
                for (let i = 0; i < response.length; i += 1950) {
                    await message.channel.send(response.slice(i, i + 1950));
                }
            }
        } catch (err) {
            console.error(err);
            await message.reply(`❌ Errore SREBPS AI: ${err.message}`);
        }
    }

    // Comando !immagine [prompt]
    if (content.startsWith('!immagine ')) {
        const prompt = content.slice(10).trim();
        try {
            await message.channel.sendTyping();
            const imgUrl = await ai.generateImage(prompt);
            const embed = new EmbedBuilder()
                .setTitle(`🎨 SREBPS AI Art: ${prompt.slice(0, 60)}`)
                .setImage(imgUrl)
                .setColor(0x6366f1)
                .setFooter({ text: `Richiesto da ${message.author.username}` });

            await message.reply({ embeds: [embed] });
        } catch (err) {
            await message.reply(`❌ Errore generazione immagine: ${err.message}`);
        }
    }

    // Comando !voce [isabella|giuseppe|fabio|zoe] [testo]
    if (content.startsWith('!voce ')) {
        const parts = content.slice(6).trim().split(' ');
        const voiceName = parts[0];
        const text = parts.slice(1).join(' ');

        if (!text) return message.reply("Uso: !voce [isabella|giuseppe|fabio|zoe] [testo]");

        try {
            await message.channel.sendTyping();
            const tts = await ai.textToSpeech(text, voiceName);
            const buffer = Buffer.from(tts.audioBase64, 'base64');
            const attachment = new AttachmentBuilder(buffer, { name: 'srebps_audio.mp3' });
            await message.reply({ content: `🎙️ Voce SREBPS AI (${tts.voice}):`, files: [attachment] });
        } catch (err) {
            await message.reply(`❌ Errore sintesi vocale: ${err.message}`);
        }
    }
});

const token = process.env.DISCORD_TOKEN;
if (token) {
    client.login(token);
} else {
    console.log("⚠ Imposta DISCORD_TOKEN prima di avviare il bot Discord.");
}
