'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.argv[2] || process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log('server is running on', PORT)
})

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
// const userRouter = require('./routes/user');

const {showAllUsers, createNewUser} = require('./models/users.js');
const {showAllBoards, createBoard} = require('./models/boards.js');
const {showAllPosts, createPost} = require('./models/posts.js');
const {showAllComments, createComment} = require('./models/comments.js');
const {getInmateData} = require('./models/inmates.js');
const userRoute = require('./routes/user.js')
app.get('/', userRoute);
app.get('/users', showAllUsers,  (req,res) =>{
  res.json(res.users|| []);
});
app.post('/users', createNewUser , (req,res) =>{
  res.send('you have successfully posted');
});

app.get('/boards', showAllBoards,  (req,res) =>{
  res.json(res.users|| []);
});
app.post('/boards', createBoard, (req,res)=>{
  res.send('you have successfully posted');
})



app.get('/posts', showAllPosts,  (req,res) =>{
  res.json(res.posts|| []);
});

app.post('/posts', createPost, (req,res) =>{
  res.send('you have successfully posted')
})

app.get('/comments', showAllComments, (req,res)=>{
  res.json(res.comments || []);
})

app.post('/comments', createComment, (req,res) =>{
  res.send('you have successfully posted')
})
app.get('/inmates', getInmateData, (req, res)=>{
  res.json(res.inmates || [])
})

const authRoute = require('./routes/auth');
app.get('/auth',authRoute);

if (process.env.NODE_ENV == 'development') require('dotenv').config({ silent: true });
