//**javascript is really ecmascript (offically) */

/**js types:
 * 1) Numbers: 10, 10.5, -5
 * 2) Strings: everything in a '' or " "; "string",'string' 
 * 3) Boolean: true/false - 0-False
 * 4) Undefined - 
 * 5)  Null
 */

/**js variables: */
// var
// let
// const

// var myname = 'Noam'; //declaring a string
// var num = 10; //declaring a number
// var yes = true; //declaring a boolean

/** ES6 */
// let a; //"a" is undefined 
// a = null; //now "a" is null bec we are declaring it as null

// const redcolor = '#ff3rdf';

// var x = 6;
// var x = 9;
// var can be redeclared 

// let y = 0;
// let y = 7;
// let cannot be redeclared twice 


// const b = 9;
// b = 10;
// a constant(const) CANNOT be redeclared; and it must be defined on the same line 
// const usually used to declare a function; it can not be changed after

/**naming a variable */
// cannot:
// let 1sstr = //No numbs.
// let %str = 
// let str# =
// let st#r = // No special chars.
// let s tr = //No spaces 
// let let =
// let const =
// let function = 
// etc.


// cans:
// let name = 'Noam';
// let my_name = 'Noam';
// let myName = 'Noam';
// let _name = 'Noam';
// let name_ = "Noam";




// comments

/* 
any
comment
*/

/** 
 * any comment 
 * I
 * Want
 * 
 * js can read comments
//  *@author Noam
//  *@description xyz
 */


// go to Console in browser (inspection...)
//  console.log('hello');
//  console.error('error');


 /**Strings */

// let str = 'Hello \n js';
// let str2 = '\n Javascript';
// let str3 = str + " " + str2
// adding strings together // 

// console.log(str3);

// console.log(str.indexOf('React'));

// console.log(str3.toLocaleLowerCase());

// console.log(str3.replace('a', 'A')); //first instance
// console.log(str3.replace.all('a', 'AA')); //all instances

// let hello = '    hello    ';
// console.log(hello.trim()); // get rid og extra spaces



// let d = '3'; //3 is a string
// let z = 4;  //4 is a number
//  console.log(d + z); // cannot add a str to a num
// console.log(number(d) + z);
// console.log(parseInt(d) + z);

// console.log(Number('a'));
// console.log(isNaN('a'));
// console.log(isNaN(22));


/** comparison */
/**
 * ==:
 * 1 == '1'
 * true
 * 
 * ===:
 * 1 === '1'
 * false
 * ,
 * 'a' === 'a'
 * true
 * 
 * =:
 * 1 != '1'
 * false
 * 1 !== '1'
 * true
 * 
 * > : greater than
 * < : lower than
 * >= : greater than or equal to
 * <= : lower than or equal to
 */

/**operator:
 * ++x //incrament by 1 before a next action
 * x++ //incarment by 1 after a next action
 * --y ^^ //decarment by 1
 * y-- ^^
 * 
 * += x = x + 2 /same as:/ x += 2
 * 
 */

// let b = 3; d =  b, u= b;
// // b = 3
// // d = 3
// // u = 3


// const tree = ++d * d*b * b++ +
// + --d+ + +b-- +
// + +d*b+ +
// u

// 4 * 4 * 3 * 3 +
// 3 + 4 +
// 3 * 3 + 
// 3 
// // = 163
// console.log(tree); //163

/**user interface function */

// alert('Wow!') //pop up..

// let str = prompt('What is your name?')
// console.log(str); //returns it..


// let yesno = confirm('Are you going to the party?')
// console.log(yesno);


/**Arrays */
/** a list; [], or, new Array()*/

// let arr = [3, 4, 'hello', true, [1, 2,3]];
// let ar1 = new Array();

// console.log(arr[2]);
// console.log(arr[4][2]);


// arr[2] = 5;
// console.log(arr);

/**array methoods
 * length
 * 
 */

let arr = ['banana', 'orange', 'apple', 'mango']
// console.log(arr.length);

// arr[arr.length] = 'Kiwi'
// console.log();

// arr.push('Lemon') //add to the end 
//  let Kiwi = arr.pop()

//  console.log(arr, Kiwi);


/** shift/unshift */
// console.log(arr);
// arr.shift()
// arr.shift()
// console.log(arr);

/** toString() */
// console.log(arr.toString());

// /**join */
// console.log(arr.join('.'));  //add btwn every: ex: bef.: (apple, grape, orange) --> after: (apple.grape.orange); same w spaces and other chars/letters



/** SPLICE */
/** (num1, num2)
*num 1 is where you want to start and num two is how many after that (including the start num) you want to remove
*let arr = ['banana', 'orange', 'apple', 'mango'] -want to remove banana?
*arr.splice(0,1) --banana and orange
*arr.splice(0, 2) --*/

// arr.splice(0,1);
// console.log(arr);

/**Object 
 * let obj = {}
 * /or/
 * let obj1= new object()
 */
// let obj = {
//     // key: value
//     name: 'Noam',
//     age: 22,
//     arr:[1,2,3,4,5],
//     address: {
//         city: 'Tlv',
//         country: 'ISR'
//     }
// }

// // console.log(obj.name);
// // console.log(obj["age"]);

// obj.address.city = 'Tel Aviv';
// console.log(obj);
// //or
// // obj.address["city"] = 'Tel aviv';
// // console.log(obj);

// /**adding to the obj */
// obj.username = 'ng4'
// console.log(obj);

// /**delete from obj */
// delete obj.age
// console.log(obj);

/**Conditions
 * if 
 * else if
 * else
 * switch
 */

// if(1 ==1) {
//     console.log('true');
// }

// if(1 === '1') {
//     console.log('true');
// }
// else if(1>'1'){
//     console.log('lower');
// }
// else {
//     console.log('default');
// }

// switch('contact'){
//     case 'contact':
//         console.log('contact page');
//         break;
//     case 'about page':
//         console.log('about');
//         break;
//     default:
//         console.log('homepage');
    
// }

// /**Logical opperation
//  * && - and 
//  * || - or
//  * ! - not
//  */

// const num1 = 5;
// let num2 =6;
// let num3 =  6;
// if(num1< num2 && num2 == num3){
//     console.log('This is true');
// }

/**loops
 * 
 * 
 */
let users = ['John', 'Merry', 'Anne'];
for(let i = 0; i < 5; i++){
    console.log(i);
}
for(let i = 0; i < users.length; i++){
    console.log(users[i]);
}


/** While
 * 
 * while(){
 * 
 * }
 * with while do noy put auto save so it doesnt save over and over aagin
 */

// let i = 0;
// while(i<5){
//     console.log(i);
//     i++;
// }



/**do - while 
 * doing and then asking
*/
let i = 0;
do{
console.log("do while" + i);
i++;
}
while (1 <  0);