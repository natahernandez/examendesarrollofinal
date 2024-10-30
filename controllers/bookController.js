const { Book, Genre, Copy } = require('../models');

// Crear un nuevo libro
exports.createBook = async (req, res) => {
  try {
    const { title, author, publicationYear, genreId } = req.body;
    const book = await Book.create({ title, author, publicationYear, genreId });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el libro.' });
  }
};

// Obtener todos los libros
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ include: [{ model: Genre, as: 'genre' }, { model: Copy, as: 'copies' }] });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los libros.' });
  }
};

// Obtener un libro por ID
exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id, { include: [{ model: Genre, as: 'genre' }, { model: Copy, as: 'copies' }] });
    if (!book) {
      return res.status(404).json({ error: 'Libro no encontrado.' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el libro.' });
  }
};

// Actualizar un libro
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publicationYear, genreId } = req.body;
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: 'Libro no encontrado.' });
    }
    book.title = title;
    book.author = author;
    book.publicationYear = publicationYear;
    book.genreId = genreId;
    await book.save();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el libro.' });
  }
};

// Eliminar un libro
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: 'Libro no encontrado.' });
    }
    await book.destroy();
    res.status(200).json({ message: 'Libro eliminado.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el libro.' });
  }
};
