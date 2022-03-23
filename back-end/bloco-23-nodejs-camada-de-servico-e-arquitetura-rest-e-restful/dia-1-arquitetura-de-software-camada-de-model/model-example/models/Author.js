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

module.exports = {
  getAll,
};