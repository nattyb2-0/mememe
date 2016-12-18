const db = require('./db.js');

function showAllComments(req, res, next){
  console.log('inside show all comments')
  db.any(`
    SELECT *
    FROM comments;
   `)
    .then((comments) => {
       res.comments = comments;
       console.log(comments);
       next();
    })
    .catch(error => next(error));
}


function createComment (req, res, next){
  console.log('this is the req.body---->',req.body)
  db.none(`
    INSERT INTO comments(postId,  username , body)
    VALUES ($1, $2, $3);`,
    [req.body.postId, req.body.username, req.body.body] )
  .then((comments)=>{
    res.comments= comments;
    next()
  })
 .catch(error => next(error));
}

module.exports = {showAllComments, createComment}

