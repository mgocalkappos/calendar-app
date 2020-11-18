const express = require('express');
const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Mary', lastName: 'Swanson'},
    {id: 3, firstName: 'Steve', lastName: 'Smith'},
  ];
  res.json(customers);
});

app.get('/api/listItems', (req, res) => {
  const listItems = [
    {id: 1, title: 'Buy Groceries'},
    {id: 2, title: 'Clean bathroom'},
    {id: 3, title: 'Exercise'},
  ];
  res.json(listItems);
})

const port = 5000;

app.listen(port, () => console.log('Server started on port 5000'));
