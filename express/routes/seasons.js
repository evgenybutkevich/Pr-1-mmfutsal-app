const express = require('express');
const { validate } = require('express-validation');

const services = require('../services/seasons');
const validations = require('../validations/seasons')

const router = express.Router();

router.get('/', async (req, res) => {
	const seasons = await services.getAll();
	res.json({ seasons });
});

router.get('/:id', async (req, res) => {
	const season = await services.getById(req.params.id);

	if (season) {
		res.json({ season });
	} else {
		res.sendStatus(404);
	}
});

router.post('/', validate(validations.post), async (req, res) => {
	const season = await services.create(req.body.season);
	res.status(201).json({ season });
});

router.put('/:id', validate(validations.put), async (req, res) => {
	const season = await services.getById(req.params.id);

	if (season) {
		await services.update(req.body.season, req.params.id);
		res.status(200).json({});
	} else {
		res.sendStatus(404);
	}
});

router.delete('/:id', validate(validations.delete), async (req, res) => {
	const season = await services.getById(req.params.id);

	if (season) {
		await services.remove(req.params.id);
		res.status(200).json({});
	} else {
		res.sendStatus(404);
	}
});

module.exports = router;
