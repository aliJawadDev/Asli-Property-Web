import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Profile from './screens/Profile'
import EditProfile from './screens/EditProfile'
import ItemPreview from './screens/ItemPreview'
import MyAds from './screens/MyAds'
import Sell from './screens/Sell'


export default class App extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
        user: null,
    }
}
componentDidMount() {
    var user = JSON.parse(localStorage.getItem('User'));
    this.setState({user})
}
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home} /> {/*Home page*/}
        {this.state.user ? null: <Route path="/Login" component={Login} /> /*Login page*/}
        {this.state.user ? null : <Route path="/Signup" component={Signup} /> /*Signup page*/}
        {this.state.user ? <Route path="/Profile" component={Profile} /> /*Profile page*/ : null}
        <Route path="/Edit/Profile" component={EditProfile} /> {/*Edit page*/}
        <Route path="/Item/:id" component={ItemPreview} /> {/*ItemPreview page*/}
        <Route path="/MyAds" component={MyAds} /> {/*MyAds page*/}
        <Route path="/Sell" component={Sell} /> {/*Sell page*/}
      </Switch>
      </Router>
    )
  }
}