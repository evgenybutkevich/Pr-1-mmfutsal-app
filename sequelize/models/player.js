const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Player extends Model {
        static associate(models) {
            Player.belongsToMany(models.season, { through: 'playerTeamSeason' });
            Player.belongsToMany(models.team, { through: 'playerTeamSeason' });
        }
    };

    Player.init({
        firstName: {
            allowNull: false,
            field: 'first_name',
            type: DataTypes.STRING
        },
        lastName: {
            allowNull: false,
            field: 'last_name',
            type: DataTypes.STRING
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
        modelName: 'player',
    });

    return Player;
};
