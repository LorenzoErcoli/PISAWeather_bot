require('dotenv').config()

const TelegramBot = require("node-telegram-bot-api");
const TOKEN = process.env.TOKEN;

// Crea una nuova istanza bot Telegram
const bot = new TelegramBot(TOKEN, { polling: true });

// Ascolta i messaggi
bot.on("message", (msg) => {
    bot.sendMessage(msg.chat.id, "Ciao, Arnaldo! Lorenzo è riuscito a fare il suo primo bot");
});


console.log("miao")