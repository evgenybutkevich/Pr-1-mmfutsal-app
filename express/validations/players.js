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
			sortField: Joi.string()
				.valid(
					'id',
					'firstName',
					'lastName'
				),
			sortDirection: Joi.string()
				.valid(
					'ASC',
					'DESC'
				)
		}),
	},
	post: {
		body: Joi.object({
			player: Joi.object({
				firstName: Joi.string()
					.min(common.firstNameMinLength)
					.max(common.firstNameMaxLength)
					.required(),
				lastName: Joi.string()
					.min(common.lastNameMinLength)
					.max(common.lastNameMaxLength)
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
					.min(common.firstNameMinLength)
					.max(common.firstNameMaxLength)
					.required(),
				lastName: Joi.string()
					.min(common.lastNameMinLength)
					.max(common.lastNameMaxLength)
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
