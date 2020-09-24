const express = require('express');
const httpStatus = require('http-status');

const playersService = require('../services/players');
const playersValidation = require('../validations/players');
const validationHepler = require('../../utils/validationHelper');

const router = express.Router();

router.get('/', validationHepler(playersValidation.get), async (req, res) => {
	const params = req.query;

	const { count, rows } = await playersService.getAll(params);

	return res.send({
		players: rows,
		meta: {
			count
		}
	})
});

router.get('/:id', validationHepler(playersValidation.get), async (req, res) => {
	const player = await playersService.getById(req.params.id);

	if (!player) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	return res.send({ player });
});

router.post('/', validationHepler(playersValidation.post), async (req, res) => {
	const player = await playersService.create(req.body.player);

	return res.send({ player });
});

router.put('/:id', validationHepler(playersValidation.put), async (req, res) => {
	const player = await playersService.getById(req.params.id);

	if (!player) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await playersService.update(req.body.player, req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

router.delete('/:id', validationHepler(playersValidation.delete), async (req, res) => {
	const player = await playersService.getById(req.params.id);

	if (!player) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await playersService.remove(req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

module.exports = router;
