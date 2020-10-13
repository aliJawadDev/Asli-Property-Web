import React, { Component } from 'react'
import '../App.css'
import { MyInput, MyBtn, RowText, MyLogoText, MyNav } from '../Components/MyComponents'
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';
import { ToastsContainer, ToastsStore } from 'react-toasts';

const CNICLength = 13;
const NumberLength = 11;

export default class Signup extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            name: "",
            cnic: "",
            phoneNo: "",
            password: "",
            email: "",
            confirmPass: "",
            loading: false,
            location: "",
        }
    }
    handleChange(e) {
        var val = e.target.value
        this.setState({ [e.target.name]: val })
    }
    create() {
        if (this.state.name.length && this.state.cnic.length && this.state.phoneNo.length && this.state.password.length && this.state.confirmPass && this.state.location) {
            if (this.state.cnic.length === CNICLength && this.state.phoneNo.length === NumberLength) {
                if (this.state.password === this.state.confirmPass) {
                    this.setState({ loading: true })
                    axios.post(`https://property12.herokuapp.com/api/user/add`, {
                        name: this.state.name,
                        cnic: this.state.cnic,
                        phoneNo: this.state.phoneNo,
                        password: this.state.password,
                        email: this.state.email,
                        location: this.state.location,
                    }).then(response => {
                        this.setState({ loading: false })
                        if (response.status === 200) {
                            ToastsStore.success("User has been created!");
                            setTimeout(() => {
                                this.props.history.push("/");
                                }, 1000);
                        }
                    }).catch(error => {
                        this.setState({ loading: false })
                        if (error) {
                            ToastsStore.error("Try again later!");
                        }
                    });
                }
                else {
                    ToastsStore.error("Make sure that password is same!");
                }
            }
            else {
                ToastsStore.error("CNIC should be " + CNICLength + " digit long!\nPhone No should be " + NumberLength + " digit long!");
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
                text='Creating User'>
                <div className="Center" style={{ paddingTop: 50 }}>
                    <MyNav />

                    <ToastsContainer store={ToastsStore} />

                    <div className="Card FlexCenter">
                        <MyLogoText text="Asli Property" imageSrc={require("../images/logo.png")} />
                        <h1 className="CardTitle">Signup</h1>

                        <MyInput label="Name" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="Name" name="name" onChange={(e) => this.handleChange(e)} />
                        <h6 className={this.state.cnic.length === CNICLength ? "labelStyleGood" : "labelStyle"}>{this.state.cnic.length}</h6>
                        <MyInput label="CNIC" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="CNIC" name="cnic" onChange={(e) => this.handleChange(e)} />
                        <h6 className={this.state.phoneNo.length === NumberLength ? "labelStyleGood" : "labelStyle"}>{this.state.phoneNo.length}</h6>
                        <MyInput label="Phone Number" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="Phone Number" name="phoneNo" onChange={(e) => this.handleChange(e)} />
                        <MyInput label="Location" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="Location" name="location" onChange={(e) => this.handleChange(e)} />
                        <MyInput label="Password" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="Password" inputType="password" name="password" onChange={(e) => this.handleChange(e)} />
                        <MyInput label="Confirm Password" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} inputType="password" placeHolder="Confirm Password" name="confirmPass" onChange={(e) => this.handleChange(e)} />
                        <MyInput label="Email" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} inputType="email" placeHolder="Email" name="email" onChange={(e) => this.handleChange(e)} />

                        <MyBtn startColor="#13c0cf" className="HoverEffect" endColor="#1390cf" style={{ color: 'white' }} title="Create User" onClick={() => this.create()} />

                        <RowText text="Already have an account?" navigate={true} rightText="Login" toRoute="/Login" LeftStyle={{ color: "white" }} RightStyle={{ fontWeight: 'bold', marginLeft: 10 }} />
                    </div>
                </div>
            </LoadingOverlay>
        )
    }
}