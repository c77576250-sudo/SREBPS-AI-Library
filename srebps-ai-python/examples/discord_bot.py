"""
Bot Discord con SREBPS AI Python SDK
====================================
Richiede: pip install discord.py aiohttp
Avvio: DISCORD_TOKEN="il_tuo_token" python discord_bot.py
"""

import os
import io
import discord
from discord.ext import commands
from srebps_ai import SrebpsAI

# Configurazione Bot
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents, help_command=None)

# Client SREBPS AI
ai = SrebpsAI()

# Dizionario per memorizzare le conversazioni degli utenti (user_id -> Conversation)
user_conversations = {}

@bot.event
async def on_ready():
    print(f"🤖 Bot connesso come {bot.user} (ID: {bot.user.id})")
    print("Pronto per ricevere comandi SREBPS AI!")
    await bot.change_presence(activity=discord.Activity(type=discord.ActivityType.listening, name="!ai o !help"))

@bot.command(name="ai", aliases=["chiedi", "ask"])
async def cmd_ai(ctx, *, prompt: str):
    """Fa una domanda a SREBPS AI mantenendo il contesto della conversazione."""
    user_id = ctx.author.id
    if user_id not in user_conversations:
        user_conversations[user_id] = ai.start_conversation(
            system_prompt="Sei SREBPS AI, assistente ufficiale nel server Discord. Rispondi con tono amichevole e sintetico."
        )

    chat = user_conversations[user_id]
    async with ctx.typing():
        try:
            # Controllo allegati immagini (Vision multimodale)
            image_url = None
            if ctx.message.attachments:
                att = ctx.message.attachments[0]
                if att.content_type and att.content_type.startswith("image/"):
                    image_url = att.url

            risposta = chat.send(prompt, image_url=image_url)

            # Dividi messaggi lunghi (> 2000 caratteri per limite Discord)
            if len(risposta) <= 1990:
                await ctx.reply(risposta)
            else:
                chunks = [risposta[i:i+1950] for i in range(0, len(risposta), 1950)]
                for ch in chunks:
                    await ctx.send(ch)

        except Exception as e:
            await ctx.reply(f"❌ Errore durante la richiesta a SREBPS AI: {e}")

@bot.command(name="reset")
async def cmd_reset(ctx):
    """Azzera la memoria della conversazione con SREBPS AI."""
    user_id = ctx.author.id
    if user_id in user_conversations:
        user_conversations[user_id].clear()
        await ctx.reply("🧹 Memoria conversazione azzerata!")
    else:
        await ctx.reply("Nessuna conversazione attiva da azzerare.")

@bot.command(name="immagine", aliases=["imagine", "draw"])
async def cmd_immagine(ctx, *, prompt: str):
    """Genera un'immagine con SREBPS AI."""
    async with ctx.typing():
        try:
            url_o_b64 = ai.generate_image(prompt)
            embed = discord.Embed(
                title=f"🎨 SREBPS AI Art: {prompt[:80]}",
                color=0x6366f1
            )
            embed.set_image(url=url_o_b64)
            embed.set_footer(text=f"Richiesto da {ctx.author.display_name}")
            await ctx.reply(embed=embed)
        except Exception as e:
            await ctx.reply(f"❌ Errore generazione immagine: {e}")

@bot.command(name="voce", aliases=["tts"])
async def cmd_voce(ctx, voce: str, *, testo: str):
    """
    Sintetizza un messaggio vocale con SREBPS AI.
    Uso: !voce [isabella|giuseppe|fabio|zoe] testo da pronunciare
    """
    async with ctx.typing():
        try:
            res = ai.text_to_speech(testo, voice=voce)
            import base64
            audio_bytes = base64.b64decode(res.audio_base64)
            audio_file = discord.File(io.BytesIO(audio_bytes), filename="srebps_voce.mp3")
            await ctx.reply(content=f"🎙️ Voce SREBPS AI ({res.voice}):", file=audio_file)
        except Exception as e:
            await ctx.reply(f"❌ Errore sintesi vocale: {e}")

if __name__ == "__main__":
    token = os.getenv("DISCORD_TOKEN")
    if not token:
        print("⚠ ATTENZIONE: Imposta la variabile d'ambiente DISCORD_TOKEN prima di avviare il bot.")
    else:
        bot.run(token)
