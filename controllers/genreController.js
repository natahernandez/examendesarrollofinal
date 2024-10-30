const { Genre } = require('../models');

// Crear un nuevo género
exports.createGenre = async (req, res) => {
  try {
    const { name, description } = req.body;
    const genre = await Genre.create({ name, description });
    res.status(201).json(genre);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el género.' });
  }
};

// Obtener todos los géneros
exports.getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los géneros.' });
  }
};

// Obtener un género por ID
exports.getGenreById = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await Genre.findByPk(id);
    if (!genre) {
      return res.status(404).json({ error: 'Género no encontrado.' });
    }
    res.status(200).json(genre);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el género.' });
  }
};

// Actualizar un género
exports.updateGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const genre = await Genre.findByPk(id);
    if (!genre) {
      return res.status(404).json({ error: 'Género no encontrado.' });
    }
    genre.name = name;
    genre.description = description;
    await genre.save();
    res.status(200).json(genre);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el género.' });
  }
};

// Eliminar un género
exports.deleteGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await Genre.findByPk(id);
    if (!genre) {
      return res.status(404).json({ error: 'Género no encontrado.' });
    }
    await genre.destroy();
    res.status(200).json({ message: 'Género eliminado.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el género.' });
  }
};
