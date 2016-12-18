const db = require('../db/db.js');

function showAllBoards(req, res, next){
  console.log('in this bitch')
  db.any(`
    SELECT *
    FROM boards;
   `)
    .then((users) => {
       res.users = users;
       console.log(users);
       next();
    })
    .catch(error => next(error));
}


function showBoardsByInmateName(req, res, next){
  db.any(`
    SELECT *
    FROM boards WHERE inmatename=${req.query.params};
   `)
    .then((users) => {
       res.users = users;
       console.log(users);
       next();
    })
    .catch(error => next(error));
}

function showBoardsByInmateNumber(req, res, next){
  db.any(`
    SELECT *
    FROM boards WHERE statenumber=${req.query.params};
   `)
    .then((users) => {
       res.users = users;
       console.log(users);
       next();
    })
    .catch(error => next(error));
}

function showBoardsByInmateNickname(req, res, next){
  db.any(`
    SELECT *
    FROM boards WHERE nickname=${req.query.params};
   `)
    .then((users) => {
       res.users = users;
       console.log(users);
       next();
    })
    .catch(error => next(error));
}

function showBoardsByInstitution(req, res, next){
  db.any(`
    SELECT *
    FROM boards WHERE institution=${req.query.params};
   `)
    .then((users) => {
       res.users = users;
       console.log(users);
       next();
    })
    .catch(error => next(error));
}

function showBoardsByInmatePics(req, res, next){
  db.any(`
    SELECT *
    FROM boards WHERE image=${req.query.params};
   `)
    .then((users) => {
       res.users = users;
       console.log(users);
       next();
    })
    .catch(error => next(error));
}




function createBoard (req, res, next){
  console.log(req.body)
  db.none(`
    INSERT INTO boards(inmatename, statenumber, nickname, institution, image )
    VALUES ($1, $2, $3, $4, $5);`,
    [req.body.inmatename, req.body.statenumber, req.body.nickname, req.body.institution, req.body.image])
  .then((boards)=>{
    res.boards= boards;
    next()
  })
 .catch(error => next(error));
}


module.exports = {showAllBoards, createBoard}

