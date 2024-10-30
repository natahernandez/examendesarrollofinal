const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

/**
 * @swagger
 * tags:
 *   name: Genres
 *   description: Gestión de géneros literarios
 */

/**
 * @swagger
 * /api/genres:
 *   post:
 *     summary: Crear un nuevo género
 *     tags: [Genres]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del género
 *                 example: Ciencia Ficción
 *               description:
 *                 type: string
 *                 description: Descripción del género
 *                 example: Género de ciencia ficción y fantasía
 *     responses:
 *       201:
 *         description: Género creado exitosamente
 *       500:
 *         description: Error al crear el género
 */
router.post('/genres', genreController.createGenre);

/**
 * @swagger
 * /api/genres:
 *   get:
 *     summary: Obtener todos los géneros
 *     tags: [Genres]
 *     responses:
 *       200:
 *         description: Lista de géneros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *       500:
 *         description: Error al obtener los géneros
 */
router.get('/genres', genreController.getAllGenres);

/**
 * @swagger
 * /api/genres/{id}:
 *   get:
 *     summary: Obtener un género por ID
 *     tags: [Genres]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del género
 *     responses:
 *       200:
 *         description: Género encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *       404:
 *         description: Género no encontrado
 *       500:
 *         description: Error al obtener el género
 */
router.get('/genres/:id', genreController.getGenreById);

/**
 * @swagger
 * /api/genres/{id}:
 *   put:
 *     summary: Actualizar un género
 *     tags: [Genres]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del género
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Género actualizado exitosamente
 *       404:
 *         description: Género no encontrado
 *       500:
 *         description: Error al actualizar el género
 */
router.put('/genres/:id', genreController.updateGenre);

/**
 * @swagger
 * /api/genres/{id}:
 *   delete:
 *     summary: Eliminar un género
 *     tags: [Genres]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del género
 *     responses:
 *       200:
 *         description: Género eliminado exitosamente
 *       404:
 *         description: Género no encontrado
 *       500:
 *         description: Error al eliminar el género
 */
router.delete('/genres/:id', genreController.deleteGenre);

module.exports = router;
