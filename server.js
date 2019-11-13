const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.post('/api/test', (req, res) => {
  res.send('test post');
});

app.get('/api/test', (req, res) => {
  res.send('test get');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, error => {
  if (error) throw error;
  console.log('App listening on port', port);
});
