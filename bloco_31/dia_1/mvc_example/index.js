require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const AuthorController = require('./controllers/author');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', path.join( __dirname, 'views'));

app.get('/authors', AuthorController.listAuthors);

app.get('/authors/new', AuthorController.newAuthor);

app.get('/authors/:id', AuthorController.showAuthor);

app.post('/authors', AuthorController.createAuthor);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
