const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PlayerTeamSeason extends Model { };

    PlayerTeamSeason.init({
        playerId: {
            allowNull: false,
            field: 'player_id',
            type: DataTypes.INTEGER
        },
        teamId: {
            allowNull: false,
            field: 'team_id',
            type: DataTypes.INTEGER
        },
        seasonId: {
            allowNull: false,
            field: 'season_id',
            type: DataTypes.INTEGER
        },
        resultId: {
            allowNull: false,
            field: 'result_id',
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
        modelName: 'playerTeamSeason',
    });

    return PlayerTeamSeason;
};
