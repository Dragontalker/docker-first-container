import express from 'express';

import connectToDatebase from './helpers';

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hello world!<h2>');
});

await connectToDatebase();

app.listen(3000);

