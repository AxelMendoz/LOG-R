'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'fechaNacimiento', {
      type: Sequelize.DATE,
      allowNull: true,  // Permitir valores NULL
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'fechaNacimiento');
  }
};
