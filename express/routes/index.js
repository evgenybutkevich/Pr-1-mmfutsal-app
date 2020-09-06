const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const errorHandler = require('../middleware/error-handler');
const playersRoutes = require('./players');
const usersRoutes = require('./users');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.use('/players', playersRoutes);
app.use('/users', usersRoutes);

app.use(errorHandler);

module.exports = app;