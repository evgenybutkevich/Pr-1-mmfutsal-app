const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PlayerTeamSeason extends Model {
        static associate(models) {
            PlayerTeamSeason.hasOne(models.result);
        }
    };

    PlayerTeamSeason.init({
        playerId: {
            references: {
                model: "player",
                key: "id"
            },
            type: DataTypes.INTEGER,
        },
        teamId: {
            references: {
                model: "team",
                key: "id"
            },
            type: DataTypes.INTEGER,
        },
        seasonId: {
            references: {
                model: "season",
                key: "id"
            },
            type: DataTypes.INTEGER,
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
