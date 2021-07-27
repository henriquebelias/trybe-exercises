const express = require('express');
const bodyParser = require('body-parser');

const { Book } = require('./models');

const app = express();

app.use(bodyParser.json());

app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = Book.findByPk(id);

    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/book', async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const book = await Book.create({ title, author, pageQuantity });

    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/book/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } = req.params;
    const updatedBook = Book.update({ title, author, pageQuantity }, { where: { id } });

    res.status(200).json(updatedBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.delete('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.destroy({ where: { id } });

    res.status(200).json(deletedBook)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
