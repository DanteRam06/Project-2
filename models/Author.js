const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Author model
class Author extends Model {}

Author.init(
  {
    author_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    middle_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'author'
  }
);

// Exports the models to be used in other files
module.exports = Author;
