import React, { Component } from 'react'
import '../App.css'
import { MyInput, MyBtn, MyLogoText, MyNav, MyIcon } from '../Components/MyComponents'
import axios from 'axios';
import { ToastsContainer, ToastsStore } from 'react-toasts';


export default class EditProfile extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            name: "",
            cnic: "",
            password: "",
            confirmPassword: "",
            email: "",
            user: {},
        }
    }
    componentDidMount() {
        var user = JSON.parse(localStorage.getItem('User'));
        var id = user._id;
        this.getUser(id);
    }
    getUser(id) {
        axios.get(`https://property12.herokuapp.com/api/user/get/` + id)
            .then(response => {
                if (response.data.statusCode === 200) {
                    var data = response.data.data;
                    this.setState({ user: data })
                }
            }).catch(error => {
                if (error) {
                    ToastsStore.error("Error\nCould not find user!");
                }
            });
    }
    handleChange(e) {
        var val = e.target.value
        this.setState({ [e.target.name]: val })
    }
    render() {
        return (
            <div className="Center" style={{ paddingTop: 50 }}>
                <MyNav />

                <ToastsContainer store={ToastsStore} />

                <div className="Card FlexCenter">
                    <MyBtn className="HoverEffect" onClick={() => this.props.history.goBack()} style={{ padding: 0, width: 70, alignSelf: 'start', color: 'white' }} title={<MyIcon iconClass="fa fa-long-arrow-left" iconStyle={{ fontSize: 40 }} />} />
                    <MyLogoText text="Asli Property" containerStyle={{ marginTop: -50 }} imageSrc={require("../images/logo.png")} />
                    <h1 className="CardTitle">Edit Profile</h1>
                    <MyInput label="Name" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="Name" name="name" onChange={(e) => this.handleChange(e)} />
                    <MyInput label="CNIC" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="CNIC" name="cnic" onChange={(e) => this.handleChange(e)} />
                    <MyInput label="Password" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="Password" inputType="password" name="password" onChange={(e) => this.handleChange(e)} />
                    <MyInput label="Confirm Password" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} inputType="password" placeHolder="Confirm Password" name="confirmPassword" onChange={(e) => this.handleChange(e)} />
                    <MyInput label="Email" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} inputType="email" placeHolder="Email" name="email" onChange={(e) => this.handleChange(e)} />

                    <MyBtn startColor="#13c0cf" className="HoverEffect" endColor="#1390cf" style={{ color: 'white' }} title="Edit" />
                </div>
            </div>
        )
    }
}