// Function Declaration
function kgToGramsDeclaration(kg) {
    return kg * 1000;
}

console.log(kgToGramsDeclaration(5)); 
//answer should be 5000


// Function Expression
const kgToGramsExpression = function(kg) {
    return kg * 1000;
}
console.log(kgToGramsExpression(5));
 //answer should be 5000


// Arrow Function
const kgToGramsArrow = kg => kg * 1000;

console.log(kgToGramsArrow(5)); 
//answer should be 5000



