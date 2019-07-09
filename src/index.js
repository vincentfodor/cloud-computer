import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

import config from './config/server';

const app = express();

app.use(bodyParser.json());

app.use(cors(config.corsOptions));

app.get('/download/:file', (req, res) => {
  const file = req.params.file;
  const fileLocation = path.join(__dirname, '/files', file);
  if(fs.existsSync(fileLocation)) {
    res.download(fileLocation, file);
  } else {
    res.send({
      error: true
    })
  }
});

app.get('/file-list', (req, res) => {
  const files = fs.readdirSync(path.join(__dirname, '/files'));

  res.send(files);
})

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});