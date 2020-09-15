const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const httpStatus = require('http-status');

const common = require('./config/common.json');
const errorHandler = require('./express/middleware/error-handler');
const router = require('./express/routes');

const app = express();

app.use(cors(common.cors));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(errorHandler);

app.use(router);

app.get('/', (req, res) => {
    res.sendStatus(httpStatus.OK);
});

app.listen(common.express.port, () => {
    console.log(`Express server listening on port ${common.express.port}...`);
});

module.exports = app;
