require('dotenv').config();
const express = require('express');
const Cep = require('./models/Cep');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.post('/cep', async (req, res) => {

});

app.listen(PORT, () => console.log(`Escutando no port ${PORT}`));
