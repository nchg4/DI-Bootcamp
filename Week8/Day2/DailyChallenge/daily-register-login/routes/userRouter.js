const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

// register route = resigster a new user
router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)

router.get('/all', userController.getAllusers)

module.exports = router;
