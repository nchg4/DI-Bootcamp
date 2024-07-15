/** Fetch */ // is a function that returns a promise; so we need to resolve it. it can send a request to any url/api and get a response back
/** Async / Await */


/** FETCH: */
// let url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url)
// .then(res => {
//     return res.json();
// })
// .then(data => {
//     console.log(data);
// })
// .catch((e) => {
//     console.log(e);
// });


// /** (FETCH) */
// // let url = 'https://jsonplaceholder.typicode.com/users';

// let options = {
// method: "GET",
// headers: {
//     'Content-type': 'application:json',
//     'api-key': 'jkljjh jdhcjai thg v778766890091',
//     'access-token': '24577908'
// },
// body: JSON.stringify({name: 'Ido', password: '1quawe#xwYaYZ3294'})
// }

// fetch(url, options)
// .then(res => {
//     return res.json();
// })
// .then(data => {
//     console.log(data);
// })
// .catch((e) => {
//     console.log(e);
// });

/** in the response we have or or:
 * json(): response.json() -> JSON.parse -> promise
 * text(): response.text() -> text -> return promise
 */




/**post request  */

let url = 'https://jsonplaceholder.typicode.com/post'

let options = {
    method: "POST",
    headers: {
    'Content-type': 'application:json',
    'api-key': 'jkljjh jdhcjai thg v778766890091',
    'access-token': '24577908'
},
    body: JSON.stringify({userID: '4', title: 'my title 3', body: 'xyz'})
    }
    
    fetch(url, options)
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    });
    














