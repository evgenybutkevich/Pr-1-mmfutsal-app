const express = require("express");
const services = require("../services/users");

const router = express.Router();

router.get("/", async (req, res) => {
	const users = await services.getAll();
	
	if (users) {                                           //need to compare
		res.status(200).json(users);
	} else {
		res.sendStatus(404);
	}	
});

router.get("/:id", async (req, res) => {
	const user = await services.getById(req.params.id);

	if (user) {
		res.status(200).json(user);
	} else {
		res.sendStatus(404);
	}
});

router.post("/", async (req, res) => {
	const user = await services.create(req.body.user);
	res.status(201).json({user});
});

router.put("/:id", async (req, res) => {
	if (req.body.id === req.params.id) {
		await services.update(req.body, req.params.id);
		res.sendStatus(200);
	} else {
		res.sendStatus(400);
	}
});

router.delete("/:id", async (req, res) => {
	await services.remove(req.params.id);
	res.sendStatus(200);
});

module.exports = router;