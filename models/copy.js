'use strict';

module.exports = (sequelize, DataTypes) => {
  const Copy = sequelize.define('Copy', {
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Copies'
  });

  // Relación de muchos a uno con `Book`
  Copy.associate = (models) => {
    Copy.belongsTo(models.Book, { foreignKey: 'bookId', as: 'book' });
  };

  return Copy;
};
