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
					'firstName',
					'lastName'
				),
			filterValue: Joi.string()
				.regex(common.filterValueRegex),
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
					'firstName',
					'lastName'
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
			player: Joi.object({
				firstName: Joi.string()
					.min(common.firstNameMinLength)
					.max(common.firstNameMaxLength)
					.required(),
				lastName: Joi.string()
					.min(common.lastNameMinLength)
					.max(common.lastNameMaxLength)
					.required(),
				avatar: Joi.string()
					.valid(null)
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
