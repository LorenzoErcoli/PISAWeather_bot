require('dotenv').config()

const TelegramBot = require("node-telegram-bot-api");
const TOKEN = process.env.TOKEN;

// Crea una nuova istanza bot Telegram
const bot = new TelegramBot(TOKEN, { polling: true });

// Ascolta i messaggi
bot.on("message", (msg) => {
    bot.sendMessage(msg.chat.id, "Ciao, questo è il tuo primo bot telegram!");
});

console.log("miao")