const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('tienda', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Conectado'))
    .catch((error) => console.log('Error: ',error));

module.exports = sequelize