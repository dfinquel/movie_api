/*Below, imported Express locally.*/
const express = require('express');

/*Below, imported morgan locally.*/
const morgan = require('morgan');

/*Below, declared the variable "app" to encapsulate Express’s functionality.*/
const app = express();


/*Below, passed morgan into the app.use function, specifying that requests should be logged using Morgan’s “common” format.*/
app.use(morgan('common'));

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

/*Below, added function to listen for requests on port 8080.*/
app.listen(8080, () => {
    console.log('The myFlix app is listening on port 8080.');
});