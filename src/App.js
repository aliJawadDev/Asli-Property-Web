import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router,} from 'react-router-dom'

import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'

export default class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home} /> {/*Home page*/}
        <Route exact path="/Login" component={Login} /> {/*Login page*/}
        <Route exact path="/Signup" component={Signup} /> {/*Signup page*/}
      </Switch>
      </Router>
    )
  }
}