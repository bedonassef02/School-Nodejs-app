const userService = require('../user/user.service');
const passwordService = require('../auth/services/password.service');
exports.register = async ({name, email, password}) => {
    const hashedPassword = await passwordService.hash(password);
    const user = await userService.create({name, email, password: hashedPassword});
    return user;
}

exports.login = async ({email, password}) => {
    const user = await userService.findOne(email);
    if (user && await passwordService.compare(password, user.password)) {
        return user;
    }
    return false;
}