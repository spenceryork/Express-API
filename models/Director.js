const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/mediaStore.sqlite');

module.exports.getAll = () => {
    return new Promise( (resolve, reject) => {
        db.all('SELECT * FROM directors', (err, direx) => {
            if (err) reject(err);
            resolve(direx);
        });
    });
};

module.exports.getADirector = (dirId) => {
    return new Promise( (resolve, reject) => {
        // db.get(`SELECT * FROM directors
        // WHERE dir_id = ${dirId}`,
        db.get(`SELECT directors.*, movies.name AS 'movieName'
        FROM directors
        JOIN movies
        ON directors.dir_id = movies.director_id
        WHERE dir_id = ${dirId}`,
        (err, director) => {
            if(err) return reject(err)
            resolve(director);
        });
    });
}