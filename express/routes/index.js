const express = require("express");
const {ValidationError} = require("express-validation");
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

app.use(function(err, req, res, next) {
	console.log(err.details);

	if (err instanceof ValidationError) {
	  	return res.status(err.statusCode).json(err)
	}
   
	return res.status(500).json(err)
})

module.exports = app;