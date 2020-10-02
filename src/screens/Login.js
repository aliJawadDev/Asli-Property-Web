import React, { Component } from 'react'
import '../App.css'
import { MyInput, MyBtn, RowText, MyLogoText, MyNav } from '../Components/MyComponents'

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
      <div className="Center">
        <MyNav />
        <div className="Card FlexCenter" style={{marginTop:50}}>
          <MyLogoText text="Asli Property" imageSrc={require("../images/logo.png")} />

          <h1 className="CardTitle">Login</h1>
          <MyInput label="Phone Number" placeHolder="Phone Number" name="phoneNo" onChange={(e) => this.handleChange(e)} />
          <MyInput label="Password" inputType="password" placeHolder="Password" name="password" onChange={(e) => this.handleChange(e)} />

          <MyBtn startColor="#13c0cf" className="HoverEffect" endColor="#1390cf" style={{ color: 'white' }} title="Login" onClick={() => console.log("NotHERE")} />

          <RowText text="Don't have an account?" navigate={true} rightText="Sign up" toRoute="/Signup" LeftStyle={{ color: "white" }} RightStyle={{ fontWeight: 'bold', marginLeft: 10 }} />
        </div>
      </div>
    )
  }
}