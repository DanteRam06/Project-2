const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

//Created the book table
Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

// Exports the book model to be used in other files
module.exports = Book;
