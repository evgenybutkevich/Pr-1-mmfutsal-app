const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Section extends Model {
        static associate(models) {
            Section.hasMany(models.news);
        }
    };

    Section.init({
        name: {
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
        modelName: 'section',
    });

    return Section;
};
