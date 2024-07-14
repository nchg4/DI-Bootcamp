// const users = [
//     { username: "aaa", email: "aaa@gmail.com" },
//     { username: "bbb", email: "bbb@gmail.com" },
//     { username: "ccc", email: "ccc@gmail.com" },
//   ];
//   /** 1. getDataFromServer function return a Promise with users data as Array of objects from server as json
//    * Simulate successful completion after 2 seconds
//    * 2. Call this function and log the data as an Array datatype 
//    * 3. Simulate an error
//    * 4. return to step 2, and create render function that will display the users on the html page
//   */

//   /** 1 create a function  */

//   const getDataFromServer = (arr) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(arr) res (JSON.stringify(arr));
//             else rej ('404 no data found')
//         }, 2000);
//     });
//   };
// const render = (arr) => {
//     const body = document.getElementsByTagName('body')[0];
//     const html = arr.map(item =>{
//         return `<div>
//         ${item.username} ${item.email}
//         </div>`
//     });
//     body.innerHTML = html.join("");
// };


// /** 2 */
//   getDataFromServer(users)
//   .then((data) => {
//     // console.log(JSON.parse(data));
//     // render(JSON.parse(data))
//     return JSON.parse(data);
//   })
//     .then((data)=> {
//         return new Promise((res) => {
//             result(data.find((item) => item.username === "Noam"));
//         });
//     })
//     .then((user) => {
//         return user.email;
//     })
//     .then((useremail) => {
//         console.log(useremail);
//     })
//     .catch((err) =>{
//     console.log(err);
//   });


