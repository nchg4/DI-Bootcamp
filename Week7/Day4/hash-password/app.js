/**
 * 1. Create a module file `hash.js`
 * 2. A function `hashMyPassword` that gets a password as parameter `1q2wv3`
 * and return a hash password. - module.exports / exports 
 * 3. use `bcrypt` from NPM
 * 4. app.js use the `hash.js`
 */

const { hashMyPassword } = require ('./hash');


const passowrdToHash = '33';

hashMyPassword(passowrdToHash)
.then((hashedPassword) => {
    console.log('Hashed Password:', hashedPassword);
})
.catch((error) => {
    console.log('Error:', error);
})
