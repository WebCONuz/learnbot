const chatId = 1251901085;

const TelegramBot = require("node-telegram-bot-api");
const Controllers = require("./controllers");
const { TOKEN, OPTIONS } = require("./config");
const postgres = require("./modules/postgres");

const bot = new TelegramBot(TOKEN, OPTIONS);

async function main() {
  const psql = await postgres();
  await bot.on("text", (message) =>
    Controllers.MessageController(message, bot, psql)
  );
  await bot.on("contact", async (message) =>
    Controllers.ContactController(message, bot, psql)
  );
}
main();
