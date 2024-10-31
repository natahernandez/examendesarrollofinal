const express = require('express');
const router = express.Router();
const copyController = require('../controllers/copyController');

/**
 * @swagger
 * tags:
 *   name: Copies
 *   description: Gestión de copias de libros
 */

/**
 * @swagger
 * /api/copies:
 *   post:
 *     summary: Crear una nueva copia
 *     tags: [Copies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Estado de la copia
 *                 example: "disponible"
 *               location:
 *                 type: string
 *                 description: Ubicación de la copia en la biblioteca
 *                 example: "Estante A"
 *               bookId:
 *                 type: integer
 *                 description: ID del libro al que pertenece la copia
 *                 example: 1
 *     responses:
 *       201:
 *         description: Copia creada exitosamente
 *       500:
 *         description: Error al crear la copia
 */
router.post('/copies', copyController.createCopy);

/**
 * @swagger
 * /api/copies:
 *   get:
 *     summary: Obtener todas las copias
 *     tags: [Copies]
 *     responses:
 *       200:
 *         description: Lista de todas las copias
 *       500:
 *         description: Error al obtener las copias
 */
router.get('/copies', copyController.getAllCopies);

/**
 * @swagger
 * /api/copies/book/{id}:
 *   get:
 *     summary: Obtener copias por ID del libro
 *     tags: [Copies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del libro
 *     responses:
 *       200:
 *         description: Lista de copias del libro especificado
 *       404:
 *         description: Copias no encontradas
 *       500:
 *         description: Error al obtener las copias
 */
router.get('/copies/book/:id', copyController.getCopyByBookId);

/**
 * @swagger
 * /api/copies/{id}:
 *   get:
 *     summary: Obtener una copia por ID
 *     tags: [Copies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la copia
 *     responses:
 *       200:
 *         description: Copia encontrada
 *       404:
 *         description: Copia no encontrada
 *       500:
 *         description: Error al obtener la copia
 */
router.get('/copies/:id', copyController.getCopyById);

/**
 * @swagger
 * /api/copies/{id}:
 *   put:
 *     summary: Actualizar una copia
 *     tags: [Copies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la copia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *               location:
 *                 type: string
 *               bookId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Copia actualizada exitosamente
 *       404:
 *         description: Copia no encontrada
 *       500:
 *         description: Error al actualizar la copia
 */
router.put('/copies/:id', copyController.updateCopy);

/**
 * @swagger
 * /api/copies/{id}:
 *   delete:
 *     summary: Eliminar una copia
 *     tags: [Copies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la copia
 *     responses:
 *       200:
 *         description: Copia eliminada exitosamente
 *       404:
 *         description: Copia no encontrada
 *       500:
 *         description: Error al eliminar la copia
 */
router.delete('/copies/:id', copyController.deleteCopy);

module.exports = router;
