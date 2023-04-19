const keyboard = require("./keyboards");

module.exports = class Functions {
  static async setName(text, bot, psql, user) {
    await psql.users.update(
      {
        step: 2,
        user_name: text,
      },
      {
        where: {
          chat_id: user.chat_id,
        },
      }
    );
    await bot.sendMessage(
      user.chat_id,
      "Ism muvaffaqiyatli o'rnatildi, iltimos pastdagi tugma orqali raqamingizni kiriting.",
      {
        reply_markup: {
          resize_keyboard: true,
          keyboard: keyboard.setPhoneKeyboard,
        },
      }
    );
  }

  static async setPhone(phone, bot, psql, user) {
    await psql.users.update(
      {
        step: 3,
        user_phone: phone,
      },
      {
        where: {
          chat_id: user.chat_id,
        },
      }
    );
    await bot.sendMessage(
      user.chat_id,
      "Raqam muvaffaqiyatli o'rnatildi. Siz muvaffaqiyatli ro'yxatdan o'tdingiz",
      {
        reply_markup: {
          remove_keyboard: true,
        },
      }
    );
  }
};
