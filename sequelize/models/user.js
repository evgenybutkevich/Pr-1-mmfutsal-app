const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("user", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userName: {
            allowNull: false,
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
            allowNull: false,
            type: DataTypes.STRING
        },
        lastName: {
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
    });
};