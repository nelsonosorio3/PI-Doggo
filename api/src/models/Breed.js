const { DataTypes } = require('sequelize');





module.exports = (sequelize) => {

  sequelize.define('breed', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: "https://jorgeraziel.com/wp-content/themes/consultix/images/no-image-found-360x260.png",
    }
  });
};
