const { urlencoded } = require('express');
const express = require('express');

const app = express();

const port = 3000;

// parse json using express

app.use(express.json());
app.use(urlencoded({ extended: false }));

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

// add banks to the list

app.post('/banks', (req, res) => {
  const bank = req.body;
  console.log(bank);
  banks.push(bank);

  res.send('Bank is added to the list');
});

// search for a bank in the list

app.get("/banks/:id", (req, res) => {
  const id  = req.params.id

    for(let bank of banks) {
      if(bank.id === id) {
        res.json(bank)
        console.log(bank)
        return
      }
    }
  res.status(404).send('Bank not found');
});

// set the server to listen to the port

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});