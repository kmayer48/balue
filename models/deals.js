var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
    var deals = sequelize.define("deals", {
      Manager_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
      },
  
      Phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [10]
        }
      },
  
      Restaurant_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        },
      },
      hours: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        },
      },
  
      drink_deal: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        },
      },
  
      food_deal: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        },
      }
    });
  
  
    return deals;
  };