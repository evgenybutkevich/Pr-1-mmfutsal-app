const { Joi } = require('express-validation');

const validations = {
	post: {
		body: Joi.object({
			user: Joi.object({
				userName: Joi.string()
					.min(5)
					.max(30)
					.required(),
				email: Joi.string()
					.email()
					.required(),
				telephone: Joi.string()
					.regex(/^\+375 (?:25|29|33|44) (?=.*\d).{3}-(?=.*\d).{2}-(?=.*\d).{2}$/)
					.required(),
				password: Joi.string()
					.min(5)
					.max(15)
					.regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,15}$/)
					.required(),
				firstName: Joi.string()
					.min(2)
					.max(30)
					.required(),
				lastName: Joi.string()
					.min(2)
					.max(30)
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
			user: Joi.object({
				userName: Joi.string()
					.min(5)
					.max(30)
					.required(),
				email: Joi.string()
					.email()
					.required(),
				telephone: Joi.string()
					.regex(/^\+375 (?:25|29|33|44) (?=.*\d).{3}-(?=.*\d).{2}-(?=.*\d).{2}$/)
					.required(),
				password: Joi.string()
					.min(5)
					.max(15)
					.regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,15}$/)
					.required(),
				firstName: Joi.string()
					.min(2)
					.max(30)
					.required(),
				lastName: Joi.string()
					.min(2)
					.max(30)
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