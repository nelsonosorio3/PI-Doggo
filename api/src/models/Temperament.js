const { DataTypes } = require('sequelize');

// let id = 0;

// function generateId(){
//   id++;
//   return `custom${id}`
// }

module.exports = (sequelize) => {

  sequelize.define('temperament', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   defaultValue: () => generateId(),
    //   primaryKey: true,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};