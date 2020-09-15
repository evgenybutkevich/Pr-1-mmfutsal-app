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
					.required(),
				startYear: Joi.date()
					.greater('2010-01-01')
					.less('2030-12-31')
					.required(),
				endYear: Joi.date()
					.greater('2010-01-01')
					.less('2030-12-31')
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
					.required(),
				startYear: Joi.date()
					.greater('2010-01-01')
					.less('2030-12-31')
					.required(),
				endYear: Joi.date()
					.greater('2010-01-01')
					.less('2030-12-31')
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
