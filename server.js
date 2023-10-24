const express = require('express');
require('dotenv').config();
const {dbConnection} = require("./connect/mongo");


const app = express();

const port = process.env.PORT || 3000;

dbConnection
    .then(
        console.log('connected to database successfully'),
        app.listen(port, () => {
            console.log('listening on port ' + port);
        }),
    )
    .catch((err) => {
        console.log('db connection error: ' + err);
    });