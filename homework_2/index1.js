function sendsSMS(smsText) {
  let textToString = smsText.toString();

  if (textToString.length <= 60) {
    let count = 60 / textToString.length;
    return console.log(
      `You need ${Math.floor(count)} sms to send text - ${textToString}`
    );
  }
  if (textToString.length > 60) {
    console.log("you can not send this text, count of symbols is more than 60");
  }
}

sendsSMS(
  "Beneath a starlit sky, a lone wolf howled, its call echoing through the silent forest. The moon cast shadows on the rugged terrain, as the night unfolded, revealing nature's timeless dance."
);

sendsSMS("need");
