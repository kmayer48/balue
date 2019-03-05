var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
    var contacts = sequelize.define("contacts", {
      Passport_displayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      Passport_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
    });
  
    return contacts;
  };