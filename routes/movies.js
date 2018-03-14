
const { Router} = require('express');
const movieRouter = Router();

const { getAllMovies, getAMovie } = require('../controllers/movieCtrl');

movieRouter.get('/movies', getAllMovies);
movieRouter.get('/movies/:movieId', getAMovie);

module.exports = movieRouter;