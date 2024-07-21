/** Module System */

const hello = (name) => {
  return `Hello, ${name}, welcome to day 1 of Nodejs`;
};

let a = 10;
// console.log(hello('Dan'));

const getFullName = (first, last) => {
  return first + " " + last;
};

module.exports = {
  hello,
  a,
  getFullName
};
