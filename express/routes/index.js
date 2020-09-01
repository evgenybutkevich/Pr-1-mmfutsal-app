const bodyParser = require('body-parser');
const express = require('express');
const errorHandler = require('../middleware/error-handler');
const usersRoutes = require('./users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.use('/users', usersRoutes);

app.use(errorHandler);

module.exports = app;