const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// Define Book model
class Book extends Model {}

Book.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_pages: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rating: {
      allowNull: true
    },
    isbn: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    published_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    // remove publisher id if there is only one publisher and add the publisher name directly in the book
    publisher: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: 'book'
  }
);


// Exports the models to be used in other files
module.exports = Book;


