const express = require('express');
const router = express.Router();
const UserController = require('./controller');


router.post('/login', UserController.loginUser);
router.post('/register', UserController.registerUser);
router.get('/', UserController.getAllUsers_);
router.get('/:id', UserController.getUserById_);

module.exports = router;