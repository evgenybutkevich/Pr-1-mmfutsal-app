const express = require('express');
const httpStatus = require('http-status');

const teamsService = require('../services/teams');
const teamsValidation = require('../validations/teams');
const validate = require('../../utils/validationHelper');

const router = express.Router();

router.get('/', validate(teamsValidation.get), async (req, res) => {
	const params = req.query;

	const { count, rows } = await teamsService.getAll(params);

	return res.send({
		teams: rows,
		meta: {
			count
		}
	});
});

router.get('/:id', validate(teamsValidation.get), async (req, res) => {
	const team = await teamsService.getById(req.params.id);

	if (!team) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	return res.send({ team });
});

router.post('/', validate(teamsValidation.post), async (req, res) => {
	const team = await teamsService.create(req.body.team);

	return res.send({ team });
});

router.put('/:id', validate(teamsValidation.put), async (req, res) => {
	const team = await teamsService.getById(req.params.id);

	if (!team) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await teamsService.update(req.body.team, req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

router.delete('/:id', validate(teamsValidation.delete), async (req, res) => {
	const team = await teamsService.getById(req.params.id);

	if (!team) {
		return res.sendStatus(httpStatus.NOT_FOUND);
	}

	await teamsService.remove(req.params.id);

	return res.sendStatus(httpStatus.NO_CONTENT);
});

module.exports = router;
