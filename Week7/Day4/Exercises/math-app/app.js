const _ = require('lodash');
const { add, multiply } = require('./math');

const numbers = [3, 5, 7, 9, 11];
const sum = _.sum(numbers);
const max = _.max(numbers);

console.log(`Sum of numbers: ${sum}`);
console.log(`Maximum number: ${max}`);

const resultAdd = add(5, 3);
const resultMultiply = multiply(4, 6);

console.log(`Result of addition: ${resultAdd}`);
console.log(`Result of multiplication: ${resultMultiply}`);
