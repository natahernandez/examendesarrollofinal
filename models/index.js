'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
require('dotenv').config(); 
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};

// Configuración de conexión a la base de datos
const config = {
  username: process.env.DB_USERNAME,    
  password: process.env.DB_PASSWORD,  
  database: process.env.DB_DATABASE,  
  host: process.env.DB_HOST,       
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT || 5432, // Añade el puerto aquí, 5432 es el puerto por defecto de PostgreSQL
};

let sequelize;
if (process.env.DB_URL) {
  // Si se proporciona una URL de conexión, usarla
  sequelize = new Sequelize(process.env.DB_URL, config);
} else {
  // Crear la conexión usando variables de entorno
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port, // Agrega el puerto a la configuración
  });
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
