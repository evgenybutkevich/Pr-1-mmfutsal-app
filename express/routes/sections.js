const express = require('express');
const httpStatus = require('http-status');

const sectionsService = require('../services/sections');
const sectionsValidation = require('../validations/sections');
const validate = require('../../utils/validationHelper');

const router = express.Router();

router.get('/', validate(sectionsValidation.get), async (req, res) => {
    const sections = await sectionsService.getAll();

    return res.send({ sections });
});

router.get('/:id', validate(sectionsValidation.get), async (req, res) => {
    const section = await sectionsService.getById(req.params.id);

    if (!section) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }

    return res.send({ section });
});

router.post('/', validate(sectionsValidation.post), async (req, res) => {
    const section = await sectionsService.create(req.body.section);

    return res.send({ section });
});

router.put('/:id', validate(sectionsValidation.put), async (req, res) => {
    const section = await sectionsService.getById(req.params.id);

    if (!section) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }

    await sectionsService.update(req.body.section, req.params.id);

    return res.sendStatus(httpStatus.NO_CONTENT);
});

router.delete('/:id', validate(sectionsValidation.delete), async (req, res) => {
    const section = await sectionsService.getById(req.params.id);

    if (!section) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }

    await sectionsService.remove(req.params.id);

    return res.sendStatus(httpStatus.NO_CONTENT);
});

module.exports = router;
