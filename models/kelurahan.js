'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kelurahan = sequelize.define('Kelurahan', {
    kelurahan: DataTypes.STRING,
    kecamatanID: DataTypes.INTEGER
  }, {});
  Kelurahan.associate = function(models) {
    // associations can be defined here
  };
  return Kelurahan;
};