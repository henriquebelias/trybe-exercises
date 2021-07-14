require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const checkFile = (fileName) => {
  const files = fs.readdirSync(path.join(__dirname, '/uploads'));

  return files.some((file) => file === fileName);
};

const fileFilter = (req, file, callback) => {
  if (file.mimetype !== 'image/png') {
    req.fileTypeError = true;

    return callback(null, false);
  }

  if (checkFile(file.originalname)) {
    req.fileExistsError = true;

    return callback(null, false);
  }

  callback(null, true);
};

const upload = multer({ storage, fileFilter });

const uploadFiles = multer({ dest: 'uploads' });

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/uploads')));

app.get('/ping', controllers.ping);

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);

  if (req.fileTypeError) {
    return res.status(403).json({ error: { message: 'Extension must be \'png\'' } });
  }

  if (req.fileExistsError) {
    return res.status(409).json({ error: { mesage: 'File already exists' } });
  }

  return res.status(200).json({ message: 'File uploaded' });
});

app.post('/multipe', uploadFiles.array('files'), (req, res) => {
  const uploadedFiles = req.files.map((file) => ({
    file: file.originalname,
    url: `http://localhost:${PORT}/${file.filename}`,
  }));

  return res.status(200).json(uploadedFiles);
});

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

/*
file
{
  fieldname: 'file',
  originalname: 'lake.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: './uploads',
  filename: '1626214964268-lake.jpg',
  path: 'uploads/1626214964268-lake.jpg',
  size: 278910
}
*/
