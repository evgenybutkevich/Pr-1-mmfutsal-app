const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.news);
        }
    };

    User.init({
        userName: {
            allowNull: false,
            field: 'username',
            type: DataTypes.STRING
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING
        },
        telephone: {
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        firstName: {
            field: 'first_name',
            type: DataTypes.STRING
        },
        lastName: {
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
        modelName: 'user',
    });

    return User;
};
