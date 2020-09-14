const express = require('express');
const { validate } = require('express-validation');

const services = require('../services/users');
const validations = require('../validations/users')

const router = express.Router();

router.get('/', async (req, res) => {
	const users = await services.getAll();
	res.json({ users });
});

router.get('/:id', async (req, res) => {
	const user = await services.getById(req.params.id);

	if (user) {
		res.json({ user });
	} else {
		res.sendStatus(404);
	}
});

router.post('/', validate(validations.post), async (req, res) => {
	const user = await services.create(req.body.user);
	res.status(201).json({ user });
});

router.put('/:id', validate(validations.put), async (req, res) => {
	const user = await services.getById(req.params.id);

	if (user) {
		await services.update(req.body.user, req.params.id);
		res.status(200).json({});
	} else {
		res.sendStatus(404);
	}
});

router.delete('/:id', validate(validations.delete), async (req, res) => {
	const user = await services.getById(req.params.id);

	if (user) {
		await services.remove(req.params.id);
		res.status(200).json({});
	} else {
		res.sendStatus(404);
	}
});

module.exports = router;
