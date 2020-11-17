const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {

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
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        firstName: {
            allowNull: false,
            field: 'first_name',
            type: DataTypes.STRING
        },
        lastName: {
            allowNull: false,
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
