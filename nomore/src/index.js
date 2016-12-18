import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {render} from 'react-dom'
// import Profile from "./Components/Profile/Profile.jsx"
// import Signup from "./Components/Signup/Signup.jsx"
// import TTT from "./components/Signup/TTT.jsx"
import Home from "./components/Home/Home.jsx"
 import Signup from "./components/Forms/Signup.jsx"
 import Landing from "./components/Landing/Landing.jsx"

import {Router, Route, IndexRoute, hashHistory} from 'react-router'
// import Post from "./components/Post/Post.jsx"
// import Board from "./components/Board/Board.jsx"

const Root = ()=>{
  return(
    <BrowserRouter>
    <div>
      <Match exactly pattern='/' component={App}></Match>
      <Match exactly pattern='/landing' component={Landing}></Match>
      <Match exactly pattern='/signup'   component={Signup}></Match>
      </div>
    </BrowserRouter>
    )
}

Signup.contextTypes = {
  router: React.PropTypes.object
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={Home}></Route>

    <Route path="app" component={App}></Route>
</Router>, document.querySelector('#root-container'));
