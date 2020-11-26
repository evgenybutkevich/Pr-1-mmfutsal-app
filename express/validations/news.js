const { Joi } = require('express-validation');

const common = require('./common');

const validations = {
    get: {
        params: Joi.object({
            id: Joi.number()
                .integer()
                .positive()
        }),
        query: Joi.object({
            filterField: Joi.string()
                .valid(
                    'name'
                ),
            filterValue: Joi.string(),
            page: Joi.number()
                .integer()
                .positive()
                .default(1),
            limit: Joi.number()
                .min(common.pagination.minLimit)
                .max(common.pagination.maxLimit)
                .default(5),
            sortField: Joi.string()
                .valid(
                    'id',
                    'heading',
                    'createdAt'
                )
                .default('id'),
            sortDirection: Joi.string()
                .valid(
                    'ASC',
                    'DESC'
                )
                .default('ASC')
        }),
    },
    post: {
        body: Joi.object({
            news: Joi.object({
                heading: Joi.string()
                    .min(common.headingMinLength)
                    .max(common.headingMaxLength)
                    .required(),
                sectionId: Joi.number()
                    .integer()
                    .positive()
                    .required(),
                content: Joi.string()
                    .min(common.contentMinLength)
                    .max(common.contentMaxLength)
                    .required(),
                userId: Joi.number()
                    .integer()
                    .positive()
                    .required(),
            }).options({ stripUnknown: true })
        })
    },
    put: {
        params: Joi.object({
            id: Joi.number()
                .integer()
                .positive()
                .required()
        }),
        body: Joi.object({
            news: Joi.object({
                heading: Joi.string()
                    .min(common.headingMinLength)
                    .max(common.headingMaxLength)
                    .required(),
                sectionId: Joi.number()
                    .integer()
                    .positive()
                    .required(),
                content: Joi.string()
                    .min(common.contentMinLength)
                    .max(common.contentMaxLength)
                    .required(),
                userId: Joi.number()
                    .integer()
                    .positive()
                    .required(),
            }).options({ stripUnknown: true })
        }),
    },
    delete: {
        params: Joi.object({
            id: Joi.number()
                .integer()
                .positive()
                .required()
        })
    }
};

module.exports = validations;
