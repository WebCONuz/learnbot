module.exports = class Controllers {
  static async MessageController(message, bot) {
    const chat_id = message.chat.id;
    const user_id = message.from.id;
    const text = message.text;

    bot.sendMessage(chat_id, text);
  }
};
