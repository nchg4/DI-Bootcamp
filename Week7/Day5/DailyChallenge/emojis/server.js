const express = require("express");
const { emojis } = require("./config/emojis");

const app = express();

// Helper function to get random distractors
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

// Serve static files from the public folder
app.use("/", express.static(__dirname + "/public"));

// API endpoint to get a random emoji with options
app.get("/emojis", (req, res) => {
  const randomIndx = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndx];
  const distractors = getRandomDistractors(randomEmoji, emojis);

  // Combine the correct answer with distractors and shuffle
  const options = [randomEmoji, ...distractors];
  options.sort(() => Math.random() - 0.5); // Shuffle the array

  res.json({ randomEmoji, options });
});

// Start the server
app.listen(3001, () => {
  console.log("Server running on port 3001");
});

