const TOKEN = "5839830044:AAH6_Ms3iae_ZL99_7U4QFvFKweTOoRlQTE";
const chatId = 1251901085;

const TelegramBot = require("node-telegram-bot-api");
const Controllers = require("./controllers");

const options = {
  polling: true,
};

const bot = new TelegramBot(TOKEN, options);
bot.on("text", (message) => Controllers.MessageController(message, bot));
bot.getMe().then((info) => console.log(info));
