const express = require('express');
const morgan = require('morgan');
const {dbConnection} = require('./connect/mongo');
const config = require('./config/index.config');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Handle unhandled exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:');
    console.error(err, err.stack);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled rejection at', promise, 'reason:', reason);
});

app.use('/auth', require('./auth/auth.router'));

app.all('*', (req, res, next) => {
    const path = req.path;
    next(new Error(`Not found ${path}`)); // Pass the error to the next middleware
});

// Custom error handler middleware
app.use((err, req, res, next) => {
    console.error(err);
    const status = err.status || 500; // Default to 500 Internal Server Error
    res.status(status).json({error: err.message, stack: err.stack});
});

// Start the server after database connection is established
dbConnection
    .then(() => {
        console.log('Connected to the database successfully');
        app.listen(config.dotEnv.PORT, () => {
            console.log('Listening on port ' + config.dotEnv.PORT);
        });
    })
    .catch((err) => {
        console.error('DB connection error: ' + err);
    });
