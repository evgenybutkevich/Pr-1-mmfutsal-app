const { Joi } = require('express-validation');

const common = require('./common');

const validations = {
    get: {
        params: Joi.object({
            id: Joi.number()
                .integer()
                .positive()
        })
    },
    post: {
        body: Joi.object({
            section: Joi.object({
                name: Joi.string()
                    .min(common.sectionNameMinLength)
                    .max(common.sectionNameMaxLength)
                    .required()
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
            section: Joi.object({
                name: Joi.string()
                    .min(common.sectionNameMinLength)
                    .max(common.sectionNameMaxLength)
                    .required()
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
