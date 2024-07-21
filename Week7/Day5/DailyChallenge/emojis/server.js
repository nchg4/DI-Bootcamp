const express = require("express");
const { emojis } = require("./config/emojis");

const app = express();

function getRandomDistractors(correctEmoji, allEmojis, count = 3) {
  let distractors = [];
  while (distractors.length < count) {
    const randomIndx = Math.floor(Math.random() * allEmojis.length);
    const distractor = allEmojis[randomIndx];
    if (distractor !== correctEmoji && !distractors.includes(distractor)) {
      distractors.push(distractor);
    }
  }
  return distractors;
}

app.use("/", express.static(__dirname + "/public"));

app.get("/emojis", (req, res) => {
  const randomIndx = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndx];
  const distractors = getRandomDistractors(randomEmoji, emojis);

  const options = [randomEmoji, ...distractors];
  options.sort(() => Math.random() - 0.5); 

  res.json({ randomEmoji, options });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

