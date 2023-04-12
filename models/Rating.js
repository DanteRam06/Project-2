const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Rating extends Model {}

Rating.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
          },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);



module.exports = Rating;