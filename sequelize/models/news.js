const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class News extends Model {
        static associate(models) {
            News.belongsTo(models.section);
            News.belongsTo(models.user);
        }
    };

    News.init({
        heading: {
            allowNull: false,
            type: DataTypes.STRING
        },
        sectionId: {
            allowNull: false,
            field: 'section_id',
            type: DataTypes.INTEGER
        },
        content: {
            allowNull: false,
            type: DataTypes.STRING(32768)
        },
        userId: {
            allowNull: false,
            field: 'user_id',
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
        modelName: 'news',
    });

    return News;
};
