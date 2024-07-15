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

// let url = 'https://jsonplaceholder.typicode.com/post'

// let options = {
//     method: "POST",
//     headers: {
//     'Content-type': 'application:json',
//     'api-key': 'jkljjh jdhcjai thg v778766890091',
//     'access-token': '24577908'
// },
//     body: JSON.stringify({userID: '4', title: 'my title 3', body: 'xyz'})
//     }
    
//     fetch(url, options)
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log(e);
//     });
    


    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify({userID: 5675, name: 'Noam', title: 'NA', body: 'LOCKED'})
    // })
    // .then(res => {
    //     return res.json();
    // })
    // .then((post) => {
    //     console.log(post);
    // })
    // .catch((e) => {
    //     console.log(e);
    // });



    /**
1.  Create an HTML form in your index.html file with inputs for name, username, and email, 
and a submit button.
2. When the form is submitted, send a POST request to https://users-18kl.onrender.com/usir
with a JSON data, example
{name:'...',username:'...', email:'...'}.
3. Display the response data on the page.
 */

    // fetch('https://users-18kl.onrender.com/userjson', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify({name: 'Noam',username: 'noam4', email: 'noamglick@yahoo.con'})
    // })
    // .then(res => {
    //     return res.json();
    // })
    // .then((post) => {
    //     console.log(post);
    // })
    // .catch((e) => {
    //     console.log(e);
    // });



function submitForm(e){
    e.preventDefault()
    let name = e.target.name.value;
    let username = e.target.username.value;
    let email = e.target.email.value;
    console.log(name, username, email);


fetch('https://users-18kl.onrender.com/userjson', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({name, username, email}),
    })
    .then((res) => {
        return res.json()
    })
    .then ((data) => {
        console.log(data);
    })
    .catch((err) =>{
        console.log(err);
    });
}

    const render = (arr) => {
        const html = arr.map(item =>{
            return `<div> ${item.name} ${item.username} ${item.email}</div>`
        })
        document.getElementById('root').innerHTML = html.join('')
    }



/** async / await */

// async function X(){
//     // return 5;
//     throw new Error('oops...')
// }
// X()
// .then(data => {
//     console.log(data);
// })
// .catch(e=>{
//     console.log(e);
// })

const getX = async () =>{
    return 5;
}

const getY = async () =>{
    return 6;
}

getX()
.then((x)=>{
    getY().then((y) =>{
        console.log(x+y);
    })
    .catch((e)=>{
        console.log(e);
    });
})
.catch((err)=>{
    console.log(err);
});


async function getXY(){
try{
    let x = await getX()
    console.log('X=>', x);
    let y = await getY();
    console.log('y=>', y);
    console.log(x+y);
} catch(e){
    console.log(e);
  }
}
getXY();





// let url = ('https://jsonplaceholder.typicode.com/users')
// .then(res => {
//     return res.json();
// })
// .then(data => {
//     console.log(data);
// })
// .catch((e) => {
//     console.log(e);
// });


const info = async(url) =>{
    try{
        let res =await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await res.json()
        return data
        console.log(data);
    } catch (error){
        console.log(error);
    }
};
info("https://jsonplaceholder.typicode.com/users")
.then((users =>{
    console.log(users);
}));