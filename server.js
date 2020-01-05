const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/v1/home', require('./routes/home.routes'));

app.use('/api/v1/characters', require('./routes/characters.routes'));

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
