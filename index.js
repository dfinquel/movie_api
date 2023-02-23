const express = require('express');
const app = express();

/*Below, used express.static to serve the “documentation.html” file from the public folder.*/
app.use(express.static('public'));

/*Below, created an Express GET route located at the endpoint “/” that returns a textual response.*/
app.get('/', (req, res) => {
    res.send('Welcome to myFlix!');
  });

/*Below, created an Express GET route located at the endpoint “/movies” that returns a JSON object containing data about topMovies.*/
app.get('/movies', (req, res) => {
    res.json(topMovies);
  });