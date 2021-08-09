const AuthorModel = require('../models/author');

const listAuthors = async (_req, res) => {
  const authors = await AuthorModel.getAll();

  return res.status(200).render('authors/index', { authors });
};

const showAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await AuthorModel.findById(id);

  if (!author) return res.status(404).render('404');

  return res.status(200).render('authors/show', { author });
};

const newAuthor = (_req, res) => {
  return res.render('authors/new', { message: null });
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const created = await AuthorModel.create(first_name, middle_name, last_name);

  if (!created) return res.render('authors/new', { message: 'Dados inválidos' });

  return res.redirect('authors');
};

module.exports = {
  listAuthors,
  showAuthor,
  newAuthor,
  createAuthor,
};
