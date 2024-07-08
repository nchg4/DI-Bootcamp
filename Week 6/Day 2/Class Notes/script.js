// /**Array method */

// // let users = ['John', 'Marry', 'Dan', 'Anne'];

// ////Loops

// for(let item of users){
//     // console.log(item);
// }


// ////in this loop we can change the conditions
// ////-2...etc to get specific names/items
// for(let i = o; i < users.length; i++){
//     // console.log(users[i]);
// }

// ////let i loop:
// let i =0;
// while (i < users.length){
//     // console.log(users[i]);
//     i++;
// }


// ////for item(in this case users^)
// for(let indx in users){
//     // console.log(users[indx]);
// }





// ////Array method loop
// ////This loop can only be used on an array
// ///this loop is called "for each"
// //// for each loop
// users.forEach (    (item)=> {
//     // console.log(item);
// })
////^^^Item can be called anything i want, usually its item 
////or its the name of the array in this case users





/**create array of users emails */
// let users = ['John', 'Marry', 'Dan', 'Anne'];

// ///this one is used if you NEED to keep the og items(names)
// let arr = []
// users.forEach((users) => {
//     arr.push(users + "gmail.com")
// });
// console.log(arr);




// users.forEach((users, indx, arr) => {
//     arr[indx] = users + "gmail.com"
// });
// console.log(users);