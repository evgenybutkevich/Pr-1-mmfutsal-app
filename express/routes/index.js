const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./users");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("/", (req, res) => {
	res.sendStatus(200);
});

app.use("/users", usersRoutes);

module.exports = app;