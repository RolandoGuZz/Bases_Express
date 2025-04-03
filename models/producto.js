const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/database')

class Libro extends Model { };

Libro.init(
    {
        id_libro: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        descripcion: DataTypes.STRING,
        precio: DataTypes.DOUBLE,
        stock: DataTypes.INTEGER
    },
    { sequelize, modelName: 'Libro' })

module.exports = Libro