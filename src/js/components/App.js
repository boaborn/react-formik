import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import {BrowserRouter, Route, Switch, Redirect, Link, NavLink} from 'react-router-dom'

import NavBar from './navigation'

// import { Button } from 'react-bootstrap'

const User = () => {

  return (<h1>Welcome User </h1>)
}

@observer
class App extends Component {
  render() {

    return (
      <BrowserRouter >
        <div>
          <NavBar/>
          <ul className='nav-link'>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/about">About</NavLink></li>
            <li><NavLink exact to="/user">User</NavLink></li>
          </ul>
          <Switch>
            <Route path="/" exact render={ () => {
              return (<h1>Home</h1>)
            } } />
            <Route path="/about" exact render={ () => {
              return (<h1>About</h1>)
            } } />

            <Route path="/user" exact component={ User } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
