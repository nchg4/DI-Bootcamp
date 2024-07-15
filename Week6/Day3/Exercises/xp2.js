/** Using the code below, destructure the parameter inside the function and return a string 
 as the example seen below:
//output : 'Your full name is Elie Schoppik'*/

function displayStudentInfo({first, last}){
    return `Your full name is ${first} ${last}`;
}
const fullName = displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(fullName);




