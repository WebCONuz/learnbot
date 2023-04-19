const generator = require("generate-password");

module.exports = class Controllers {
  static async MessageController(message, bot, psql) {
    const chat_id = message.chat.id;
    const user_id = message.from.id;
    const text = message.text;

    const user = await psql.users.findOne({
      where: {
        chat_id,
      },
    });

    if (!user) {
      await psql.users.create({ chat_id });
      bot.sendMessage(
        chat_id,
        "Siz botda yangisiz. Iltimos ismingizni kiririting"
      );
    } else {
      bot.sendMessage(chat_id, "Siz ro'yxatda borsiz");
    }
  }
};
