'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const genres = [
      {
        name: 'Ficción',
        description: 'Género que abarca narraciones imaginarias o inventadas.',
      },
      {
        name: 'No Ficción',
        description: 'Género basado en hechos reales y personas reales.',
      },
      {
        name: 'Ciencia Ficción',
        description: 'Género que explora conceptos de ciencia y tecnología imaginarios.',
      },
      {
        name: 'Fantasía',
        description: 'Género que incluye elementos mágicos y mundos imaginarios.',
      },
      {
        name: 'Terror',
        description: 'Género que busca causar miedo en el lector.',
      },
      {
        name: 'Romance',
        description: 'Género centrado en relaciones amorosas.',
      },
      {
        name: 'Historia',
        description: 'Género basado en eventos históricos y personajes reales.',
      },
      {
        name: 'Misterio',
        description: 'Género que gira en torno a la resolución de un enigma o crimen.',
      },
    ];

    for (const genre of genres) {
      const [result] = await queryInterface.sequelize.query(
        `SELECT * FROM Genres WHERE name = :name`,
        { replacements: { name: genre.name } }
      );

      // Solo insertar si no existe
      if (result.length === 0) {
        await queryInterface.bulkInsert('Genres', [{
          name: genre.name,
          description: genre.description,
          createdAt: new Date(),
          updatedAt: new Date(),
        }]);
        console.log(`Género '${genre.name}' creado exitosamente.`);
      } else {
        console.log(`El género '${genre.name}' ya existe, no se inserta.`);
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};
