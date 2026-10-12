import { SrebpsAI } from '../src/index.js';

async function main() {
    console.log("🤖 Inizializzazione SREBPS AI...");
    const ai = new SrebpsAI();

    console.log("\nUtente: Chi sei e cosa puoi fare?");
    const reply = await ai.chat("Chi sei e cosa puoi fare?");
    console.log("SREBPS AI:\n" + reply);

    console.log("\n--- Test Memoria Conversazionale ---");
    const chat = ai.startConversation("Sei un assistente conciso.");
    console.log("Utente: Ricordati che sto sviluppando un gioco in Three.js.");
    console.log("AI:", await chat.send("Ricordati che sto sviluppando un gioco in Three.js."));

    console.log("\nUtente: Di cosa ti ho appena parlato?");
    console.log("AI:", await chat.send("Di cosa ti ho appena parlato?"));
}

main().catch(console.error);
