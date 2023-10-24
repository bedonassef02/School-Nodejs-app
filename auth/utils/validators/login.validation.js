const {body} = require('express-validator');
const validationExceptionFilter = require('../../../common/filters/validation-exception.filter');

const loginValidator = [

    body('email')
        .notEmpty().withMessage('email is required')
        .isEmail().withMessage('email is invalid'),

    body('password')
        .notEmpty().withMessage('password is required')
        .isLength({min:8, max:64}).withMessage('password length must be between 8 and 64 characters'),

    validationExceptionFilter

];

module.exports = loginValidator;