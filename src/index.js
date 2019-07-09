import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

import config from './config/server';

const app = express();

app.use(bodyParser.json());

app.use(cors(config.corsOptions));

app.get('/download/:file', (req, res) => {
  const file = req.params.file;
  const fileLocation = path.join(__dirname, '/files', file);
  res.download(fileLocation, file);
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});