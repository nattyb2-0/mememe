import React, { Component } from 'react';
import './Post.css';
import CommentContainer from '../Comments/CommentsContainer.jsx'
import LikesContainer from '../Likes/LikesContainer.jsx'
import NewComment  from '../Forms/NewComment.jsx'
import NewLike from '../Forms/NewLike.jsx'

export default class Post extends Component{
    constructor(){
    super();

    this.state={
      comments: [],
      likes: [],
    }
  }

componentDidMount(){
  this.getAllComments();
}
    getAllComments() {
      console.log('inside get all comments')
      fetch(`/comments`)
      .then(r => r.json())
      .then((data) => {
        console.log('this is the comments data', data)
        this.setState({
          comments: data
          })
        .then(this.forceUpdate())
        console.log('this is the updated state of comments',this.state.comments)
        })
      .catch(err => console.log('*********', err))
    }

    addComment(comment){
    fetch('/comments', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(comment)
  })
  .catch(err => console.log(err));
  }


  render(){
    return(
      <div className="post">
          <header className="pheader">
            <div className="flexCol">
            <h3>{this.props.username}</h3>
            </div>
            <img src="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Push-Pin--Right-Pink.png" alt="" className="pin"/>
            <h1 className="headerName">{this.props.title}</h1>
          </header>
          <main className="postBody">
            <section className="postpicSec">
              <img src={this.props.image} alt="" className="postpic"/>
            </section>
            <hr></hr>
            <section className="comm-likes">
              <CommentContainer getAllComments={this.getAllComments.bind(this)} comments={this.state.comments}/>
              <LikesContainer   />

            </section>
          </main>
          <hr></hr>
          <footer className="footer">
                <NewLike btnid={this.props.btnid}/>
             <div>
               <NewComment btnid={this.props.btnid} addComment={this.addComment}/>
             </div>
            <div className="subDel">
             <input type="text('some text')" className="delete-flag"/>

            </div>
           </footer>
        </div>

      )
  }
}












// const Post = props => (

//         <div className="post">
//           <header className="pheader">
//             <div className="flexCol">
//             <h3>{props.username}</h3>
//             </div>
//             <img src="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Push-Pin--Right-Pink.png" alt="" className="pin"/>
//             <h1 className="headerName">{props.title}</h1>
//           </header>
//           <main className="postBody">
//             <section className="postpicSec">
//               <img src={props.image} alt="" className="postpic"/>
//             </section>
//             <hr></hr>
//             <section className="comm-likes">
//               <CommentContainer />
//               <LikesContainer   />

//             </section>
//           </main>
//           <hr></hr>
//           <footer className="footer">
//             <NewLike btnid={props.btnid}/>
//             <div>
//               <NewComment btnid={props.btnid}/>
//             </div>
//             <div className="subDel">
//             <input type="text('some text')" className="delete-flag"/>

//             </div>
//           </footer>
//         </div>
//       );

// export default Post;



