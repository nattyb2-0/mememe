import React, {Component} from 'react';
import Post from '../Post/Post.jsx';
import './Board.css';

export default class Board extends Component{
renderAllPosts(){

  return this.props.posts.map((post, i) =>
    <Post
        id={post.postid}
        key={i}
        username={post.username}
        image= {post.body}
        title= {post.title}
        btnid={post.postid}
      />
  )
}


  componentWillMount() {
    this.props.getAllPosts();
}

render(){
      console.log('is this this.props for renderposts???', this.props)
    return(
        <div className="board">
          {this.renderAllPosts()}
        </div>
      );
  }
}

