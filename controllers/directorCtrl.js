
const { getAll, getADirector } = require('../models/Director');

module.exports.getDirectors = (req, res, next) => {
    getAll()
    .then( (direx) => {
        res.status(200).json(direx);
    })
    .catch( (err) => next(err));
};

module.exports.getADirector = (req, res, next) => {
    let dirId = req.params.dirId;
    getADirector(dirId)
    .then( (director) => {
        res.status(200).json(director);
    })
    .catch( (err) => {
        next(err);
    });
}