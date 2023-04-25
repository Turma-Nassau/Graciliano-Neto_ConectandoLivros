'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Livros', {
      id_book: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      autor: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      editora: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      edicao: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      ano_publicacao: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};