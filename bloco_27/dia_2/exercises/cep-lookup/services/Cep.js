const CepModel = require('../models/Cep');

const CEP_REGEX = /\d{5}-\d{3}/;

const validateCep = (cep) => {
  if (CEP_REGEX.test(cep)) return cep;

  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const formatResponse = (cep, logradouro, bairro, localidade, uf) => {
  return {
    cep: validateCep(cep),
    logradouro,
    bairro,
    localidade,
    uf
  }
};

const getAll = async () => {
  const response = await CepModel.getAll();

  return response;
};

const findAddressByCep = (cep) => {
  const { logradouro, bairro, localidade, uf } = await CepModel.findAddressByCep(cep);

  return formatResponse(cep, logradouro, bairro, localidade, uf)
}

const create = async (cep, logradouro, bairro, localidade, uf) => {
  const response = await CepModel.create(cep, logradouro, bairro, localidade, uf);

  return response;
}

module.exports = {
  getAll,
  findAddressByCep,
  create,
}
