import React, { Component } from 'react'
import '../App.css'
import { MyInput, MyBtn, RowText, MyLogoText, MyNav } from '../Components/MyComponents'

export default class Signup extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            name: "",
            cnic: "",
            phoneNo: "",
            password: "",
            confirmPassword: "",
            email: "",
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: [e.target.value] })
        // this.props.history.push("/");
    }
    render() {
        return (
            <div className="Center" style={{ paddingTop:50 }}>
                <MyNav />
                <div className="Card FlexCenter">
                    <MyLogoText text="Asli Property" imageSrc={require("../images/logo.png")} />
                    <h1 className="CardTitle">Signup</h1>

                    <MyInput label="Name" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="Name" name="name" onChange={(e) => this.handleChange(e)} />
                    <MyInput label="CNIC" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="CNIC" name="cnic" onChange={(e) => this.handleChange(e)} />
                    <MyInput label="Phone Number" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="Phone Number" name="phoneNo" onChange={(e) => this.handleChange(e)} />
                    <MyInput label="Password" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="Password" inputType="password" name="password" onChange={(e) => this.handleChange(e)} />
                    <MyInput label="Confirm Password" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} inputType="password" placeHolder="Confirm Password" name="confirmPassword" onChange={(e) => this.handleChange(e)} />
                    <MyInput label="Email" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} inputType="email" placeHolder="Email" name="email" onChange={(e) => this.handleChange(e)} />

                    <MyBtn startColor="#13c0cf" className="HoverEffect" endColor="#1390cf" style={{ color: 'white' }} title="Create User" onClick={() => console.log("NotHERE")} />

                    <RowText text="Already have an account?" navigate={true} rightText="Login" toRoute="/Login" LeftStyle={{ color: "white" }} RightStyle={{ fontWeight: 'bold', marginLeft: 10 }} />
                </div>
            </div>
        )
    }
}