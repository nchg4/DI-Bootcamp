/**
1. Create a module file `hash.js`
2. A function `hashMyPassword` that get a paswword as parameter `1q2w3e4`
and return a hash paswarod. - module.exports / export
3. Use `bcrypt` from NPM.
4. app.js use the `hash.js` 
 */

const { hash } = require("./hash.js");

console.log(hash('1234'));
