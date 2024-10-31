const { Copy, Book } = require('../models');

// Crear una nueva copia
exports.createCopy = async (req, res) => {
  try {
    const { status, location, bookId } = req.body;
    const copy = await Copy.create({ status, location, bookId });
    res.status(201).json(copy);
  } catch (error) {
    console.error("Error al crear la copia:", error); // Depuración
    res.status(500).json({ error: 'Error al crear la copia.' });
  }
};

// Obtener todas las copias
exports.getAllCopies = async (req, res) => {
  try {
    const copies = await Copy.findAll({ include: [{ model: Book, as: 'book' }] });
    res.status(200).json(copies);
  } catch (error) {
    console.error("Error al obtener las copias:", error);
    res.status(500).json({ error: 'Error al obtener las copias.' });
  }
};

exports.getCopyByBookId = async (req, res) => {
  try {
    const { id } = req.params;
    const copies = await Copy.findAll({ where: { bookId: id }, include: [{ model: Book, as: 'book' }] });
    if (!copies) {
      return res.status(404).json({ error: 'Copias no encontradas.' });
    }
    res.status(200).json(copies);
  } catch (error) {
    console.error("Error al obtener las copias:", error);
    res.status(500).json({ error: 'Error al obtener las copias.' });
  }
};

// Obtener una copia por ID
exports.getCopyById = async (req, res) => {
  try {
    const { id } = req.params;
    const copy = await Copy.findByPk(id, { include: [{ model: Book, as: 'book' }] });
    if (!copy) {
      return res.status(404).json({ error: 'Copia no encontrada.' });
    }
    res.status(200).json(copy);
  } catch (error) {
    console.error("Error al obtener la copia:", error);
    res.status(500).json({ error: 'Error al obtener la copia.' });
  }
};

// Actualizar una copia
exports.updateCopy = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, location, bookId } = req.body;
    const copy = await Copy.findByPk(id);
    if (!copy) {
      return res.status(404).json({ error: 'Copia no encontrada.' });
    }
    copy.status = status;
    copy.location = location;
    copy.bookId = bookId;
    await copy.save();
    res.status(200).json(copy);
  } catch (error) {
    console.error("Error al actualizar la copia:", error);
    res.status(500).json({ error: 'Error al actualizar la copia.' });
  }
};

// Eliminar una copia
exports.deleteCopy = async (req, res) => {
  try {
    const { id } = req.params;
    const copy = await Copy.findByPk(id);
    if (!copy) {
      return res.status(404).json({ error: 'Copia no encontrada.' });
    }
    await copy.destroy();
    res.status(200).json({ message: 'Copia eliminada.' });
  } catch (error) {
    console.error("Error al eliminar la copia:", error);
    res.status(500).json({ error: 'Error al eliminar la copia.' });
  }
};
