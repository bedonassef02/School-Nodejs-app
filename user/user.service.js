const User = require('./models/user.model');

exports.create = async ({name, email, password}) => {
    return await User.create({name, email, password});
}

exports.findOne = async (email) => {
    return User.findOne({email});
}