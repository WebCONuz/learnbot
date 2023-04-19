const generator = require("generate-password");
const functions = require("./functions");

module.exports = class Controllers {
  static async MessageController(message, bot, psql) {
    const chat_id = message.chat.id;
    const text = message.text;

    const user = await psql.users.findOne({
      where: {
        chat_id,
      },
    });

    if (!user) {
      await psql.users.create({ chat_id });
      await bot.sendMessage(
        chat_id,
        "Siz botda yangisiz. Iltimos ismingizni kiririting"
      );
    } else if (user.step == 1) {
      await functions.setName(text, bot, psql, user);
    } else if (user.step == 3) {
      await bot.sendMessage(
        chat_id,
        "Siz ro'yxatdan o'tgansiz, Iltimos kuting"
      );
    } else {
      await bot.sendMessage(chat_id, "Belgilanmagan habar");
    }
  }

  static async ContactController(message, bot, psql) {
    const chat_id = message.chat.id;
    const contact = message.contact;

    const user = await psql.users.findOne({
      where: {
        chat_id,
      },
    });

    if (!user) {
      await bot.sendMessage(chat_id, "Iltimos /start tugmasini bosing");
    } else if (user.step == 2) {
      await functions.setPhone(contact.phone_number, bot, psql, user);
    } else {
      await bot.sendMessage(chat_id, "Belgilanmagan habar");
    }
  }
};
