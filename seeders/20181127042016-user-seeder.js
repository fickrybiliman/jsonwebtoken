'use strict';
const bcrypt = require('bcrypt');

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
    const passwordFickry = bcrypt.hashSync('biliman', 7);
    const passwordAdmin = bcrypt.hashSync('admin', 7);
    return queryInterface.bulkInsert('Users', [{
      username: 'fickry',
      password: passwordFickry,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'admin',
      password: passwordAdmin,
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
