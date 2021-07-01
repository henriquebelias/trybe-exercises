const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  const [books] = await connection.execute('SELECT title FROM model_example.books;')
  return books;
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    'SELECT title FROM model_example.books WHERE author_id = ?',
    [id],
  );

  if (!books) return null;

  return books;
}

const isValid = async (title, authorId) => {
  if (!title || title.length < 3 || typeof title !== 'string') return false;
  if (!authorId || typeof authorId !== 'number' || !(!(await Author.findById(authorId)))) return false;
  return true;
}

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
  [title, authorId],
);

module.exports = {
  getAll,
  getByAuthorId,
  isValid,
  create,
}
