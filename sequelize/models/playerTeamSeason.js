const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PlayerTeamSeason extends Model {
        static associate(models) {
            PlayerTeamSeason.hasOne(models.result, {
                foreignKey: {
                    allowNull: false
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
        }
    };

    PlayerTeamSeason.init({
        id: {
            allowNull: false,
            primaryKey: true,
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
