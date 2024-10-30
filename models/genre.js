'use strict';

module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Genres'
  });

  // Relación de uno a muchos con `Book`
  Genre.associate = (models) => {
    Genre.hasMany(models.Book, { foreignKey: 'genreId', as: 'books' });
  };

  return Genre;
};
