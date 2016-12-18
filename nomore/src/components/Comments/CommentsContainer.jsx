import React, {Component} from 'react';
import Comment from './Comment.jsx';

export default class CommentsContainer extends Component {

  renderAllComments(){
    return this.props.comments.map((comment, i)=>
      <Comment
        id={comment.commentid}
        key={i}
        body={comment.body}
        postid={comment.postid}
        />
    )
  }
//   componentDidMount() {
//     this.props.getAllComments();
// }
  componentWillMount() {
    this.props.getAllComments();
}
  render(){
    console.log('bitch i got you cornered', this.props)
    return(
        <div className="comments">
          {this.renderAllComments()}
        </div>
      );
  }
}

// import React, {Component} from 'react';
// import Comment from '../Comments/Comment.jsx'

// export default class CommentsContainer extends Component {
//   renderAllComments(){
//   return this.props.comments.map((comment, i) =>
//       <Comment
//         id={comment.postid}
//         key={i}
//         comment={comment.body}

//         />


//     )
// }
// componentWillMount(){
//   this.props.getAllComments
// }
//   render(){
//     console.log(this.props)
//     return(
//         <div className="comments">
//           {this.renderAllComments()}
//         </div>
//       );
//   }
// }

