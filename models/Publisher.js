const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Publisher model
class Publisher extends Model {}

Publisher.init(
  {
    publisher_id: {
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
    modelName: 'publisher'
  }
);

// Exports the models to be used in other files
module.exports = Publisher;