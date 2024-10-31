const express = require('express');
const router = express.Router();
const genreRoutes = require('./genreRoutes');
const userRoutes = require('./userRoutes');
const copyRoutes = require('./copyRoutes');
const bookRoutes = require('./bookRoutes'); // Agrega las rutas de libro

// Usa las rutas de géneros, usuarios, copias y libros
router.use( genreRoutes);
router.use( userRoutes);
router.use( copyRoutes);
router.use( bookRoutes); 

module.exports = router;