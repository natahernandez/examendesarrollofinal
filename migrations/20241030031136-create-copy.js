'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Copies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bookId: {
        type: Sequelize.INTEGER,
        allowNull: true,  // Permitir valores NULL en bookId
        references: {
          model: 'Books', // Nombre de la tabla de libros
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'  // Permitir que se establezca NULL al eliminar un libro
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Copies');
  }
};
