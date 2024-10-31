require('dotenv').config(); // Cargar variables de entorno

module.exports = {
  development: {
    username: process.env.DB_USERNAME,  
    password: process.env.DB_PASSWORD,  
    database: process.env.DB_DATABASE,  
    host: process.env.DB_HOST,          
    dialect: process.env.DB_DIALECT,    
  },
  test: {
    username: process.env.TEST_DB_USERNAME || "tu_usuario",  // Valor por defecto si no se establece
    password: process.env.TEST_DB_PASSWORD || "tu_contraseña", // Valor por defecto
    database: process.env.TEST_DB_DATABASE || "nombre_de_base_de_datos_test",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",
  },
  production: {
    username: process.env.PROD_DB_USERNAME || "tu_usuario",  // Valor por defecto
    password: process.env.PROD_DB_PASSWORD || "tu_contraseña", // Valor por defecto
    database: process.env.PROD_DB_DATABASE || "nombre_de_base_de_datos_prod",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",
  },
};
