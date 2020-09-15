const express = require('express');
const httpStatus = require('http-status');
const { validate } = require('express-validation');

const playersService = require('../services/players');
const validations = require('../validations/players')

const router = express.Router();

router.get('/', async (req, res) => {
	const players = await playersService.getAll();

	return res.send({ players })
});

router.get('/:id', validate(validations.get), async (req, res) => {
	const player = await playersService.getById(req.params.id);

	if (!player) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	return res.send({ player });
});

router.post('/', validate(validations.post), async (req, res) => {
	const player = await playersService.create(req.body.player);

	return res.send({ player });
});

router.put('/:id', validate(validations.put), async (req, res) => {
	const player = await playersService.getById(req.params.id);

	if (!player) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await playersService.update(req.body.player, req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

router.delete('/:id', validate(validations.delete), async (req, res) => {
	const player = await playersService.getById(req.params.id);

	if (!player) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await playersService.remove(req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

module.exports = router;
