import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Profile from './screens/Profile'
import EditProfile from './screens/EditProfile'
import ItemPreview from './screens/ItemPreview'
import MyAds from './screens/MyAds'


export default class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home} /> {/*Home page*/}
        <Route path="/Login" component={Login} /> {/*Login page*/}
        <Route path="/Signup" component={Signup} /> {/*Signup page*/}
        <Route path="/Profile" component={Profile} /> {/*Profile page*/}
        <Route path="/Edit/Profile" component={EditProfile} /> {/*Edit page*/}
        <Route path="/Item/:id" component={ItemPreview} /> {/*ItemPreview page*/}
        <Route path="/MyAds" component={MyAds} /> {/*MyAds page*/}
      </Switch>
      </Router>
    )
  }
}