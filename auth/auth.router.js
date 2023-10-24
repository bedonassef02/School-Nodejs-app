const router = require('express').Router();
const authController = require('./auth.controller');
const registerValidator = require('./utils/validators/register.validator');
const loginValidator = require('./utils/validators/login.validation');

router.post('/register', registerValidator, authController.register);
router.post('/login', loginValidator, authController.login);

module.exports = router;