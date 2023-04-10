const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define BookGenre model
class BookGenre extends Model {}

BookGenre.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Book,
        key: 'book_id'
      },
      onDelete: 'CASCADE'
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Genre,
        key: 'genre_id'
      },
      onDelete: 'CASCADE'
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book_genre'
  }
);


// Exports the models to be used in other files
module.exports = BookGenre;