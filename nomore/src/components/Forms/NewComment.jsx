import React, {Component} from 'react';


 export default class NewComment extends Component {
//   updateCommentState(e){

// }
  createComment(event){
  event.preventDefault();
  console.log('btn id', event.target.id);
  console.log('inside of create comment');
  let user = {id:1,name:"aa",password:"kine"}
  let post = {id:2}
const comment ={
    postId: event.target.id,
    username: user.name,
    body: this.comment.value

}

console.log(comment)
this.props.addComment(comment)
}
  render(){
    return(
        <div>
          <form id={this.props.btnid} ref={(input)=>this.form = input} action="" className="" onSubmit={(e)=>this.createComment(e)}>
          <textarea ref={(input)=>{this.comment = input}} className="newComment" name="" maxLength="150" ></textarea>
          <button className="newCommentSub" >post comment</button>
          </form>
        </div>
      )
  }
}

