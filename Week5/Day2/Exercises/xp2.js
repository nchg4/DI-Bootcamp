// arr = ['black', 'green', 'blue', 'orange', 'purple'];
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(`My #${i + 1} choice is ${arr[i]}.`);
// }


/**xp3 */
let userInput = prompt("Enter a number:");

let number = parseInt(userInput);

while (isNaN(number)) {
    userInput = prompt("Invalid input. Please enter a valid number:");
    number = parseInt(userInput);
}

while (number < 10) {
    userInput = prompt("Number must be 10 or greater. Please enter a new number:");
    number = parseInt(userInput);
}

console.log("You entered a number greater than or equal to 10:", number);
