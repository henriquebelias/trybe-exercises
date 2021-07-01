const express = require('express');
const bodyParser = require('body-parser');
const { getAll, findById, create } = require('./controllers/Author');
const errorMiddleware = require('./middlewares/error');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.get('/authors', getAll);
app.get('/authors/:id', findById);
app.post('/authors', create);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
