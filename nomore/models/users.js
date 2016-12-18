const db = require('../db/db.js');

function showAllUsers(req, res, next){
  db.any(`
    SELECT *
    FROM users;
   `)
    .then((users) => {
      res.users = users;
      console.log(users);
      next();
    })
    .catch(error => next(error));
}

function createNewUser(req, res, next){
  console.log(req.body)
  console.log('inside back end')
  db.none(`
  INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`,
  [req.body.username, req.body.email, req.body.password])
  .then((users) => {
    res.users = users;
    next();
  })
  .catch(error => next(error));
}



module.exports = {showAllUsers,createNewUser}
