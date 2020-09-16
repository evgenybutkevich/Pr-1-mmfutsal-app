const express = require('express');
const httpStatus = require('http-status');
const { validate } = require('express-validation');

const seasonsService = require('../services/seasons');
const validations = require('../validations/seasons')

const router = express.Router();

router.get('/', async (req, res) => {
	const seasons = await seasonsService.getAll();

	return res.send({ seasons });
});

router.get('/:id', validate(validations.get), async (req, res) => {
	const season = await seasonsService.getById(req.params.id);

	if (!season) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	return res.send({ season });
});

router.post('/', validate(validations.post), async (req, res) => {
	const season = await seasonsService.create(req.body.season);

	return res.send({ season });
});

router.put('/:id', validate(validations.put), async (req, res) => {
	const season = await seasonsService.getById(req.params.id);

	if (!season) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await seasonsService.update(req.body.season, req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

router.delete('/:id', validate(validations.delete), async (req, res) => {
	const season = await seasonsService.getById(req.params.id);

	if (!season) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await seasonsService.remove(req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

module.exports = router;
