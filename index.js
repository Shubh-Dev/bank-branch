const express = require('express');

const app = express();

const port = 3000;

const banks = [
  {
    id: 1,
    name: 'Axis',
  },

  {
    id: 2,
    name: 'Icici',
  },

  {
    id: 3,
    name: 'HDFC',
  },
];

// get the bank list in json format

app.get('/banks', (req, res) => {
  res.json(banks);
});

// set the server to listen to the port

app.listen(port, () => {
  console.log(`Listening at localhost ${port}`);
});