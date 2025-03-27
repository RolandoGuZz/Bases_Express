const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/database')

class Cliente extends Model { };

Cliente.init(
    {
        id_cliente: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        email:  DataTypes.STRING,
        telefono: DataTypes.STRING,
        direccion: DataTypes.STRING
    },
    { sequelize, modelName: 'Cliente', tableName: 'clientes', timestamps: false })

module.exports = Cliente