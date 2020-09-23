const express = require('express');
const httpStatus = require('http-status');
const { validate } = require('express-validation');

const usersService = require('../services/users');
const validations = require('../validations/users')

const router = express.Router();

router.get('/', validate(validations.get), async (req, res) => {
	const { filterField, filterValue, sortField, sortDirection } = req.query;

	const users = await usersService.getAll({ filterField, filterValue, sortField, sortDirection });

	return res.send({ users });
});

router.get('/:id', validate(validations.get), async (req, res) => {
	const user = await usersService.getById(req.params.id);

	if (!user) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	return res.send({ user });
});

router.post('/', validate(validations.post), async (req, res) => {
	const user = await usersService.create(req.body.user);

	return res.send({ user });
});

router.put('/:id', validate(validations.put), async (req, res) => {
	const user = await usersService.getById(req.params.id);

	if (!user) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await usersService.update(req.body.user, req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

router.delete('/:id', validate(validations.delete), async (req, res) => {
	const user = await usersService.getById(req.params.id);

	if (!user) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await usersService.remove(req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

module.exports = router;
