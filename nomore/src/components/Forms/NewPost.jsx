import React, {Component} from 'react';

export default class NewPost extends Component {

createPost(event){
  event.preventDefault();
  console.log('inside of create post');
  let user = {id:1,name:"aa",password:"kine"}
const post ={
    user_id: user.id,
    username: user.name,
    title: this.title.value,
    photo: this.pic.value
    // comments: ,
    // likes: 0
}
this.props.addPost(post)
console.log(post);
}

render(){
  return(
    <div>
    <h1>Post to Board</h1>
    <form ref={(input)=>this.form = input} action="" className="" onSubmit={(e)=>this.createPost(e)}>
        <textarea required placeholder="add a title for your post here" ref={(input)=>{this.title = input}} name="" maxLength="30" className="title"></textarea>
        <input required placeholder="place your photo url here" type="text" ref={(input)=>{this.pic = input}} />
        <button>create new post </button>
    </form>
    </div>
    )
}
}
