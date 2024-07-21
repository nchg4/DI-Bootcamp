// const url = "http://localhost:3001/emojis";

// const randomEmoji = document.getElementById('emoji')

// const emojis = () => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((emojis) => {
//     //   console.log(emojis.randomEmoji);
//       randomEmoji.innerHTML = emojis.randomEmoji.emoji
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };
// emojis()
const url = "http://localhost:3001/emojis";
let currentEmoji;
let score = 0;

// Fetch a new emoji and update the UI
const fetchEmojis = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      currentEmoji = data.randomEmoji;
      document.getElementById('emoji').innerHTML = currentEmoji.emoji;

      // Display multiple choice options
      const options = data.options.map(opt => 
        `<label><input type="radio" name="option" value="${opt.name}"> ${opt.name}</label><br>`
      ).join('');
      document.getElementById('options').innerHTML = options;
    })
    .catch((e) => {
      console.log(e);
    });
};

// Handle form submission
const handleSubmit = (event) => {
  event.preventDefault();
  const selectedOption = document.querySelector('input[name="option"]:checked');
  
  if (selectedOption) {
    const guess = selectedOption.value;
    if (guess === currentEmoji.name) {
      score++;
      document.getElementById('feedback').innerHTML = `Correct! Your score is ${score}.`;
    } else {
      document.getElementById('feedback').innerHTML = `Wrong! The correct answer was ${currentEmoji.name}. Your score is ${score}.`;
    }

    // Save score to local storage and display leaderboard
    saveScore(score);
    displayLeaderboard();
    
    fetchEmojis(); // Load a new emoji for the next round
  } else {
    document.getElementById('feedback').innerHTML = 'Please select an option.';
  }
};

// Save score to local storage
const saveScore = (score) => {
  let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
  leaderboard.push({ score, date: new Date() });
  leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
};

// Display leaderboard from local storage
const displayLeaderboard = () => {
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
  const leaderboardHTML = leaderboard.map(entry => 
    `<li>Score: ${entry.score} - Date: ${new Date(entry.date).toLocaleString()}</li>`
  ).join('');
  document.getElementById('leaderboard').innerHTML = `<h3>Leaderboard:</h3><ul>${leaderboardHTML}</ul>`;
};

// Add event listener to form and fetch initial emoji
document.getElementById('guessForm').addEventListener('submit', handleSubmit);
fetchEmojis();
