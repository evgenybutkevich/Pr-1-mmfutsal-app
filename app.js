const config = require("config");

const {models} = require("./models");

const express = require("express");
const expressSettings = config.get("expressSettings");
const app = express();

app.get("/", (req, res) => {
	res.send('<a href="/userTable"><h1>userTable</h1></a>');
});

app.get("/userTable", async (req, res) => {
	// models.user.create({userName: "Svetik70", firstName: "Svetlana", lastName: "Butkevich", email: "svet.1970@yandex.ru"});
	// models.user.destroy({where: {userName: "Svetik70"}});
	const users = await models.user.findAll();
	res.send(users);
});

app.listen(expressSettings.PORT, () => {
	console.log(`Express server listening on port ${expressSettings.PORT}...`);
});