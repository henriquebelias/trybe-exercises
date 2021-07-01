const connection = require('./connection');
const { ObjectId } = require('mongodb');

const formatData = (data) => {
  const { _id, password, ...userData } = data;

  return {
    id: _id,
    ...userData,
  }
};

const containError = (firstName, lastName, email, password) => {
  if (!firstName) return { error: true, message: 'O campo firstName é obrigatório'};
  if (typeof firstName !== 'string') return { error: true, message: 'firstName deve ser uma string' }
  if (!lastName) return { error: true, message: 'O campo lastName é obrigatório'};
  if (typeof lastName !== 'string') return { error: true, message: 'lastName deve ser uma string'}
  if (!email) return { error: true, message: 'O campo email é obrigatório'};
  if (typeof email !== 'string') return { error: true, message: 'email deve ser uma string' }
  if (!password) return { error: true, message: 'O campo password é obrigatório'};
  if(typeof password !== 'string') return { error: true, message: 'password deve ser uma string' }
  if (password.length < 6) return { error: true, message: 'O tamanho de password deve ser maior que 6 caracteres' }
  return { error: false };
}

const create = async (firstName, lastName, email, password) => {
  const errorObj = containError(firstName, lastName, email, password);
  if (errorObj.error) return {...errorObj};

  const newUser = await connection()
    .then((db) => db.collection('user').insertOne({ firstName, lastName, email, password }))
    .then((response) => response.ops);

  return newUser.map(formatData);
};

const getAll = () => connection()
  .then((db) => db.collection('user').find().toArray())
  .then((response) => response.map(formatData));

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return connection()
    .then((db) => db.collection('user').find({_id: new ObjectId(id)}).toArray())
    .then((response) => response.map(formatData));
}

const editById = async (id, data) => {
  if (!ObjectId.isValid(id)) return null;
  const { firstName, lastName, email, password } = data;
  const errorObj = containError(firstName, lastName, email, password);
  if (errorObj.error) return {...errorObj};

  await connection()
    .then((db) => db.collection('user').updateOne({ _id: new ObjectId(id) }, { $set: { firstName, lastName, email, password } }));

  return { id, firstName, lastName, email };
};

const deleteById = (id) => connection().then((db) => db.collection('user').deleteOne({ _id: new ObjectId(id) }));

module.exports = {
  create,
  getAll,
  findById,
  editById,
  deleteById,
}

/*
Requisição:
{
  "firstName": "Calebe",
  "lastName": "Junior",
  "email": "calebe.junior@gmail.com",
  "password": "d496d5ea2442"
}

Resposta:
{
  "id": "1837983326d5cd7ad6da5707a2bd11c5",
  "firstName": "Calebe",
  "lastName": "Junior",
  "email": "calebe.junior@gmail.com"
}
*/
