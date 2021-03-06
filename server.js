"use strict";

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');

const app = express();
const sites = require('./routes/sites');
const pages = require('./routes/pages');
const PORT = 52629;

app.use(logger('dev'));
app.use(bodyParser.json({"limit": "1 mb"}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use((request, response, next) => {
    response.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "DELETE, GET, POST, PUT"
    });
    next();
});

app.use('/sites', sites);
app.use('/pages', pages);

/*
 * Handle not found error
 */
app.use((request, response, next) => {
    let error = new Error('Resource not found');
    error.status = 404;
    next(error);
});

app.use((error, request, response, next) => {
    response.status(error.status || 500)
        .json({"error_message": error.message || "Unknown error"});
});

app.listen(PORT, function () {
    console.log(`Server started on port ${PORT}.`);
});
