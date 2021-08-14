const { DataTypes } = require('sequelize');

let id = 0;

function generateId(){
  id++;
  return `custom${id}`
}

module.exports = (sequelize) => {

  sequelize.define('breed', {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => generateId(),
      primaryKey: true,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    life_span: {
      type: DataTypes.STRING,
    }
  });
};
