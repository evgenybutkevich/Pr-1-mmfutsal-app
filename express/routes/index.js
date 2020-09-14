const express = require('express');
const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);

const app = express();

app.get('/', (req, res) => {
    res.sendStatus(200);
});

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        app.use(`/${file.slice(0, -3)}`, require(path.join(__dirname, file)));
    });

module.exports = app;
