const { Joi } = require('express-validation');

const common = require('./common');

const validations = {
	get: {
		params: Joi.object({
			id: Joi.number()
				.integer()
				.positive()
				.required()
		})
	},
	post: {
		body: Joi.object({
			season: Joi.object({
				seasonName: Joi.string()
					.min(common.seasonNameMinLength)
					.max(common.seasonNameMaxLength)
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
			season: Joi.object({
				seasonName: Joi.string()
					.min(common.seasonNameMinLength)
					.max(common.seasonNameMaxLength)
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
