const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define BookAuthors model
class BookAuthors extends Model {}

BookAuthors.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Book,
        key: 'book_id'
      }
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'author',
        key: 'author_id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'book_authors'
  }
);

// Exports the models to be used in other files
module.exports = BookAuthors;