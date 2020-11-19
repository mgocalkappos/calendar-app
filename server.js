const express = require('express');
const app = express();

app.get('/api/listItems', (req, res) => {
  const listItems = [
    {id: 1, title: 'Buy Groceries'},
    {id: 2, title: 'Clean bathroom'},
    {id: 3, title: 'Exercise'},
    {id: 4, title: 'Call doctor'},
    {id: 5, title: 'Pack shop orders'},
  ];
  res.json(listItems);
})

const port = 5000;

app.listen(port, () => console.log('Server started on port 5000'));
