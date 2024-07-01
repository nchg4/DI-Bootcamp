/** 1)
 * Write code to remove “Greg” from the people array:*/
// const people = ["Greg", "Mary", "Devon", "James"];
// console.log(people);

// people.splice(3)
// console.log(people);


/** 2)
 * Write code to replace “James” to “Jason”:*/
// const people = ["Greg", "Mary", "Devon", "James"];
// console.log(people);

// const index = people.indexOf('James')
// if(index !== -1){
//     people[index] = 'Jason'
// }
// console.log(people);

/** 3) 
 * Write code to add your name to the end of the people array:*/
// const people = ["Greg", "Mary", "Devon", "James"];
// console.log(people);
// people.push('Noam') 
// console.log(people);

/** 4)
* Write code that console.logs Mary’s index. take a look at the indexOf method on Google:*/
// const people = ["Greg", "Mary", "Devon", "James"];
// console.log(people);

// const index = people.indexOf('Mary');
// console.log(index);

/** 5)
 * Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method*/
// const people = ["Greg", "Mary", "Devon", "Jason"];

// const maryIndex = people.indexOf("Mary");

// const People2 = people.slice(); 

// if (maryIndex !== -1) {
//     People2.splice(maryIndex, 1);
// }

// console.log(People2); 

/** 6)
 * Write code that gives the index of “Foo”. Why does it return -1:*/


/** 7)
 * Create a variable called last which value is the last element of the array.
Hint: What is the relationship between the index of the last element in the array and the length of the array:*/
// const people = ["Greg", "Mary", "Devon", "James"];

// const last = people[people.length -1]

// console.log(last);

/** pt2: */
const people = ["Greg", "Mary", "Devon", "James"];

// #1
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// #2
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    
    if (people[i] === "Devon") {
        break; 
    }
}
