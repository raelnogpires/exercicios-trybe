const connection = require('./connection');

const camelCase = (data) => ({
  id: data.id,
  title: data.title,
  authorId: data.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;'
  );

  return books.map(camelCase);
};

const findBookById = async (id) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE id = ?'

  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return false;

  return books.map(camelCase);
};

const isValid = async (title, authorId) => {
  const query = 'SELECT author_id FROM model_example.books';

  const [ids] = await connection.execute(query);

  if (title === '' || title.length < 3) return false;
  if (authorId === '' || !ids.includes(authorId)) return false;

  return true;
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?, ?);',
  [title, authorId],
);

module.exports = {
  getAll,
  findBookById,
  isValid,
  create,
};