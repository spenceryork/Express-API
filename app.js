
const express = require('express');
require('dotenv').config();
const app = express();
const routes = require('./routes/'); 

console.log("Hello from Express");

// middleware stack starts here

app.use('/api/v1/', routes);




// TODO: ADD ERROR HANDLER

app.use( (req, res, next,) => {
    let err = new Error('Not found, friend');
    err.status = 404;
    next(err);
})

app.use( (err, req, res, next) => {
    res.json({
        "message": "Site not found",
        "err": err.message
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});