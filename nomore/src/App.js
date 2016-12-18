import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing.jsx'
import NewBoard from './components/Forms/NewBoard.jsx'
import Post from './components/Post/Post.jsx';
import NewPost from './components/Forms/NewPost.jsx';
import Signup  from './components/Forms/Signup.jsx';
import Board from './components/Board/Board.jsx'


// this.state.posts === [
//   {
//     title: 'ihgsisdh',
//     body: 'shgoushgosg',
//     post_id: '4',
//     comments: [
//       {
//         text: 'igsiuhsdiuhsdvoshfohis',
//         user_id: '82',
//       },
//       {
//         text: 'wouerhoawoihrarf',
//         user_id: '83',
//       }
//     ]
//   },
//   {
//     title: 'sifugakd',
//     body: 'ouaweyob,xzc',
//     post_id: '5',
//     comments: [
//       {
//         text: 'kjAEKj',
//         user_id: '20',
//       },
//       {
//         text: 'kajsnflnm ',
//         user_id: '53',
//       }
//     ]
//   },
// ]

// this.state.posts.map((post, i) =>
//   <div>
//     <Post
//       title={post.title}
//       comments={post.comments}
//     />
//     <Comments
//       comments={post.comments}
//     />
//   </div>
// )

class App extends Component {
  constructor(){
    super();
    this.addBoard = this.addBoard.bind(this);
    this.state={
      boards: [],
      posts: [],
      user: [],
      // comment: ''
    }
  }

  getAllPosts() {
      console.log('inside get all posts')
      fetch(`/posts`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          posts: data
          })
        console.log('this is the updated state of posts', this.state.posts)
        })
      .catch(err => console.log(err))
    }

getAllBoards(){
console.log('inside of getAllBoards APPjsx ')
  fetch('/boards')
  //data is returned in the form of json
    .then(data => data.json())
    .then(data => {
       console.log(data);
       console.log('inside fetch')
      // the state of the question array is updated and passed the value thats held in the
      // data object
      // console.log('this inside of getAllQuestions: ', this);
      this.setState({
        boards: data
      });
      // console.log('the true values of state --> ', this.state);
    })
     // .then(this.getAllQuestions())
    .catch(err => console.log(err));
}




  addBoard(board){
    //add new board
console.log('this is inside set state', board)
    //set state
    let allBoards = this.state.boards;
    allBoards.push(board);
    this.setState({boards:allBoards});
    console.log('lets see the state',this.state.boards);

    fetch('/boards', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(board)
  })
  .catch(err => console.log(err));
  }


  addUser(user){

    fetch('/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(user)
  })
  .catch(err => console.log(err));
  }

  addPost(post){
    fetch('/posts', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(post)

  })
    .then (this.getAllPosts())
  .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <Landing />
        <div className="flexR">
          <div className="divideSidel">
            <div className="flexC">
              <Signup addUser={this.addUser}/>
            </div>
          </div>
          <div className="mainSide">
           <Board  getAllPosts={this.getAllPosts.bind(this)} posts={this.state.posts}  />
          </div>
          <div className="divideSideR">
            <div className="flexC">
            <NewBoard addBoard={this.addBoard}/>
            <NewPost addPost={this.addPost}/>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
