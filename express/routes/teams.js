const express = require('express');
const httpStatus = require('http-status');
const { validate } = require('express-validation');

const services = require('../services/teams');
const validations = require('../validations/teams')

const router = express.Router();

router.get('/', async (req, res) => {
	const teams = await services.getAll();

	return res.send({ teams });
});

router.get('/:id', validate(validations.get), async (req, res) => {
	const team = await services.getById(req.params.id);

	if (!team) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	return res.send({ team });
});

router.post('/', validate(validations.post), async (req, res) => {
	const team = await services.create(req.body.team);

	return res.status(httpStatus.OK).send({ team });
});

router.put('/:id', validate(validations.put), async (req, res) => {
	const team = await services.getById(req.params.id);

	if (!team) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await services.update(req.body.team, req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

router.delete('/:id', validate(validations.delete), async (req, res) => {
	const team = await services.getById(req.params.id);

	if (!team) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await services.remove(req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

module.exports = router;
