
const { getAll, getAMovie } = require('../models/Movie');

module.exports.getAllMovies = (req, res, next) => {
    getAll()
    .then( (movies) => {
        res.status(200).json(movies);
    })
    .catch( (err) => {
        next(err);
    });
};

module.exports.getAMovie = (req, res, next) => {
    let movieId = req.params.movieId;
    getAMovie(movieId)
    .then( (movie) => {
        res.status(200).json(movie);
    })
    .catch( (err) => {
        next(err);
    });
}