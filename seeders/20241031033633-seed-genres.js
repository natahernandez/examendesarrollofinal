'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const genres = [
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
    ];

    // Solo insertar si la tabla genres está vacía
    const existingGenres = await queryInterface.sequelize.query(
      'SELECT * FROM "Genres"'
    );

    if (existingGenres[0].length === 0) {
      await queryInterface.bulkInsert('Genres', genres);
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};
