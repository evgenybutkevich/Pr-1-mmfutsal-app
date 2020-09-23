const express = require('express');
const httpStatus = require('http-status');
const { validate } = require('express-validation');

const teamsService = require('../services/teams');
const validations = require('../validations/teams');
const validationUtils = require('../../utils/express-validation/validationUtils');

const router = express.Router();

router.get('/', validationUtils.getValidation(validations.get), async (req, res) => {
	const {
		filterField, filterValue, sortField, sortDirection, page, limit
	} = req.query;

	const teams = await teamsService.getAll({
		filterField, filterValue, sortField, sortDirection, page, limit
	});

	return res.send({ teams: teams.rows });
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
