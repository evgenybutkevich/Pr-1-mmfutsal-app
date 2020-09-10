const { Joi } = require('express-validation');

const validations = {
	post: {
		body: Joi.object({
			result: Joi.object({
				playerTeamSeasonId: Joi.number()
					.integer()
					.positive()
					.required(),
				goals: Joi.number()
					.greater(-1)
					.integer()
					.required(),
				yellowCards: Joi.number()
					.greater(-1)
					.integer()
					.required(),
				redCards: Joi.number()
					.greater(-1)
					.integer()
					.required(),
				gamesPlayed: Joi.number()
					.greater(-1)
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
				playerTeamSeasonId: Joi.number()
					.integer()
					.positive()
					.required(),
				goals: Joi.number()
					.greater(-1)
					.integer()
					.required(),
				yellowCards: Joi.number()
					.greater(-1)
					.integer()
					.required(),
				redCards: Joi.number()
					.greater(-1)
					.integer()
					.required(),
				gamesPlayed: Joi.number()
					.greater(-1)
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