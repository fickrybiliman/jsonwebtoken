'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Kelurahans', [{
      kelurahan: 'Darat Sekip',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Mariana',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Sungai Bangkong',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Sungai Jawi',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Tengah',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Pal Lima',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Sungai Beliung',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Sungai Jawi Dalam',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Sungai Jawi Luar',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Akcaya',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Benua Melayu Darat',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Benu Melayu Laut',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Kota Baru',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Parit Tokaya',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Bangka Belitung Darat',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Bangka Belitung Laut',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Bansir Darat',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Bansir Laut',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Banjar Serasan',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Dalam Bugis',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Parit Mayor',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Saigon',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Tambelan Sampit',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Tanjung Hilir',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Tanjung Hulu',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Batu Layang',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Siantan Hilir',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Siantan Hulu',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'Siantan Tengah',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Kelurahans', null, {});   
  }
};
