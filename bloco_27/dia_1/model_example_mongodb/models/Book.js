// const { ObjectId } = require('mongodb');
const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray());
};

const getByAuthorId = async (id) => {
  const books = await connection()
    .then((db) => db.collection('books').find({ author_id: Number(id) }).toArray());

  if (!books) return null;

  return books;
}

const isValid = async (title, authorId) => {
  if (!title || title.length < 3 || typeof title !== 'string') return false;
  if (!authorId || typeof authorId !== 'number') return false;
  return true;
}

const create = async (title, authorId) => connection()
  .then((db) => db.collection('books').insertOne({title, authorId}));


module.exports = {
  getAll,
  getByAuthorId,
  isValid,
  create,
}
