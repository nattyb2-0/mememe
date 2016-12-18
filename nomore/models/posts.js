//adding comment
const db = require('./db.js');

function showAllPosts(req, res, next){
  db.any(`
    SELECT *
    FROM posts;
   `)
    .then((posts) => {
      res.posts = posts;
      console.log(posts);
      next();
    })
    .catch(error => next(error));
}

// function showAllPosts(req,res,next){
//   db.any(`SELECT posts.postId, posts.title, posts.body, comments.body
// FROM posts
// LEFT JOIN comments
// ON posts.postId = comments.postId
// ;
// `)
//   .then((posts) => {
//       res.posts = posts;
//       console.log(posts);
//       next();
//     })
//     .catch(error => next(error));
// }



function createPost(req, res, next){

  let user = {id:1,name:"aa",password:"kine"}
  console.log(user)
  console.log(req.body)
  db.none(`
    INSERT INTO posts(user_id,title, body )
    VALUES ($1, $2, $3);`,
    [user.id, req.body.title, req.body.photo])
  .then((posts)=>{
    res.posts= posts;
    next()
  })
 .catch(error => next(error));
}

module.exports = {showAllPosts,createPost}

