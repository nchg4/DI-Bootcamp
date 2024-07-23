const { getAllusers } = require('../models/userModel.js');
const userModel = require('../models/userModel.js');
const bcrypt = require("bcrypt");

module.exports = {
    registerUser: async (req,res) =>{
        const { username, password, email, fist_name, last_name} = req.body;

        const user = {username, password, email, fist_name, last_name};

        try {
            const userInfo = await userModel.creatrUser(user);
            res.status(201).json({
                message: 'User resistered successfully',
                user: userInfo,
            });
        } catch (error) {
            console.log(error.code);
            if(error.code == 23505){
                return res.status(200).json({message: 'Email or Username not availble'})
            }
            res.status(500).json({error: 'internal server error'});
        }

    },
    loginUser: async (req,res) => {
        const {email, username,password} =req.body;
        
        try {
            const user = await userModel.getUserByUsername(email, username)

            if(!user){
                return res.status(404).json({message: "User not dound..."})
            }

            const passwordMatch = await bcrypt.compare(password+"", user.password);
            if(!passwordMatch){
                return res.status(404).json({message: 'Incorrect password'})
            }

            res.json({
                message: "Login successful",
                user: {userid: user.id, username: user.username},
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Internal server error'})
        }
    },

    getAllUsers: async (req, res) => {
        try {
          const users = await userModel.getAllUsers();
          res.json(users);
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "internal server error" });
        }
      },
    };    