const TOKEN = "5839830044:AAH6_Ms3iae_ZL99_7U4QFvFKweTOoRlQTE";
const chatId = 1251901085;

(async () => {
  let response = await fetch(
    `https://api.telegram.org/bot${TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: "Salom Muxammadi. Photo: https://picsum.photos/300",
        disable_web_page_preview: false,
        reply_to_message_id: 9,
        reply_markup: {
          one_time_keyboard: true,
          resize_keyboard: true,
          inline_keyboard: [
            [
              {
                text: "inline button",
                url: "https://youtube.com",
              },
            ],
          ],
          keyboard: [
            [
              {
                text: "Location",
                request_location: true,
              },
              {
                text: "Contact",
                request_contact: true,
              },
            ],
          ],
        },
      }),
    }
  );
  let res = await response.json();
  console.log(res);
})();
