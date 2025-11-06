const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/reisen-buchungs-app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Datenbank verbunden!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('API läuft!');
});

app.listen(port, () => {
  console.log(`Server läuft auf Port: ${port}`);
});