/**Scope/scoping */

// {
//     let y = 8;
// }
// console.log(y);



// /**Hosting: */
// console.log(a);
// /**a is not defined and niot initalized */

// var a = 'a' //a will now be initalized but not defined

// console.log(a); //a will show up in screen

// console.log(x()); //can log it before
// function x(){
//     return 5;
// }
// console.log(x()); //or after 


// // console.log(b); //will not work if its before the let
// let b = 'b'
// console.log(b); //will only work now

// know difference btwn var & let//

/**default parameter */

// function sum(x,y = 0){
//     return x+9
// }
// // console.log(sum(undefined, 8));

// /**Conditional / ternary operator */
// let x = 5;
// let c;
// if (x < 5){
//     c=0;
// } else{
//     c=1;
// }
/**?=if */
// let d = x<5 ? 0 : 1
// console.log(d);


/**In class xp */

// function checkYear(year) {
//     return year > 2000
//     ? 'You live in the 21st century'
//     : 'You live in the stone ages'

// }
// console.log(checkYear(2001));


// /**Template strings */
// let name = 'John';
// let last = 'Doe';

// let greeting = 'Hello' + name + " " + last;
// console.log(greeting);


// let greeting2 = `Hello, ${name} ${last}`
// console.log(greeting2);

/** //here i dont need to add a " " for spaces,
//and if i want to make it multi line i just press enter;
//ex1*/
// let greeting = 'Hello, \n' + name + "\n" + last;
// console.log(greeting);

// /**ex2*/
// let greeting2 = `Hello, 
// ${name}
// ${last}`
// console.log(greeting2);


/**Functions: */
/**Function Decleration:: */
// function sum(a,b) {
//     return a*b;
// }
// console.log(2,2);//even if i log this before the function i will still recieve the answer..

// /**Function expression */
// const sum2 = function(a,b) {
//     return a + b;
// }
// console.log(2,2); //here i cannot log before 


/**Arrow function: => */
// const sum3 = (a,b) => {
//     return a + b
// }
// console.log(sum3);

// const getvalue = (val1) => {
//     return val1;
// };

// const sum4 = (a, b) => a + b;

// console.log(sum4(6,6));


/** np `argument` object in arrow function*/

// function print() {
//     console.log(arguments);
// }
// print('hello', 400, false)

// function print() {
//     console.log(arguments[0], arguments[1], arguments[2]);
// }
// print('hello', 400, false)

// const print2 = () => console.log(arguments);
// print2('hello', 400, false);

/**arrow functions do not create their own `this`
 * we will talk about this later*/
// let obj = {
//     a:1,
//     b: function(){
//         return 3;
//     },
// };


/** xp in class */

// const calc = (a,b, operator) => 
// operator === '+'?a+b :
// operator === "-"? a-b :
// operator === "*"? a*b :
// operator === "/"
// ? b !== 0 
// ? a/b
// : 'division by zero'
// : 'invalid operator';

/**self invoke function */
// (function() {
//     console.log('hello from z');
// })('hello from space');

// (val)() {
//     console.log('hello from z' + val);
// }('space');



/**nested function
 * function inside a function
 :*/

// function nested(){
//     let b = "otter variable";
//     function innerNested(){
//         console.log(b);
//         console.log('hello from innert ');
//     }
//     console.log(a);
//     return innerNested;
// }

// let result = nested()
// result();
/**same as^ */
// nested()()


// function sumA(a){
//     function sumB(b){
//         return a+b
//     }
//     // return sumB
// }

// const sumAB = (a) => (b) => a+b;

// let res = sumA(5);
// console.log(res(6));
// console.log(res(7));
// console.log(res(10));

// let res1 = sumA(10);
// console.log(res1);
// console.log(res1(6));
// console.log(res1(7));

// console.log(sumAB(6)(7));

// function multi(a,b){
//     return a * b
// }

// function currying(f){
//     return function(a) {
//         return function(b){
//             f(a,b);
//         };
//     };
// }

// let curryMulti = currying(multi)
// let currySum = currying(sum)

// console.log(curryMulti(2)(4));
// console.log(currying(2)(4));

// console.log(currying(sum)(2)(3));
// console.log(currying(multi)(2)(5));
// console.log(currying(multi)(2)(10));
// console.log(currying(multi)(2)(20));


// const s = (num) => num * 2;
// const s1 = (num) => num + 1;
// // console.log(sumsum(s1, s)(6));

// /* by value vs. by reference*/

// let a = 10;
// let b = a;
// b= 5;

// console.log(a,b);

// let arr = (1,2,3);
// let arr1 = arr;
// arr1[1]=0;

// console.log(arr, arr1);

// let obj = {
//     a:1,
//     b:2
// };

// // let obj1 = obj;

// // let obj1 = {...obj1};
// let obj1 = Object.assign({}, obj)
// obj1.b=0;

// console.log(obj, obj1);


// /*xp in class */

// let user = {
//     name: 'John',
//     last: 'Doe',
//     address: {
//         city: 'Tel Aviv'
//     }
// }

/**
 * Create a clone if the user object
 * 1. change the last name - and log both object
 * 2. change the city - and log both object
 */


// let user1 = Object.assign({}, user)

// user1.last = 'Smith';
// user1.city = 'Jerusalem'
// //add .address.city = ; its nested

// console.log(user1);

// /*techers ex: */
// let user1 = {...user}
// user1.last  = 'Bloach'
// user1.address.city = 'Ramat Gan'
// user1.arr[1] = 0 

// console.log(user, user1);


/**deep cloning - ??? */


/**object */
/**create an object */

/**computed/dynamic key */
// let dynamic = "City"

// let obj ={
//     name:"john",
//     last:"doe",
//     age:26
//     [dynamic], "Tel Aviv"

// }
// let obj1 = new Object()

// // console.log(obj, obj1);

// console.log(obj.name);
// console.log(obj["age"]);


// let getname = "name";
// console.log(obj[getname]);


// obj.city = 'Tel Aviv'
// obj["state"]  = "Israel"

console.log(obj);


/**shorthand property/key/key&value */

let username = 'John36';
let email = 'johndoe36@gmail.com';

let obj = {
    username,
    email,
    age,
}

console.log(obj);


/**loop an obj */

for ( let x in obj){
    console.log(x,obj[x]);
}














