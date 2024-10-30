'use strict';

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publicationYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'Books'
  });

  // Relación de uno a muchos con `Copy` y de muchos a uno con `Genre`
  Book.associate = (models) => {
    Book.belongsTo(models.Genre, { foreignKey: 'genreId', as: 'genre' });
    Book.hasMany(models.Copy, { foreignKey: 'bookId', as: 'copies' });
  };

  return Book;
};
