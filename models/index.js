const config = require("config");

const {Sequelize} = require("sequelize");
const pgSettings = config.get("pgSettings");
const sequelize = new Sequelize(pgSettings.DATABASE, pgSettings.USER, pgSettings.PASSWORD, {
    dialect: pgSettings.DIALECT,
    host: pgSettings.HOST,
    port: pgSettings.PORT
});

const modelDefiners = [
	require("./user")
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

module.exports = sequelize;