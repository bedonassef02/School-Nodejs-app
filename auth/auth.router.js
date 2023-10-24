const router = require('express').Router();
const authController = require('./auth.controller');
const registerValidator = require('./utils/validators/register.validator');

router.post('/register', registerValidator, authController.register);

module.exports = router;