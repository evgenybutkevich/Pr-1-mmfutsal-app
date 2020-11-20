const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PlayerTeamSeason extends Model { };

    PlayerTeamSeason.init({
        playerId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        teamId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        seasonId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        resultId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        createdAt: {
            allowNull: false,
            defaultValue: DataTypes.NOW,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            defaultValue: DataTypes.NOW,
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'playerTeamSeason',
    });

    return PlayerTeamSeason;
};
