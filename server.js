const express = require('express');
const app = express();

app.get('/api/listItems', (req, res) => {
  const listItems = [
    {id: 1, title: 'Buy Groceries'},
    {id: 2, title: 'Clean bathroom'},
    {id: 3, title: 'Exercise'},
    {id: 4, title: 'Call doctor'},
    {id: 5, title: 'Pack shop orders'},
    {id: 6, title: 'This is a very long to do item, it is really quite long'},
    {id: 7, title: 'Another task'},
  ];
  res.json(listItems);
})

const port = 5000;

app.listen(port, () => console.log('Server started on port 5000'));
