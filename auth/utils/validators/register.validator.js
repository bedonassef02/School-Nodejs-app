const {body} = require('express-validator');
const validationExceptionFilter = require('../../../common/filters/validation-exception.filter');
const userService = require('../../../user/user.service');

const registerValidator = [
    body('name')
        .notEmpty().withMessage('name is required')
        .isLength({min:3, max:64}).withMessage('name length must be between 3 and 64 characters'),

    body('email')
        .notEmpty().withMessage('email is required')
        .isEmail().withMessage('email is invalid')
        .custom(async (value) => {
            const user = await userService.findOne(value);
            if (user) {
                return Promise.reject('Email already exists');
            }
        }),

    body('password')
        .notEmpty().withMessage('password is required')
        .isLength({min:8, max:64}).withMessage('password length must be between 8 and 64 characters'),

    validationExceptionFilter

];

module.exports = registerValidator;