'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      {
        name: 'Ficción',
        description: 'Género que abarca narraciones imaginarias o inventadas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'No Ficción',
        description: 'Género basado en hechos reales y personas reales.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ciencia Ficción',
        description: 'Género que explora conceptos de ciencia y tecnología imaginarios.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fantasía',
        description: 'Género que incluye elementos mágicos y mundos imaginarios.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Terror',
        description: 'Género que busca causar miedo en el lector.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Romance',
        description: 'Género centrado en relaciones amorosas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Historia',
        description: 'Género basado en eventos históricos y personajes reales.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Misterio',
        description: 'Género que gira en torno a la resolución de un enigma o crimen.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};
