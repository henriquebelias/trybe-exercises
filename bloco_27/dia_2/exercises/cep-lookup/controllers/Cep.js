const CepService = require('../services/Cep');

const getAll = async (_req, res) => res.status(200).json(await CepService.getAll());

module.exports = {
  getAll,
}
