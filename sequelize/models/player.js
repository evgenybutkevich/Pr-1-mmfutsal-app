const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Player extends Model {
        static associate(models) {
            Player.belongsToMany(models.result, { through: 'playerTeamSeason' });
            Player.belongsToMany(models.season, { through: 'playerTeamSeason' });
            Player.belongsToMany(models.team, { through: 'playerTeamSeason' });
        }
    };

    Player.init({
        firstName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        lastName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        avatar: {
            allowNull: true,
            type: DataTypes.STRING
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
        modelName: 'player',
    });

    return Player;
};
