import React, { Component } from 'react'
import '../App.css'
import { MyInput, MyBtn, MyLogoText, MyNav, MyIcon } from '../Components/MyComponents'
import axios from 'axios';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import LoadingOverlay from 'react-loading-overlay';

const CNICLength = 13;

export default class EditProfile extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            name: "",
            cnic: "",
            pass: "",
            currentPass: "",
            email: "",
            loading: false,
            currentUser: {},
            updated: false,
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
                    this.setState({ currentUser: data })
                }
            }).catch(error => {
                if (error) {
                    ToastsStore.error("Error\nCould not find user!");
                }
            });
    }
    getAfterUpdate(id) {
        axios.get(`https://property12.herokuapp.com/api/user/get/` + id)
            .then(response => {
                if (response.data.statusCode === 200) {
                    var data = response.data.data;
                    localStorage.setItem(
                        'User',
                        JSON.stringify(data)
                    );
                    var user = JSON.parse(localStorage.getItem('User'));
                    this.setState({ loading: false })
                    if(user){
                    ToastsStore.success("User Successfully Updated!");
                    this.props.history.push('/Profile');
                    }
                }
            }).catch(error => {
                if (error) {
                    this.setState({ loading: false })
                    ToastsStore.error("Error\nCould not find user!");
                }
            })
            .catch(error => {
                ToastsStore.warning(error);
            });
    }
    updateUser() {
        if (this.state.cnic.length === CNICLength || this.state.name.length > 0 || this.state.pass.length || this.state.pass.length) {
            if (this.state.currentPass === this.state.currentUser.password) {
                this.setState({ loading: true })
                axios.post(`https://property12.herokuapp.com/api/user/update/` + this.state.currentUser._id, {
                    cnic: this.state.cnic.length === CNICLength ? this.state.cnic : this.state.currentUser.cnic,
                    name: this.state.name.length > 0 ? this.state.name : this.state.currentUser.name,
                    password: this.state.pass.length > 0 ? this.state.pass : this.state.currentUser.password,
                    email: this.state.pass.length ? this.state.email : this.state.currentUser.email,
                    phoneNo: this.state.currentUser.phoneNo,
                }).then(response => {
                    if (response) {
                        this.getAfterUpdate(response.data.data._id);
                    }
                    else {
                        this.setState({ loading: false })
                        ToastsStore.error("Could not update user!\nTry again later!");
                    }
                }).catch(error => {
                    this.setState({ loading: false })
                    if (error) {
                        ToastsStore.error("Try again later!");
                    }
                });
            }
            else {
                ToastsStore.error("Current password is not matching!");
            }
        }
        else {
            ToastsStore.error("Please fill inputs that you need to be changed!");
        }
    }
    handleChange(e) {
        var val = e.target.value
        this.setState({ [e.target.name]: val })
    }
    render() {
        return (
            <LoadingOverlay
                active={this.state.loading}
                spinner
                text='Updating User'>
                <div className="Center" style={{ paddingTop: 50 }}>
                    <MyNav />

                    <ToastsContainer store={ToastsStore} />

                    <div className="Card FlexCenter">
                        <MyBtn className="HoverEffect" onClick={() => this.props.history.goBack()} style={{ padding: 0, width: 70, alignSelf: 'start', color: 'white' }} title={<MyIcon iconClass="fa fa-long-arrow-left" iconStyle={{ fontSize: 40 }} />} />
                        <MyLogoText text="Asli Property" containerStyle={{ marginTop: -50 }} imageSrc={require("../images/logo.png")} />
                        <h1 className="CardTitle">Edit Profile</h1>
                        <MyInput label="Name" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="Name" name="name" onChange={(e) => this.handleChange(e)} />
                        <h6 className={this.state.cnic.length === CNICLength ? "labelStyleGood" : "labelStyle"}>{this.state.cnic.length}</h6>
                        <MyInput label="CNIC" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="CNIC" name="cnic" onChange={(e) => this.handleChange(e)} />
                        <MyInput label="Password" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} placeHolder="Password" inputType="password" name="password" onChange={(e) => this.handleChange(e)} />
                        <MyInput label="Current Password" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} inputType="password" placeHolder="Current Password" name="currentPass" onChange={(e) => this.handleChange(e)} />
                        <MyInput label="Email" labelStyle={{ marginTop: -7 }} inputStyle={{ padding: 7, marginTop: -7 }} inputType="email" placeHolder="Email" name="email" onChange={(e) => this.handleChange(e)} />

                        <MyBtn startColor="#13c0cf" className="HoverEffect" onClick={() => this.updateUser()} endColor="#1390cf" style={{ color: 'white' }} title="Edit" />
                    </div>
                </div>
            </LoadingOverlay>
        )
    }
}