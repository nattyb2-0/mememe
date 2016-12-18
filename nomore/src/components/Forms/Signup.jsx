import React, {Component} from 'react';

export default class Signup extends Component {
    createUser(event){
      event.preventDefault();
      console.log('bout to create a user test')
      //take info from inputs
      console.log(this.username.value);
      console.log(this.email.value);
      console.log(this.password.value);
      //put in db
      //redirect user to login page
      const user={
        username: this.username.value,
        email:this.email.value,
        password:this.password.value
      }
      this.props.addUser(user)
      console.log(user);
    }

  render(){
    return(
      <div className="signup">
        <h1>SIGN UP </h1>
        <input required type="text" className="userName" required placeholder="First Name, Last Name" ref={(input)=>{this.username=input}} />
        <input required type="email" className="email" required placeholder="something@something.com" ref={(input)=>{this.email=input}} />
        <input required type="password" className="password" required placeholder="password" ref={(input)=>{this.password=input}} />
        <button className="submit" onClick={this.createUser.bind(this)}>Sign UP NOw</button>
        <div>
          selec;
        </div>
      </div>


      )
  }
}
