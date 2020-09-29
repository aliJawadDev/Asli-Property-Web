import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import '../css/Login.css'
import MyBtn from '../Components/MyBtn'
import RowText from '../Components/RowText'
import MyInput from '../Components/MyInput'

export default class Login extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      phoneNo: "",
      password: "",
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name]: [e.target.value] })
  }
  render() {
    return (
      <div className="MainCon Center">
        <div className="Card">
          <img src={require("../images/logo.png")} />
          <h6 className="LogoText">Asli Property</h6>
          <h1 className="CardTitle">Login</h1>

          <MyInput label="Phone Number" placeHolder="Phone Number" name="phoneNo" onChange={(e) => this.handleChange(e)}/>
          <MyInput label="Password" inputType="password" placeHolder="Password" name="password" onChange={(e) => this.handleChange(e)}/>

          <MyBtn startColor="#13c0cf" endColor="#1390cf" style={{color:'white'}} title="Login" onClick={() =>console.log("NotHERE")}/>
          
          <RowText text="Don't have an account?" navigate={true} rightText="Sign up" toRoute="/Signup" LeftStyle={{color:"white"}} RightStyle={{fontWeight:'bold',marginLeft:10}}/>
        </div>
      </div>
    )
  }
}