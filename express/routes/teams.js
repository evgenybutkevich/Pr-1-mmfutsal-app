const express = require('express');
const httpStatus = require('http-status');

const teamsService = require('../services/teams');
const teamsValidation = require('../validations/teams');
const validationHelper = require('../../utils/validationHelper');

const router = express.Router();

router.get('/', validationHelper(teamsValidation.get), async (req, res) => {
	const params = req.query;

	const { count, rows } = await teamsService.getAll(params);

	return res.send({
		teams: rows,
		meta: {
			count
		}
	});
});

router.get('/:id', validationHelper(teamsValidation.get), async (req, res) => {
	const team = await teamsService.getById(req.params.id);

	if (!team) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	return res.send({ team });
});

router.post('/', validationHelper(teamsValidation.post), async (req, res) => {
	const team = await teamsService.create(req.body.team);

	return res.send({ team });
});

router.put('/:id', validationHelper(teamsValidation.put), async (req, res) => {
	const team = await teamsService.getById(req.params.id);

	if (!team) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await teamsService.update(req.body.team, req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

router.delete('/:id', validationHelper(teamsValidation.delete), async (req, res) => {
	const team = await teamsService.getById(req.params.id);

	if (!team) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await teamsService.remove(req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

module.exports = router;
