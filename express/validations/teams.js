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
					'id',
					'team_name'
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
					'team_name'
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
			team: Joi.object({
				teamName: Joi.string()
					.min(common.teamNameMinLength)
					.max(common.teamNameMaxLength)
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
			team: Joi.object({
				teamName: Joi.string()
					.min(common.teamNameMinLength)
					.max(common.teamNameMaxLength)
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
