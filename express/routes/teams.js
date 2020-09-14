const express = require('express');
const { validate } = require('express-validation');

const services = require('../services/teams');
const validations = require('../validations/teams')

const router = express.Router();

router.get('/', async (req, res) => {
	const teams = await services.getAll();

	return res.send({ teams });
});

router.get('/:id', async (req, res) => {
	const team = await services.getById(req.params.id);

	if (!team) {
		return res.sendStatus(404);
	}

	return res.send({ team });
});

router.post('/', validate(validations.post), async (req, res) => {
	const team = await services.create(req.body.team);

	return res.status(201).send({ team });
});

router.put('/:id', validate(validations.put), async (req, res) => {
	const team = await services.getById(req.params.id);

	if (!team) {
		return res.sendStatus(404);
	}

	await services.update(req.body.team, req.params.id);

	return res.send({});
});

router.delete('/:id', validate(validations.delete), async (req, res) => {
	const team = await services.getById(req.params.id);

	if (!team) {
		return res.sendStatus(404);
	}

	await services.remove(req.params.id);

	return res.send({});
});

module.exports = router;
