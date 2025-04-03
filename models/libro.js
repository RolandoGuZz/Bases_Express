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
        titulo: {
            type: DataTypes.STRING
        },
        autor: DataTypes.STRING,
        genero: DataTypes.STRING,
        publicacion: DataTypes.INTEGER
    },
    { sequelize, modelName: 'Libro', timestamps: false })

module.exports = Libro