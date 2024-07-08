// /function that gets an array and returns an array multiplied by two

// /ex: array[1,2,3,4,]
// /ex: result: array[2,4,6,8]

// function multByTwo (){
//     let numDouble = arr;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != 0) {
//           Total = numDouble * 2;
//     }
//     return numDouble;
// }
// }

// const arr = [2,6,7,9,12]
// console.log(multByTwo(arr));

// //map mehtod
// let arr = [1,2,3,4,5, 33, 88, 90, 67,43,213, 878, 90876];
// let retArr = arr.map((item) =>{
//     return item * 2;
// })
// console.log(arr);
// console.log((retArr));


////excercise use map method:
//use map method to render the users on the page//
// let users = [
//     { userid: 1, name: "John", email: "John@gmail.com" },
//     { userid: 2, name: "Marry", email: "Marry@gmail.com" },
//     { userid: 3, name: "Anne", email: "Anne@gmail.com" },
//     { userid: 3, name: "Anne", email: "Anne@gmail.com" },
//   ];
//   let retArr = users.map((items) =>{
//     return items
// });
// console.log(retArr);


// let users = [
//     { userid: 1, name: "John", email: "John@gmail.com" },
//     { userid: 2, name: "Marry", email: "Marry@gmail.com" },
//     { userid: 3, name: "Anne", email: "Anne@gmail.com" },
//     { userid: 3, name: "Anne", email: "Anne@gmail.com" },
//   ];

// function render(arr){
//     let html = arr.map(item => {
//         return `<div>${item.userid}) ${item.name}: ${item.email}</div>`
//     })
//     console.log(html);
//     document.getElementById('rend').innerHTML = html.join('')
// }
// render(users)



////create a function that gets an array of 
////numbers as input, and that wil return a new array with numbers gretaer than three 

// const filter = (arr) => {
//     let retArr = [];
//     for (let item of arr){
//         if (item > 3) retArr.push(item);
//     }
//     return retArr
// }
// console.log(filter[0,1,2,3,4,6,5,1,3,2,1,2,4,6,4,3,2,5,3,5,3,5,7,8,9,9,5,6,7,8,9,7,4]);


/**filter method */
// let arr = [0,1,1,2,3,5,8];
// let retArr = arr.filter((items) => {
//     return item > 3;
// });
// console.log(retArr);

// ////name including 'o' case insensitive
// let users = [
// { userid: 1, name: "John", email: "John@gmail.com" },
// { userid: 2, name: "Marry", email: "Marry@gmail.com" },
// { userid: 3, name: "Anne", email: "Anne@gmail.com" },
// { userid: 3, name: "Or", email: "or@gmail.com" },
// ];
// let newArr = users.filter(items =>{
//     return items.name.toLowerCase().includes('o')
// });
// console.log(newArr);



////excercise:
//// create a function to get the sum of an Array
//// ex: array[2,5,10,100]
//// result: 117



// /**reduce */
// let numbers = [2,5,10,100]
// let sum = numbers.reduce((total, item) => {
//     return total + item
// }, 100)
// console.log(sum);

// /**return first item with userid ===3  */

// let users = [
//     { userid: 1, name: "John", email: "John@gmail.com" },
//     { userid: 2, name: "Marry", email: "Marry@gmail.com" },
//     { userid: 3, name: "Anne", email: "Anne@gmail.com" },
//     { userid: 4, name: "Or", email: "or@gmail.com" },
//     ];
// let newArr = users.filter(items =>{
//     return items.userid.includes(3)
// });
// console.log(newArr);


/**bday candles
 * you can blow only the tallest ones
 * let arr = [2,8,4,4,8,1,8]
 * function is to return how many candles can be blown 
 */

const maxHeight = (arr) => {
    let max = arr[0];
    for(let i =1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}
// console.log(maxHeight(arr2));

const birthdayCakeCandles = (arr) => {
    let maxNum = maxHeight (arr);
    return arr.filter((item) => item === maxNum).length;
}
console.log(birthdayCakeCandles(arr2));

/**array destruction */
let nums = [1,2,3]
// let a = nums[0]
// let b = nums[1]
// let c = nums[2]
////^there is a shorter way to do this:
// let [b,a,c] = nums
// let [a,b ,c] = nums
// console.log(a,b,c);

let nums1 = [1,2,3,4,5,6]
// let [a,b,c, ...d] = nums
// console.log(a,b,c, d);
////result: [1,2,3, [4,5,6]]

let a = 1
let b = 2
let c = 3

/**spread oporator: */
let d = [a,b, ...c];
// let d = [...c, a, b];
// let d = [a, ...c, b];
// let d = [a, ...c, ...b];
console.log(d);







































