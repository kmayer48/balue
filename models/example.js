module.exports = function(sequelize, DataTypes) {
  var owner = sequelize.define("post", {
    businessName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1]
    },
    deal: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      len: [1]
      },
    },
    description: DataTypes.TEXT
  }
  });

  var Owner = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
