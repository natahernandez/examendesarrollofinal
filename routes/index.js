const express = require('express');
const router = express.Router();
const genreRoutes = require('./genreRoutes');
const userRoutes = require('./userRoutes');
const copyRoutes = require('./copyRoutes');
const bookRoutes = require('./bookRoutes'); // Agrega las rutas de libro

// Usa las rutas de géneros, usuarios, copias y libros
router.use('/api', genreRoutes);
router.use('/api', userRoutes);
router.use('/api', copyRoutes);
router.use('/api', bookRoutes); 

module.exports = router;

