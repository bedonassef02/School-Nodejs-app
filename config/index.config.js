require('dotenv').config();

const config = {};

const PORT = process.env.PORT || 3000;

const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_URI = process.env.DATABASE_URI;

config.dotEnv = {
    PORT,
    DATABASE_USERNAME,
    DATABASE_NAME,
    DATABASE_PASSWORD,
    DATABASE_URI,
}

module.exports = config;
