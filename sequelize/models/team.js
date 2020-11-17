const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Team extends Model {
        static associate(models) {
            Team.belongsToMany(models.player, { through: 'playerTeamSeason' });
            Team.belongsToMany(models.season, { through: 'playerTeamSeason' });
            Team.belongsToMany(models.result, { through: 'playerTeamSeason' });
        }
    };

    Team.init({
        teamName: {
            allowNull: false,
            field: 'team_name',
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
        modelName: 'team',
    });

    return Team;
};
