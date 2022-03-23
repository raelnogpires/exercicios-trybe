const connection = require('./connection');

const camelCase = (data) => ({
  id: data.id,
  firstName: data.first_name,
  middleName: data.middle_name,
  lastName: data.last_name,
});

const fullName = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

  return { id, firstName, middleName, lastName, fullName };
};

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  );

  return authors.map(camelCase).map(fullName);
};

const findById = async (id) => {
  const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
  const [author] = await connection.execute(query, [id]);

  if (author.length === 0) return null;

  const { firstName, middleName, lastName } = author.map(camelCase)[0];

  return fullName({
    id,
    firstName,
    middleName,
    lastName,
  });
};

module.exports = {
  getAll,
  findById,
};