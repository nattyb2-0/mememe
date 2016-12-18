const db = require('./db.js');

function getInmateData(req, res, next){

  db.any(`
    SELECT inmatename, statenumber, nickname, institution, image
    FROM boards;
   `)
    .then((data) => {
       res.inmates = data;

       next();
    })
    .catch(error => next(error));
}

module.exports = {getInmateData}
