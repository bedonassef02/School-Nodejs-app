const mongoose = require("mongoose");

const UserRole = require('../../common/types/user-role');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 64,
        minLength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: {
        type: String,
        required: true,
        maxLength: 255,
    },
    role: {
        type: String,
        required: true,
        default: UserRole.STUDENT
    },
}, {
    timestamps: true,
})

const User= mongoose.model('User', UserSchema);

module.exports = User;