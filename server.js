const express = require('express');
const {dbConnection} = require("./connect/mongo");
const config = require('./config/index.config');
const globalExceptionFilter = require('./common/filters/global-exception.filter');
const app = express();

app.use(express.json());
process.on('uncaughtException', err => {
    console.log(`Uncaught Exception:`)
    console.log(err, err.stack);

    process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled rejection at ', promise, `reason:`, reason);
    process.exit(1)
})


app.use('/auth', require('./auth/auth.router'));

app.all('*', (req, res) => {
    const path = req.path;
    throw new Error(`Not found ${path}`);
});

app.use(globalExceptionFilter)
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