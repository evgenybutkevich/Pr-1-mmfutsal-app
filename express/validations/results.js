const { Joi } = require('express-validation');

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
			result: Joi.object({
				goals: Joi.number()
					.allow(0)
					.integer()
					.required(),
				yellowCards: Joi.number()
					.allow(0)
					.integer()
					.required(),
				redCards: Joi.number()
					.allow(0)
					.integer()
					.required(),
				gamesPlayed: Joi.number()
					.allow(0)
					.integer()
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
			result: Joi.object({
				goals: Joi.number()
					.allow(0)
					.integer()
					.required(),
				yellowCards: Joi.number()
					.allow(0)
					.integer()
					.required(),
				redCards: Joi.number()
					.allow(0)
					.integer()
					.required(),
				gamesPlayed: Joi.number()
					.allow(0)
					.integer()
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
