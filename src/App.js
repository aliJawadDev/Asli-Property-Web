import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Profile from './screens/Profile'
import EditProfile from './screens/EditProfile'
import ItemPreview from './screens/ItemPreview'
import MyAds from './screens/MyAds'
import Sell from './screens/Sell'

export default function App(){
  const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('User')))
    }, []);
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home} /> {/*Home page*/}
        <Route path="/Item/:id" component={ItemPreview} /> {/*ItemPreview page*/}
        {user ? null: <Route path="/Login" component={Login} /> /*Login page*/}
        {user ? null : <Route path="/Signup" component={Signup} /> /*Signup page*/}
        {user ? <Route path="/Profile" component={Profile} /> /*Profile page*/ : null}
        {user ? <Route path="/MyAds" component={MyAds} /> /*MyAds page*/ : null}
        {user ? <Route path="/Edit/Profile" component={EditProfile} /> /*Edit page*/ : null}
        {user ? <Route path="/Sell" component={Sell} /> /*Sell page*/ : null}
      </Switch>
      </Router>
    )
}