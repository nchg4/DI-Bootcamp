const bcrypt = require('bcrypt');

const hashMyPassword = async (passowrd) =>{
    try{
        const saltRounds = 10;
        const hash = await bcrypt.hash (passowrd, saltRounds);
        return hash;
    } catch(error){
        console.error('Error hashing password:', error);
        throw error;
    }
};
module.exports = { hashMyPassword };
