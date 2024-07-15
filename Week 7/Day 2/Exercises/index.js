/**  🌟 Exercise 1 : Giphy API: */
const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const query = 'hilarious';
const rating = 'g';

const url = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`

fetch(url)
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });



    // if (!response.ok) {
        //         throw new Error(`HTTP error! Status: ${response.status}`);
        //     }