const express = require('express');
const { validate } = require('express-validation');

const services = require('../services/players');
const validations = require('../validations/players')

const router = express.Router();

router.get('/', async (req, res) => {
	const players = await services.getAll();
	res.json({ players });
});

router.get('/:id', async (req, res) => {
	const player = await services.getById(req.params.id);

	if (player) {
		res.json({ player });
	} else {
		res.sendStatus(404);
	}
});

router.post('/', validate(validations.post), async (req, res) => {
	const player = await services.create(req.body.player);
	res.status(201).json({ player });
});

router.put('/:id', validate(validations.put), async (req, res) => {
	const player = await services.getById(req.params.id);

	if (player) {
		await services.update(req.body.player, req.params.id);
		res.status(200).json({ });
	} else {
		res.sendStatus(404);
	}
});

router.delete('/:id', validate(validations.delete), async (req, res) => {
	const player = await services.getById(req.params.id);

	if (player) {
		await services.remove(req.params.id);
		res.status(200).json({ });
	} else {
		res.sendStatus(404);
	}
});

module.exports = router;