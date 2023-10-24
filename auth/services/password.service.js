const bcrypt = require('bcrypt');
exports.hash = async (password) => {
    return await bcrypt.hash(password, 10);
}

exports.compare = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}