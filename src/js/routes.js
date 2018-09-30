import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './components/App.js'
import NewOrder from './container/new.order'

export default () => {
  return (
    //    <Route exact path="/" render={ () => <Redirect to="/pos" component={ App } /> } />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component= { App }/>
      </Switch>
    </BrowserRouter>
  )
}
