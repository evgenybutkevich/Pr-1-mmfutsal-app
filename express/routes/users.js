const express = require('express');
const httpStatus = require('http-status');

const usersService = require('../services/users');
const usersValidation = require('../validations/users');
const validationHelper = require('../../utils/validationHelper');

const router = express.Router();

router.get('/', validationHelper(usersValidation.get), async (req, res) => {
	const params = req.query;

	const { count, rows } = await usersService.getAll(params);

	return res.send({
		users: rows,
		meta: {
			count
		}
	});
});

router.get('/:id', validationHelper(usersValidation.get), async (req, res) => {
	const user = await usersService.getById(req.params.id);

	if (!user) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	return res.send({ user });
});

router.post('/', validationHelper(usersValidation.post), async (req, res) => {
	const user = await usersService.create(req.body.user);

	return res.send({ user });
});

router.put('/:id', validationHelper(usersValidation.put), async (req, res) => {
	const user = await usersService.getById(req.params.id);

	if (!user) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await usersService.update(req.body.user, req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

router.delete('/:id', validationHelper(usersValidation.delete), async (req, res) => {
	const user = await usersService.getById(req.params.id);

	if (!user) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await usersService.remove(req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

module.exports = router;
