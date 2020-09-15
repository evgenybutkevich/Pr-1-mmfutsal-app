const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Team extends Model {
        static associate(models) {
            Team.belongsToMany(models.player, { through: 'playerTeamSeason' });
            Team.belongsToMany(models.season, { through: 'playerTeamSeason' });
        }
    };

    Team.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        teamName: {
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
        modelName: 'team',
    });

    return Team;
};
