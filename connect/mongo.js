const mongoose = require('mongoose');
const config = require('../config/index.config');

const DATABASE_USERNAME = config.dotEnv.DATABASE_USERNAME;
const DATABASE_NAME = config.dotEnv.DATABASE_NAME;
const DATABASE_PASSWORD = config.dotEnv.DATABASE_PASSWORD;
const DATABASE_URI = config.dotEnv.DATABASE_URI.replace(
    '${DATABASE_USERNAME}',
    DATABASE_USERNAME,
)
    .replace('${DATABASE_NAME}', DATABASE_NAME)
    .replace('${DATABASE_PASSWORD}', DATABASE_PASSWORD);

const dbConnection = mongoose.connect(DATABASE_URI);

module.exports = { dbConnection, DATABASE_URI };