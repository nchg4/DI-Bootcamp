const url = "http://localhost:3001/emojis";
let currentEmoji;
let score = 0;

const fetchEmojis = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      currentEmoji = data.randomEmoji;
      document.getElementById('emoji').innerHTML = currentEmoji.emoji;

      const options = data.options.map(opt => 
        `<label><input type="radio" name="option" value="${opt.name}"> ${opt.name}</label><br>`
      ).join('');
      document.getElementById('options').innerHTML = options;
    })
    .catch((e) => {
      console.log(e);
    });
};

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

    saveScore(score);
    displayLeaderboard();
    
    fetchEmojis(); 
  } else {
    document.getElementById('feedback').innerHTML = 'Please select an option.';
  }
};

const saveScore = (score) => {
  let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
  leaderboard.push({ score, date: new Date() });
  leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
};

const displayLeaderboard = () => {
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
  const leaderboardHTML = leaderboard.map(entry => 
    `<li>Score: ${entry.score} - Date: ${new Date(entry.date).toLocaleString()}</li>`
  ).join('');
  document.getElementById('leaderboard').innerHTML = `<h3>Leaderboard:</h3><ul>${leaderboardHTML}</ul>`;
};

document.getElementById('guessForm').addEventListener('submit', handleSubmit);
fetchEmojis();
