'use strict';
module.exports = (sequelize, DataTypes) => {
  const Konstituen = sequelize.define('Konstituen', {
    nama: DataTypes.STRING,
    nik: DataTypes.STRING,
    hp: DataTypes.STRING,
    alamat: DataTypes.STRING,    // ditambah manual setelah dibikin sequelize migration:generate nya
    kecamatanID: DataTypes.INTEGER,   // ditambah manual setelah dibikin sequelize migration:generate nya
    kelurahanID: DataTypes.INTEGER,   // ditambah manual setelah dibikin sequelize migration:generate nya
    tps: DataTypes.INTEGER        // ditambah manual setelah dibikin sequelize migration:generate nya 
  }, {});
  Konstituen.associate = function(models) {
    // associations can be defined here
    Konstituen.belongsTo(sequelize.models.Kecamatan, {foreignKey: 'kecamatanID'}),
    Konstituen.belongsTo(sequelize.models.Kelurahan, {foreignKey: 'kelurahanID'})
  };
  Konstituen.beforeCreate(konstituen => {
    let konstituenNama = konstituen.nama[0].toUpperCase();
    for (let i = 1; i < konstituen.nama.length; i++) {
      if (konstituen.nama[i] === ' ') {
        konstituenNama += ' ';
      } else if (konstituen.nama[i-1] === ' ' || konstituen.nama[i-1] === '.') {
        konstituenNama += konstituen.nama[i].toUpperCase();
      } else if (konstituen.nama[i] !== ' ') {
        konstituenNama += konstituen.nama[i];
      }
    }
    konstituen.nama = konstituenNama;
    return konstituen;
  });
  return Konstituen;
};