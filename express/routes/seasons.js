const express = require('express');
const { validate } = require('express-validation');

const services = require('../services/seasons');
const validations = require('../validations/seasons')

const router = express.Router();

router.get('/', async (req, res) => {
	const seasons = await services.getAll();

	return res.send({ seasons });
});

router.get('/:id', async (req, res) => {
	const season = await services.getById(req.params.id);

	if (!season) {
		return res.sendStatus(404);
	}

	return res.send({ season });
});

router.post('/', validate(validations.post), async (req, res) => {
	const season = await services.create(req.body.season);

	return res.status(201).send({ season });
});

router.put('/:id', validate(validations.put), async (req, res) => {
	const season = await services.getById(req.params.id);

	if (!season) {
		return res.sendStatus(404);
	}

	await services.update(req.body.season, req.params.id);

	return res.send({});
});

router.delete('/:id', validate(validations.delete), async (req, res) => {
	const season = await services.getById(req.params.id);

	if (!season) {
		return res.sendStatus(404);
	}

	await services.remove(req.params.id);

	return res.send({});
});

module.exports = router;
