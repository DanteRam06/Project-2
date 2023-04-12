const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Genre model
class Genre extends Model {}

Genre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'genre'
  }
);

// Exports the models to be used in other files
module.exports = Genre;
