require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const userModel = require('./models/userModel');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/user', rescue(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = await userModel.create(firstName, lastName, email, password);

  if (newUser.error) return res.status(400).json(newUser);

  return res.status(201).json(newUser);
}));

app.get('/user', rescue(async (_req, res) => {
  const users = await userModel.getAll();

  return res.status(200).json(users);
}));

app.get('/user/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id)

  if (!user) return res.status(404).json({ error: true, message: 'Usuário não encontrado' });

  return res.status(200).json(user);
}));

app.put('/user/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const editedUser = await userModel.editById(id, req.body);

  if (!editedUser) return res.status(404).json({ error: true, message: 'Usuário não encontrado' });

  if (editedUser.error) return res.status(400).json(editedUser);

  return res.status(200).json(editedUser);
}));

app.delete('/user/:id', rescue(async (req, res) => {
  const { id } = req.params;

  await userModel.deleteById(id);

  return res.status(200).json({ message: 'Usuário deletado com sucesso' });
}))

app.listen(PORT, console.log(`Escutando na porta ${PORT}`));
