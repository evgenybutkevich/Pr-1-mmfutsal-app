const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PlayerTeamSeason extends Model {
        static associate(models) {
            PlayerTeamSeason.hasOne(models.result);
        }
    };
    PlayerTeamSeason.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
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
