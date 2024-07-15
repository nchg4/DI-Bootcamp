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


    /** 🌟 Exercise 2 : Giphy API */
            /**???????**/


    /** 🌟 Exercise 3 : Async Function*/ 
    async function fetchData() {
        try {
          const response = await fetch('https://www.swapi.tech/api/starships/9/');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const objectStarWars = await response.json();
          console.log(objectStarWars);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
    fetchData();


    // 🌟 Exercise 4: Analyze
    // function resolveAfter2Seconds() {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve('resolved');
    //         }, 2000);
    //     });
    // }
    
    // async function asyncCall() {
    //     console.log('calling');
    //     let result = await resolveAfter2Seconds();
    //     console.log(result);
    // }
    
    // asyncCall();

    /** outcome:
     * calling
     * restult //after two seconds//
     * */

