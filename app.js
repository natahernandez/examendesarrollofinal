const express = require('express');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Importar rutas principales
const routes = require('./routes'); 
app.use('/api', routes); // Rutas de API principal

// Configuración de Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mi API REST MVC',
            version: '1.0.0',
            description: 'API RESTful con estructura MVC documentada con Swagger',
        },
    },
    apis: ['./routes/*.js'], // Documentar desde las rutas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
