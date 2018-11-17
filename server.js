const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const rickAndMortyService = require('./services/rickAndMortyService');

app.get('/api/rickandmorty', (req, res,next) => {
  rickAndMortyService.characters()
    .then(data => res.status(200).json(data))
    .catch(error => next(error));
});

app.listen(port, () => console.log(`Listening on port ${port}`));