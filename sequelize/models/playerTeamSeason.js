const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PlayerTeamSeason extends Model { };

    PlayerTeamSeason.init({
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
