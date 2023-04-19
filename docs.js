const TOKEN = "5839830044:AAH6_Ms3iae_ZL99_7U4QFvFKweTOoRlQTE";
const chatId = 1251901085;

// (async () => {
//   //   let response = await fetch(`https://api.telegram.org/bot${TOKEN}/getMe`);
//   let response = await fetch(`https://api.telegram.org/bot${TOKEN}/getUpdates`);
//   let res = await response.json();
//   console.log(res.result[0].message);
// })();

// (async () => {
//   let response = await fetch(
//     `https://api.telegram.org/bot${TOKEN}/sendMessage`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         chat_id: chatId,
//         text: "Salom Muxammadi. Photo: https://picsum.photos/400",
//         // parse_mode: "HTML",
//         disable_web_page_preview: false,
//         reply_to_message_id: 9,
//       }),
//     }
//   );
//   let res = await response.json();
//   console.log(res);
// })();

// (async () => {
//   let response = await fetch(
//     `https://api.telegram.org/bot${TOKEN}/sendDocument`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         chat_id: chatId,
//         document: "https://picsum.photos/300",
//         caption: "Dengiz",
//       }),
//     }
//   );
//   let res = await response.json();
//   console.log(res);
// })();

// (async () => {
//   let response = await fetch(
//     `https://api.telegram.org/bot${TOKEN}/sendMediaGroup`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         chat_id: chatId,
//         media: [
//           {
//             type: "photo",
//             media: "https://picsum.photos/400",
//           },
//           {
//             type: "photo",
//             media: "https://picsum.photos/300",
//           },
//         ],
//       }),
//     }
//   );
//   let res = await response.json();
//   console.log(res);
// })();

// (async () => {
//   let response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendVenue`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       chat_id: chatId,
//       latitude: 57.14,
//       longitude: 30.57,
//       title: "Qanaqadir joy",
//       address: "Qayerdir",
//     }),
//   });
//   let res = await response.json();
//   console.log(res);
// })();

// (async () => {
//   let response = await fetch(
//     `https://api.telegram.org/bot${TOKEN}/sendContact`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         chat_id: chatId,
//         phone_number: 998995426307,
//         first_name: "Muxammadi",
//       }),
//     }
//   );
//   let res = await response.json();
//   console.log(res);
// })();

// (async () => {
//   let response = await fetch(
//     `https://api.telegram.org/bot${TOKEN}/sendChatAction`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         chat_id: chatId,
//         action: "typing",
//       }),
//     }
//   );
//   let res = await response.json();
//   console.log(res);
// })();

(async () => {
  let response = await fetch(
    `https://api.telegram.org/bot${TOKEN}/sendChatAction`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        action: "typing",
      }),
    }
  );
  let res = await response.json();
  console.log(res);
})();
