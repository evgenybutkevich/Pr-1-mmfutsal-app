const express = require('express');
const httpStatus = require('http-status');
const { validate } = require('express-validation');

const teamsService = require('../services/teams');
const validations = require('../validations/teams')

const router = express.Router();

router.get('/', validate(validations.get), async (req, res) => {
	const {
		filterField, filterValue, pageNumber, instancesNumber, sortField, sortDirection
	} = req.query;

	const teams = await teamsService.getAll({
		filterField, filterValue, pageNumber, instancesNumber, sortField, sortDirection
	});

	return res.send({ teams });
});

router.get('/:id', validate(validations.get), async (req, res) => {
	const team = await teamsService.getById(req.params.id);

	if (!team) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	return res.send({ team });
});

router.post('/', validate(validations.post), async (req, res) => {
	const team = await teamsService.create(req.body.team);

	return res.send({ team });
});

router.put('/:id', validate(validations.put), async (req, res) => {
	const team = await teamsService.getById(req.params.id);

	if (!team) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await teamsService.update(req.body.team, req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

router.delete('/:id', validate(validations.delete), async (req, res) => {
	const team = await teamsService.getById(req.params.id);

	if (!team) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await teamsService.remove(req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

module.exports = router;
