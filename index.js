const express = require('express');
const app = express();

/*Below, created an Express GET route located at the endpoint “/movies” that returns a JSON object containing data about topMovies.*/
app.get('/movies', (req, res) => {
    res.json(topMovies);
  });