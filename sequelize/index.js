const { Sequelize } = require('sequelize');

const pgConfig = {
    DIALECT: 'postgres',
    USER: 'postgres',
    PASSWORD: 'postgres',
    DATABASE: 'mmfutsal-app',
    HOST: 'localhost',
    PORT: 5432
}

const sequelize = new Sequelize(pgConfig.DATABASE, pgConfig.USER, pgConfig.PASSWORD, {
    dialect: pgConfig.DIALECT,
    host: pgConfig.HOST,
    port: pgConfig.PORT
});

const modelDefiners = [
    require('./models/player'),
    require('./models/user'),
    // require('./models/season'),
    // require('./models/team')
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

module.exports = sequelize;