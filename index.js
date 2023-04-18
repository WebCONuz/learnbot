const TOKEN = "5839830044:AAH6_Ms3iae_ZL99_7U4QFvFKweTOoRlQTE";

(async () => {
  let response = await fetch(`https://api.telegram.org/bot${TOKEN}/getMe`);
  let res = await response.json();
  console.log(res);
})();
