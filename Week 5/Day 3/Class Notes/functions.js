/** function
 * a block of code that can be used over and over again
 */
function nameOfTheFunction(){
    //logic
}


function hello(){
    console.log('Hello and good morning');
}
hello() //this must be added in order to call what is inside it

function sum(x,y){
    // console.log(x + y);
    // return x + y
////or
    // if (x > y) return x;
////or^&
    // return{mul: x * y, sum: x + y} //retyrn multiple answers
};
// sum(5,8);
// console.log(sum);
// //or
// let z = sum (5,8);
// console.log(z);

/**defult parameters (functions) */
// function greeting(name, greet) {
//     return `${greet}, ${name}`;
// }

// console.log(greeting('Weolcome', 'Anne'));

////also
// function greeting(name = "Student", greet = "Welcome") {
//     return `${greet}, ${name}`;
// }

// console.log(greeting(undefined, 'Hello'));


/**Local vs. Global */
let name = "Marie"
function getFullName(last){
    var name = "John";
    return name + " " + last;
}

console.log(name);




/**My age */
    function age(myAge) {
        let age=Number(myAge)
        let momsAge=age*2
        let dadsAge=momsAge*1.2
        return `My moms age is ${momsAge} and my dads age is ${dadsAge}`
         
    }
    console.log(age(22))