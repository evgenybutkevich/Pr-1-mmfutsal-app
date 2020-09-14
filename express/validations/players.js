const { Joi } = require('express-validation');

const validations = {
	post: {
		body: Joi.object({
			player: Joi.object({
				firstName: Joi.string()
					.min(2)
					.max(30)
					.required(),
				lastName: Joi.string()
					.min(2)
					.max(30)
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
			player: Joi.object({
				firstName: Joi.string()
					.min(2)
					.max(30)
					.required(),
				lastName: Joi.string()
					.min(2)
					.max(30)
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
