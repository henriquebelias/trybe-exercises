const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

app.get('/:id', (req, res) => {
  // console.log(req.query);
  // console.log(req.params);
  // console.log(req.body);
  res.status(200).json('Abriu a aplicação')
})

app.get('/ping', (_req, res) => res.status(200).json({message: 'pong'}));

app.listen(3000, () => console.log('Ouvindo na porta 3000'));
