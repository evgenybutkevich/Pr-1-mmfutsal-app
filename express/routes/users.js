const express = require("express");
const {validate} = require("express-validation");
const userServices = require("../services/users");
const userValidators = require("../validations/users")

const router = express.Router();

router.get("/", async (req, res) => {
	const users = await userServices.getAll();
	res.status(200).json(users);
	}	
);

router.get("/:id", async (req, res) => {
	const user = await userServices.getById(req.params.id);

	if (user) {
		res.status(200).json(user);
	} else {
		res.sendStatus(404);
	}
});

router.post("/", validate(userValidators.post), async (req, res) => {
	const user = await userServices.create(req.body.user);
	res.status(201).json({user});
});

router.put("/:id", validate(userValidators.put), async (req, res) => {
	const user = await userServices.getById(req.params.id);

	if (user) {
		await userServices.update(req.body.user, req.params.id);
		res.sendStatus(200);
	} else {
		res.sendStatus(404);
	}
});

router.delete("/:id", validate(userValidators.delete), async (req, res) => {
	const user = await userServices.getById(req.params.id);

	if (user) {
		await userServices.remove(req.params.id);
		res.sendStatus(200);
	} else {
		res.sendStatus(404);
	}
});

module.exports = router;