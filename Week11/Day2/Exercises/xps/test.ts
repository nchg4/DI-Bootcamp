import { filterArray } from './src/xp5';
import { Stack } from './src/xp4';


const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); 
// Test Stack class
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log('Stack is empty:', stack.isEmpty()); 
console.log('Popped item:', stack.pop()); 
console.log('Stack after pop:', stack.pop()); 
console.log('Stack is empty:', stack.isEmpty()); 
