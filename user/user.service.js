const User = require('./models/user.model');
const asyncHandler = require('express-async-handler')

exports.create = asyncHandler(async ({name, email, password}) => {
    return await User.create({name, email, password});
})

exports.findOne = asyncHandler(async (email) => {
    return User.findOne({email});
})