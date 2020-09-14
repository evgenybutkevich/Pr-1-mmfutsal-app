const express = require('express');
const { validate } = require('express-validation');

const services = require('../services/players');
const validations = require('../validations/players')

const router = express.Router();

router.get('/', async (req, res) => {
	const players = await services.getAll();

	return res.send({ players })
});

router.get('/:id', async (req, res) => {
	const player = await services.getById(req.params.id);

	if (!player) {
		return res.sendStatus(404);
	}

	return res.send({ player });
});

router.post('/', validate(validations.post), async (req, res) => {
	const player = await services.create(req.body.player);

	return res.status(201).send({ player });
});

router.put('/:id', validate(validations.put), async (req, res) => {
	const player = await services.getById(req.params.id);

	if (!player) {
		return res.sendStatus(404);
	}

	await services.update(req.body.player, req.params.id);

	return res.send({});
});

router.delete('/:id', validate(validations.delete), async (req, res) => {
	const player = await services.getById(req.params.id);

	if (!player) {
		return res.sendStatus(404);
	}

	await services.remove(req.params.id);

	return res.send({});
});

module.exports = router;
