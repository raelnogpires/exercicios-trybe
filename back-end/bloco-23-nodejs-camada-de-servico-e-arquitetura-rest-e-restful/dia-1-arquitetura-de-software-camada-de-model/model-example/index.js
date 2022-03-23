const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

const PORT = 3000;
const HTTP_OK = 200;

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(HTTP_OK).json(authors);
});

app.get('/books', async (_req,res) => {
  const books = await Book.getAll();

  res.status(HTTP_OK).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const books = await Book.getBookById(id);

  if (!books) {
    return res.status(404).json({ message: 'Not found :(' });
  }

  res.status(200).send(books);
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});