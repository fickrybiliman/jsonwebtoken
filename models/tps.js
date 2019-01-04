'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tps = sequelize.define('Tps', {
    tps: DataTypes.INTEGER
  }, {});
  Tps.associate = function(models) {
    // associations can be defined here
  };
  return Tps;
};