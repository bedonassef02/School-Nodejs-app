const express = require('express');
const {dbConnection} = require("./connect/mongo");
const config = require('./config/index.config')


const app = express();

dbConnection
    .then(
        console.log('connected to database successfully'),
        app.listen(config.dotEnv.PORT, () => {
            console.log('listening on port ' + config.dotEnv.PORT);
        }),
    )
    .catch((err) => {
        console.log('db connection error: ' + err);
    });