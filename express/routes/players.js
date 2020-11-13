const express = require('express');
const httpStatus = require('http-status');

const playersService = require('../services/players');
const playersValidation = require('../validations/players');
const validate = require('../../utils/validationHelper');

const router = express.Router();

router.get('/', validate(playersValidation.get), async (req, res) => {
	const params = req.query;

	const { count, rows } = await playersService.getAll(params);

	return res.send({
		players: rows,
		meta: {
			count
		}
	})
});

router.get('/:id', validate(playersValidation.get), async (req, res) => {
	const player = await playersService.getById(req.params.id);

	if (!player) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	const mergedPlayer = await playersService.mergedTeamsResults(player.toJSON());

	return res.send({ player: mergedPlayer });
});

router.post('/', validate(playersValidation.post), async (req, res) => {
	const player = await playersService.create(req.body.player);

	return res.send({ player });
});

router.put('/:id', validate(playersValidation.put), async (req, res) => {
	const player = await playersService.getById(req.params.id);

	if (!player) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await playersService.update(req.body.player, req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

router.delete('/:id', validate(playersValidation.delete), async (req, res) => {
	const player = await playersService.getById(req.params.id);

	if (!player) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await playersService.remove(req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

module.exports = router;
