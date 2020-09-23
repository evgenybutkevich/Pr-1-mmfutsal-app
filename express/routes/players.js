const express = require('express');
const httpStatus = require('http-status');
const { validate } = require('express-validation');

const playersService = require('../services/players');
const validations = require('../validations/players');
const validationUtils = require('../../utils/express-validation/validationUtils');

const router = express.Router();

router.get('/', validationUtils.getValidation(validations.get), async (req, res) => {
	const {
		filterField, filterValue, sortField, sortDirection, page, limit
	} = req.query;

	const players = await playersService.getAll({
		filterField, filterValue, sortField, sortDirection, page, limit
	});

	return res.send({ players: players.rows })
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
