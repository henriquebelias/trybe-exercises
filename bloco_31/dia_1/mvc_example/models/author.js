const connection = require('./connection');

const createFullName = ({ firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return fullName;
};

const formatAuthorObj = ({ id, firstName, middleName, lastName }) => {
  const fullName = createFullName({ firstName, middleName, lastName });

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getAll = async () => {
  const [authors] = await connection.execute('SELECT * FROM authors;');

  return authors.map(serialize).map(formatAuthorObj);
};

const findById = async (id) => {
  const [authorData] = await connection.execute('SELECT * FROM authors WHERE id = ?', [id]);

  if (!authorData.length) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return formatAuthorObj({ id, firstName, middleName, lastName });
}

const create = async (firstName, middleName, lastName) => {
  if (!isValid(firstName, middleName, lastName)) return false;

  await connection.execute(
    'INSERT INTO mvc_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName],
  );

  return true;
}

module.exports = {
  getAll,
  findById,
  create,
};
