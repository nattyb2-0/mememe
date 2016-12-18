import React, {Component} from 'react';
import './Forms.css';

export default class NewLike extends Component {
  createLike(event){
  console.log('btn id', event.target.id);
  console.log('inside of create Like');
  let user = {id:1,name:"aa",password:"kine"}
  let post = {id:2}
const like ={
    postId: event.target.id,
    username: user.name,

}

console.log(like)
}
  render(){
    return(
        <div>
          <img  onClick={this.createLike} className='likebtn' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRW5q-djUMEITi99CoY7bLOLf06Dc9OFEKAi0PPBjSIksRhTVT4AQ' />
        </div>
      )
  }
}

// id={this.props.btnid}
