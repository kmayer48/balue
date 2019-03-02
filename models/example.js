module.exports = function(sequelize, DataTypes) {
  var ownerPost = sequelize.define("post", {
    manager_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1]
    },

    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [10]
      }
    },

    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1]
      },
    },
    hours: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      len: [1]
      },
    },

    drink_deal: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      len: [1]
      },
    },

    food_deal: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      len: [1]
      },
    }
  }
  });

  var Owner = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  var obj = {
    ownerPost:  ownerPost
  };

  return obj;
};
