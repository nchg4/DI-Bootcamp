/** type = commonjs
 * module.exports
 * require
 */
// const { hello, getFullName } = require("./app.cjs");
import { hello, getFullName } from "./app.cjs";
// const { multiply, divide, add, subtract } = require("./math.js");
/** es6 -> type = module
 * export / export default
 * import
 */
import { multiply, divide, add, subtract } from "./math.js";
import werty from "./math.js";

console.log(werty);

// console.log(obj);

console.log(hello("John"));

// console.log(getFullName("Marry", "Anne"));

/**
 * Create a file math.js
 * create 4 function - multi, divide, plus, minus - 2 inputs parametes (a,b)
 * return the a * b, a / b, a + b, a -b
 * Test these functions
 * create a module from math.js
 * use this functions in app.js
 */

// try {
//   console.log(multiply(3, 5));
//   console.log(divide(3, 5));
//   console.log(add(3, 5));
//   console.log(subtract(3, 5));
// } catch (error) {
//   console.log("Error:" + error);
// }
