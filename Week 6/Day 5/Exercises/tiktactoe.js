// Game variables
let currentPlayer, opponentPlayer;
let board = ['', '', '', '', '', '', '', '', '']; // Represents the board state
let winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];
let gameActive = true;

// Elements
const statusDisplay = document.getElementById('status');

// Function to handle click on cells
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.id);

    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    // Player's move
    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    checkGameStatus();

    // AI's move
    if (gameActive) {
        aiTurn();
        checkGameStatus();
    }
}

// Function to check game status (win, tie, continue)
function checkGameStatus() {
    let roundWon = false;
    let winningPlayer = '';
    for (let i = 0; i < winCombos.length; i++) {
        const [a, b, c] = winCombos[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            winningPlayer = board[a];
            break;
        }
    }

    if (roundWon) {
        statusDisplay.textContent = `${winningPlayer} wins!`;
        gameActive = false;
        return;
    }

    let roundDraw = !board.includes('');
    if (roundDraw) {
        statusDisplay.textContent = 'It\'s a draw!';
        gameActive = false;
        return;
    }

    // Switch turns
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `${currentPlayer}'s turn`;
}

// AI's turn (simple random move for easy level)
function aiTurn() {
    let emptyCells = board.reduce((acc, cell, index) => {
        if (cell === '') acc.push(index);
        return acc;
    }, []);

    if (emptyCells.length > 0) {
        let randomIndex = Math.floor(Math.random() * emptyCells.length);
        let moveIndex = emptyCells[randomIndex];
        board[moveIndex] = opponentPlayer;
        document.getElementById(moveIndex.toString()).textContent = opponentPlayer;
    }
}

// Function to reset the game
function resetGame() {
    currentPlayer = 'X';
    opponentPlayer = 'O';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    statusDisplay.textContent = `${currentPlayer}'s turn`;

    // Clear board display
    document.querySelectorAll('td').forEach(cell => cell.textContent = '');
}

// Initialize game
function initializeGame() {
    resetGame();
    document.querySelectorAll('td').forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
}

// Start the game when the page loads
initializeGame();
