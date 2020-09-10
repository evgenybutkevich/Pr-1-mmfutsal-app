const express = require('express');
const { validate } = require('express-validation');

const services = require('../services/teams');
const validations = require('../validations/teams')

const router = express.Router();

router.get('/', async (req, res) => {
	const teams = await services.getAll();
	res.json({ teams });
});

router.get('/:id', async (req, res) => {
	const team = await services.getById(req.params.id);

	if (team) {
		res.json({ team });
	} else {
		res.sendStatus(404);
	}
});

router.post('/', validate(validations.post), async (req, res) => {
	const team = await services.create(req.body.team);
	res.status(201).json({ team });
});

router.put('/:id', validate(validations.put), async (req, res) => {
	const team = await services.getById(req.params.id);

	if (team) {
		await services.update(req.body.team, req.params.id);
		res.status(200).json({ });
	} else {
		res.sendStatus(404);
	}
});

router.delete('/:id', validate(validations.delete), async (req, res) => {
	const team = await services.getById(req.params.id);

	if (team) {
		await services.remove(req.params.id);
		res.status(200).json({ });
	} else {
		res.sendStatus(404);
	}
});

module.exports = router;