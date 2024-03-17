const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const {v4: uuid} =require('uuid');

const app = express();
const port = 3001;
const jsonParser = bodyParser.json()


app.use(cors())


const users = [
  {
    id: 1,
    name: 'Mike'
  }, 
  {
    id: 2,
    name: 'Jane'
  }
]

  const expenses = [
    {
      id: 1,
      userId: 1,
      name: 'Coffee',
      vendor: 'Java the Hut',
      value: 3.99
    },
    {
      id: 2,
      userId: 1,
      name: 'Train Ticket',
      vendor: 'Scotrail',
      value: 35.20
    },
    {
      id: 3,
      userId: 2,
      name: 'Lunch',
      vendor: 'Six Guys',
      value: 29.30
    }
  ]

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/user_expenses/:id', (req, res) => {
  const userId =  req.params.id

  console.log({expenses, userId})

  res.send(expenses.filter(a => a.userId === Number(userId)))
});

app.post('/expense',jsonParser, (req, res) => {
  const { 
    newValue: value, 
    newExpense: name, 
    newVendor: vendor,
    userId
  } = req.body

  expenses.push({
    name,
    vendor,
    id: uuid(),
    value: Number(value),
    userId: Number(userId)
  })
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:3001`);
});


