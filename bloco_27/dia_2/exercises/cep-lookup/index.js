require('dotenv').config();
const express = require('express');
const Cep = require('./controllers/Cep');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.get('/cep', Cep.getAll);
app.get('/cep/:cep', Cep.findAddressByCep);

app.listen(PORT, () => console.log(`Escutando no port ${PORT}`));
