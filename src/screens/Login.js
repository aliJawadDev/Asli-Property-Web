import React, { Component } from 'react'
import '../App.css'
import { MyInput, MyBtn, RowText, MyLogoText, MyNav } from '../Components/MyComponents'
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';
import { ToastsContainer, ToastsStore } from 'react-toasts';

const NumberLength = 11;


export default class Login extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      safe: true,
      phoneNo: "",
      password: "",
      loading: false,
      user: {},
    }
  }
  handleChange(e) {
    var val = e.target.value
    this.setState({ [e.target.name]: val })
  }

  _storeData() {
    localStorage.setItem(
      'User',
      JSON.stringify(this.state.user)
    );
    this._retrieveData();
  };
  _retrieveData() {
    var user = JSON.parse(localStorage.getItem('User'));
    if (user) {
      ToastsStore.success("Logging in!");
      setTimeout(() => {
        this.props.history.push("/");
        }, 1000);
    }
  }
  logIn() {
    if (this.state.phoneNo.length && this.state.password.length) {
      if (this.state.phoneNo.length === NumberLength) {
        this.setState({ loading: true })
        axios.post(`https://property12.herokuapp.com/api/user/login`, {
          phoneNo: this.state.phoneNo,
          password: this.state.password,
        }).then(response => {
          this.setState({ loading: false })
          if (response.data.statusCode === 200) {
            var data = response.data.data;
            this.setState({ user: data, phoneScreen: true })
            this._storeData()
          }
          else {
            ToastsStore.error("No user found!");
          }
        }).catch(error => {
          this.setState({ loading: false })
          if (error) {
            ToastsStore.error("Try again later!");
          }
        });
      }
      else {
        ToastsStore.error("Phone No should be " + NumberLength + " digits long!");
      }
    }
    else {
      ToastsStore.error("Please Fill Inputs!");
    }
  }

  render() {
    return (
      <LoadingOverlay
        active={this.state.loading}
        spinner
        text='Logging in'>
        <div className="Center">
          <MyNav />

          <ToastsContainer store={ToastsStore} />

          <div className="Card FlexCenter" style={{ marginTop: 50 }}>
            <MyLogoText text="Asli Property" imageSrc={require("../images/logo.png")} />

            <h1 className="CardTitle">Login</h1>
            <h6 className={this.state.phoneNo.length === NumberLength ? "labelStyleGood" : "labelStyle"}>{this.state.phoneNo.length}</h6>
            <MyInput label="Phone Number" placeHolder="Phone Number" name="phoneNo" onChange={(e) => this.handleChange(e)} />
            <MyInput label="Password" inputType="password" placeHolder="Password" name="password" onChange={(e) => this.handleChange(e)} />

            <MyBtn startColor="#13c0cf" className="HoverEffect" endColor="#1390cf" style={{ color: 'white' }} title="Login" onClick={() => this.logIn()} />

            <RowText text="Don't have an account?" navigate={true} rightText="Sign up" toRoute="/Signup" LeftStyle={{ color: "white" }} RightStyle={{ fontWeight: 'bold', marginLeft: 10 }} />
          </div>
        </div>
      </LoadingOverlay>
    )
  }
}