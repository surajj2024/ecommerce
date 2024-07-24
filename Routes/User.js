const express = require('express');
const userController = require('../Controllers/User');
const router = express.Router();

router.post('/signUp', userController.signUp);

module.exports = router;