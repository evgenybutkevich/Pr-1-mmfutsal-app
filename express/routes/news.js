const express = require('express');
const httpStatus = require('http-status');

const newsService = require('../services/news');
const newsValidation = require('../validations/news');
const validate = require('../../utils/validationHelper');

const router = express.Router();

router.get('/', validate(newsValidation.get), async (req, res) => {
    const params = req.query;

    const { count, rows } = await newsService.getAll(params);

    return res.send({
        news: rows,
        meta: {
            count
        }
    })
});

router.get('/:id', validate(newsValidation.get), async (req, res) => {
    const article = await newsService.getById(req.params.id);

    if (!article) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }

    return res.send({ news: article });
});

router.post('/', validate(newsValidation.post), async (req, res) => {
    const article = await newsService.create(req.body.news);

    return res.send({ news: article });
});

router.put('/:id', validate(newsValidation.put), async (req, res) => {
    const article = await newsService.getById(req.params.id);

    if (!article) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }

    await newsService.update(req.body.news, req.params.id);

    return res.sendStatus(httpStatus.NO_CONTENT);
});

router.delete('/:id', validate(newsValidation.delete), async (req, res) => {
    const article = await newsService.getById(req.params.id);

    if (!article) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }

    await newsService.remove(req.params.id);

    return res.sendStatus(httpStatus.NO_CONTENT);
});

module.exports = router;
