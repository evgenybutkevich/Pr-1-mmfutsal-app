const express = require("express");
const services = require("../services/users");
const {getIdParam} = require("../helpers");

const app = express();

app.get("/users", async (req, res) => {
	const users = await services.getAll();
	res.status(200).json(users);
});

app.get("/users/:id", async (req, res) => {
	const id = getIdParam(req);
	const user = await services.getById(id);

	if (user) {
		res.status(200).json(user);
	} else {
		res.status(404).send("<h2>404 - User not found</h2>");
	}
});

app.post("/users", async (req, res) => {
	if (req.body.id) {
		res.status(400).send("<h2>Bad request: ID should not be provided, since it is determined automatically by the database</h2>");
	} else {
		await services.create(req.body);
		res.status(201).end();
	}
});

app.put("users/:id", async (req, res) => {
	const id = getIdParam(req);
    
	if (req.body.id === id) {
		await services.update(req.body, id);
		res.status(200).end();
	} else {
		res.status(400).send(`<h2>Bad request: param ID (${id}) does not match body ID (${req.body.id})</h2>`);
	}
});

app.delete("/$users/:id", async (req, res) => {
	const id = getIdParam(req);
	await services.remove(id);
	res.status(200).end();
});

module.exports = app;