// // let username = "John";
function add(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return -1;
}
// add (1,2)
// add ('1', '2')
// add (1, '2')
// optional parameter
var addOptional = function (a, b) {
    return a + (b || 0);
};
// addOptional(5, 6)
// default parameter
var addDefault = function (a, b) {
    if (b === void 0) { b = 5; }
    return a + b;
};
// addDefault(6)
// Rest parameter
var addRest = function (a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return rest.reduce(function (total, num) { return total + num; }, a);
};
// console.log(addRest(0, 100, 3, 4, 5));
// never type
var errorMessage = function (message) {
    throw new Error(message);
};
var numberOrString = function (value) {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return errorMessage('This should never happen');
};
var a = 'hello world';
var b = a;
console.log("b=>", b);
b = 9;
var c = a;
// c = 5
// c = 'hello world'
// c = 'hi'
// c = true
c = 'hello'; //c is type Three
// angle bracket = not use in tsx
var d = "hi";
console.log("d=>", d);
// // DOM Elements
// const img = document.querySelector('img') as HTMLImageElement
// img.src = ''
document.addEventListener('DOMContentLoaded', function () {
    var year = document.getElementById('year');
    var thisYear = new Date().getFullYear().toString();
    if (year) {
        year.textContent = thisYear;
    }
});
