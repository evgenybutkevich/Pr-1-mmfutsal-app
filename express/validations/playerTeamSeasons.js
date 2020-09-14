const { Joi } = require('express-validation');

const validations = {
	post: {
		body: Joi.object({
			playerTeamSeason: Joi.object({
				playerId: Joi.number()
					.integer()
					.positive()
					.required(),
				teamId: Joi.number()
					.integer()
					.positive()
					.required(),
				seasonId: Joi.number()
					.integer()
					.positive()
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
			playerTeamSeason: Joi.object({
				playerId: Joi.number()
					.integer()
					.positive()
					.required(),
				teamId: Joi.number()
					.integer()
					.positive()
					.required(),
				seasonId: Joi.number()
					.integer()
					.positive()
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
