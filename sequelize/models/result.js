const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Result extends Model {
        static associate(models) {
            Result.belongsTo(models.playerTeamSeason);
        }
    };

    Result.init({
        playerTeamSeasonId: {
            references: {
                model: "playerTeamSeason",
                key: "id"
            },
            type: DataTypes.INTEGER,
        },
        goals: {
            allowNull: false,
            defaultValue: 0,
            type: DataTypes.INTEGER
        },
        yellowCards: {
            allowNull: false,
            defaultValue: 0,
            field: 'yellow_cards',
            type: DataTypes.INTEGER
        },
        redCards: {
            allowNull: false,
            defaultValue: 0,
            field: 'red_cards',
            type: DataTypes.INTEGER
        },
        gamesPlayed: {
            allowNull: false,
            defaultValue: 0,
            field: 'games_played',
            type: DataTypes.INTEGER
        },
        createdAt: {
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: 'created_at',
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: 'updated_at',
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'result',
    });

    return Result;
};
