const { Sequelize } = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
});

sequelize.authenticate()
    .then(() => console.log('Conectado'))
    .catch((error) => console.log('Error: ', error));

module.exports = sequelize