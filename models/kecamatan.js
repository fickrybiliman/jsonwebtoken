'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kecamatan = sequelize.define('Kecamatan', {
    kecamatan: DataTypes.STRING
  }, {});
  Kecamatan.associate = function(models) {
    // associations can be defined here
  };
  return Kecamatan;
};