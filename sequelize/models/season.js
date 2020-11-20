const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Season extends Model {
        static associate(models) {
            Season.belongsToMany(models.player, { through: 'playerTeamSeason' });
            Season.belongsToMany(models.team, { through: 'playerTeamSeason' });
            Season.belongsToMany(models.result, { through: 'playerTeamSeason' });
        }
    };

    Season.init({
        seasonName: {
            allowNull: false,
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
        modelName: 'season',
    });

    return Season;
};
