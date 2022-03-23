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

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});