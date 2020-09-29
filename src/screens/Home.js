import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default class Home extends Component {
    render() {
      return (
        <div className="MainCon Center">
        <Link to="/Login" >
        <h1>HI</h1>
        </Link>
        </div>
      )
    }
  }