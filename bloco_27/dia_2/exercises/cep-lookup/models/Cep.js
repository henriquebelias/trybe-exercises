const connection = require('./connection');

const formatCep = (cep) => cep.replace(/-/ig, '');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM ceps');

  return result;
};

const findAddressByCep = async (cep) => {
  const formattedCep = formatCep(cep);

  const query = 'SELECT * FROM ceps WHERE cep = ?';

  const [result] = await connection.execute(query, [formattedCep]);

  if (!result) return null;

  return result;
}

const create = async (cep, logradouro, bairro, localidade, uf) => {
  const formattedCep = formatCep(cep);

  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';

  await connection.execute(query, [formattedCep, logradouro, bairro, localidade, uf]);

  return { cep: formattedCep, logradouro, localidade, uf };
};

module.exports = {
  getAll,
  findAddressByCep,
  create,
}

/*
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
*/
