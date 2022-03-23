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

module.exports = {
  getAll,
};