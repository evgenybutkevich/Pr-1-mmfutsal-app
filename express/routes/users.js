const express = require('express');
const httpStatus = require('http-status');
const { validate } = require('express-validation');

const services = require('../services/users');
const validations = require('../validations/users')

const router = express.Router();

router.get('/', async (req, res) => {
	const users = await services.getAll();

	return res.send({ users });
});

router.get('/:id', validate(validations.get), async (req, res) => {
	const user = await services.getById(req.params.id);

	if (!user) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	return res.send({ user });
});

router.post('/', validate(validations.post), async (req, res) => {
	const user = await services.create(req.body.user);

	return res.status(httpStatus.OK).send({ user });
});

router.put('/:id', validate(validations.put), async (req, res) => {
	const user = await services.getById(req.params.id);

	if (!user) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await services.update(req.body.user, req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

router.delete('/:id', validate(validations.delete), async (req, res) => {
	const user = await services.getById(req.params.id);

	if (!user) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await services.remove(req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

module.exports = router;
