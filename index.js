const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const express = require('express');
const httpStatus = require('http-status');

const errorHandler = require('./express/middleware/error-handler');
const router = require('./express/routes');

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: process.env.CORS_OPTIONS_SUCCESS_STATUS
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(router);

app.get('/', (req, res) => {
    res.sendStatus(httpStatus.OK);
});

app.use(errorHandler);

app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Express server listening on port ${process.env.EXPRESS_PORT}...`);
});

module.exports = app;
