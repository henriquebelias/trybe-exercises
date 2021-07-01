const connection = require('./connection');

const CEP_REGEX = /\d{5}-\d{3}/;

const getAll = async () => {
  const result = await connection.execute('SELECT * FROM ceps');

  return result[0];
}

const insertCep = async (cep, logradouro, bairro, localidade, uf) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';

  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  return { cep, logradouro, localidade, uf };
}

module.exports = {
  getAll,
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
