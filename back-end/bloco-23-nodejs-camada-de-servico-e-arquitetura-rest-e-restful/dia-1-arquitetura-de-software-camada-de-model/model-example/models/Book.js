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

const getBookById = async (id) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE author_id = ?'

  const [books] = await connection.execute(query, [id]);

  if (!books || books.length === 0) {
    return false;
  };

  return books.map(camelCase);
};

module.exports = {
  getAll,
  getBookById,
};