export const multiply=(a, b) => {
    return a * b;
}
export const divide=(a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
export const add=(a, b) => {
    return a + b;
}

export const subtract=(a, b) => {
    return a - b;
}


export default add



// const testFunctions=() => {
//     const a = 10;
//     const b = 5;
// }

    // console.log(`Multiply: ${a} * ${b} = ${multiply(a, b)}`); 
    // console.log(`Divide: ${a} / ${b} = ${divide(a, b)}`);     
    // console.log(`Plus: ${a} + ${b} = ${add(a, b)}`);         
    // console.log(`Minus: ${a} - ${b} = ${subtract(a, b)}`);       

// module.exports={
//     multiply,
//      subtract,
//       divide,
//        add
// }


// //tchr exmpl


