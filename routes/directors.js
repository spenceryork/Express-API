
const { Router } = require('express');
const dirRouter = Router();
const { getDirectors } = require('../controllers/directorCtrl')

// This is a middleware function
dirRouter.get('/directors', getDirectors);

module.exports = dirRouter;