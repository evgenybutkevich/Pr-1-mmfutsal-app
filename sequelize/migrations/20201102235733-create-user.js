module.exports = {
    up: async function (queryInterface, DataTypes) {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
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
                defaultValue: DataTypes.fn('now'),
                field: 'created_at',
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                defaultValue: DataTypes.fn('now'),
                field: 'updated_at',
                type: DataTypes.DATE
            }
        });
    },
    down: async function (queryInterface, DataTypes) {
        await queryInterface.dropTable('users');
    }
};
