const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Gestión de libros en la biblioteca
 */

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Crear un nuevo libro
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título del libro
 *                 example: "El Principito"
 *               author:
 *                 type: string
 *                 description: Autor del libro
 *                 example: "Antoine de Saint-Exupéry"
 *               publicationYear:
 *                 type: integer
 *                 description: Año de publicación del libro
 *                 example: 1943
 *               genreId:
 *                 type: integer
 *                 description: ID del género del libro
 *                 example: 1
 *     responses:
 *       201:
 *         description: Libro creado exitosamente
 *       500:
 *         description: Error al crear el libro
 */
router.post('/books', bookController.createBook);

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Obtener todos los libros
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Lista de todos los libros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   author:
 *                     type: string
 *                   publicationYear:
 *                     type: integer
 *                   genreId:
 *                     type: integer
 *       500:
 *         description: Error al obtener los libros
 */
router.get('/books', bookController.getAllBooks);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Obtener un libro por ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del libro
 *     responses:
 *       200:
 *         description: Libro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 publicationYear:
 *                   type: integer
 *                 genreId:
 *                   type: integer
 *       404:
 *         description: Libro no encontrado
 *       500:
 *         description: Error al obtener el libro
 */
router.get('/books/:id', bookController.getBookById);

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Actualizar un libro
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del libro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               publicationYear:
 *                 type: integer
 *               genreId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Libro actualizado exitosamente
 *       404:
 *         description: Libro no encontrado
 *       500:
 *         description: Error al actualizar el libro
 */
router.put('/books/:id', bookController.updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Eliminar un libro
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del libro
 *     responses:
 *       200:
 *         description: Libro eliminado exitosamente
 *       404:
 *         description: Libro no encontrado
 *       500:
 *         description: Error al eliminar el libro
 */
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
