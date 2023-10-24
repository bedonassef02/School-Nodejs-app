const userService = require('../user/user.service');
const passwordService = require('../auth/services/password.service');
exports.register = async ({name, email, password}) => {
    const hashedPassword = await passwordService.hash(password);
    return await userService.create({name, email, password: hashedPassword});
}

exports.login = async ({email, password}) => {
    const user = await userService.findOne(email);
    if (user && await passwordService.compare(password, user.password)) {
        return user;
    }
    throw new Error('email or password is incorrect');
}