const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const form = document.getElementById('gif-form');
const gifContainer = document.getElementById('gif-container');
const deleteAllButton = document.getElementById('delete-all');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const category = document.getElementById('gif-input').value;
    await fetchGif(category);
    form.reset();
});

async function fetchGif(category) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}`);
    const data = await response.json();
    const gifUrl = data.data.images.original.url;

    appendGif(gifUrl);
}

function appendGif(gifUrl) {
    const gifDiv = document.createElement('div');
    const gifImage = document.createElement('img');
    gifImage.src = gifUrl;
    gifImage.alt = 'Random GIF';
    gifImage.style.width = '200px';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.onclick = () => {
        gifDiv.remove();
    };

    gifDiv.appendChild(gifImage);
    gifDiv.appendChild(deleteButton);
    gifContainer.appendChild(gifDiv);
}

deleteAllButton.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});