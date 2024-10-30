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
 *     summary: Crear una nueva copia de un libro
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
 *                 description: Estado de la copia (ej. disponible, prestado)
 *                 example: disponible
 *               location:
 *                 type: string
 *                 description: Ubicación de la copia en la biblioteca
 *                 example: Estante A3
 *               bookId:
 *                 type: integer
 *                 description: ID del libro asociado
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
 *     summary: Obtener todas las copias de libros
 *     tags: [Copies]
 *     responses:
 *       200:
 *         description: Lista de todas las copias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   status:
 *                     type: string
 *                   location:
 *                     type: string
 *                   bookId:
 *                     type: integer
 *                   book:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *       500:
 *         description: Error al obtener las copias
 */
router.get('/copies', copyController.getAllCopies);

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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 status:
 *                   type: string
 *                 location:
 *                   type: string
 *                 bookId:
 *                   type: integer
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
