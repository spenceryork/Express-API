
const { Router } = require('express');
const dirRouter = Router();
const { getDirectors, getADirector } = require('../controllers/directorCtrl')

// This is a middleware function
dirRouter.get('/directors', getDirectors);
dirRouter.get('/directors/:dirId', getADirector);


module.exports = dirRouter;