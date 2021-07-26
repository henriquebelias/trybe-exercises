const express = require('express');
const bodyParser = require('body-parser');
const plantsModule = require('./plants');

const app = express();

app.use(bodyParser.json());

app.get('/plants', (_req, res) => {
  const plants = plantsModule.getPlants();

  res.json(plants);
});

app.get('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.getPlantById(id);

  res.json(plant);
});

app.delete('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.removePlantById(id);

  res.json(plant);
});

app.put('/plant/:id', (req, res) => {
  const { id } = req.params;
  const newPlant = req.body.plant;
  const plant = plantsModule.editPlant(id, newPlant);

  res.json(plant);
});

app.post('/plant', (req, res) => {
  const newPlant = req.body.plant;
  const plant = plantsModule.createNewPlant(newPlant);

  res.json(plant);
});

app.get('/sunny/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.getPlantsThatNeedsSunWithId(id);

  res.json(plant);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening in port ${PORT}`));
