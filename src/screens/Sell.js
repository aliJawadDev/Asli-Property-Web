import React, { Component } from 'react'
import '../App.css'
import { MyInput, MyBtn, MyLogoText, MyNav } from '../Components/MyComponents'
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';
import { ToastsContainer, ToastsStore } from 'react-toasts';


export default class Sell extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            title: "",
            type: "",
            price: "",
            area: "",
            purpose: "",
            city: "",
            location: "",
            description: "",
            proofOfOwnership: "",
            images: [],
            userPhone: "",
            working: false
        }
    }
    componentDidMount() {
        var user = JSON.parse(localStorage.getItem('User'));
        var id = user._id;
        this.setState({ userPhone: user.phoneNo })
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
    submitAd = () => {
        let data = {
            image: this.state.images,
            title: this.state.title,
            type: this.state.type,
            price: this.state.price,
            area: this.state.area,
            purpose: this.state.purpose,
            city: this.state.city,
            location: this.state.location,
            description: this.state.description,
            phoneNo: this.state.userPhone
        }
        if (this.state.images.length && this.state.title.length && this.state.type.length && this.state.price.length && this.state.area.length && this.state.purpose.length && this.state.city.length && this.state.location.length && this.state.description.length && this.state.userPhone.length) {
            this.setState({ working: true })
            axios.post(`https://property12.herokuapp.com/api/banner/add`, data)
                .then(response => {
                    if (response.status === 200) {
                        this.setState({ working: false })
                        ToastsStore.success("Data Added Successfully!");
                    }
                }).catch(error => {
                    if (error) {
                        this.setState({ working: false })
                        ToastsStore.error("Error\nTry Again Later!");
                    }
                });
        }
        else {
            ToastsStore.error("Please Fill inputs!");
        }


    }
    handleChange(e) {
        this.setState({ [e.target.name]: [e.target.value] })
        console.log(e.target.value)
    }
    render() {
        const styles = {
            inputStyle: {
                background: '#fff',
                color: '#000',
                padding: 5,
                borderRadius: 10
            },
            imageInput: {
                background: 'transparent',
            }
        };
        return (
            <LoadingOverlay
                active={this.state.working}
                spinner
                text='Uploading data'>
                <div style={{ paddingTop: 100 }}>
                    <MyNav />

                    <ToastsContainer store={ToastsStore} />


                    <div className="sellCon">

                        <MyLogoText text="Asli Property" imageSrc={require("../images/logo.png")} />

                        <MyInput label="Title" placeHolder="Title here" inputStyle={styles.inputStyle} name="title" onChange={(e) => this.handleChange(e)} />

                        <h5 style={{ fontWeight: 'bold', color: "#fff", marginTop: 10 }}>Type:</h5>

                        <label className="radioContainer">Plot
                        <input type="radio" value="Plot" onChange={(e) => this.handleChange(e)} name="type" />
                            <span className="checkmark"></span>
                        </label>

                        <label className="radioContainer">Home
                        <input type="radio" value="Home" onChange={(e) => this.handleChange(e)} name="type" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radioContainer">Flat
                        <input type="radio" value="Flat" onChange={(e) => this.handleChange(e)} name="type" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radioContainer">Commercial
                        <input type="radio" value="Commercial" onChange={(e) => this.handleChange(e)} name="type" />
                            <span className="checkmark"></span>
                        </label>

                        <MyInput label="Price" placeHolder="Price here" inputStyle={styles.inputStyle} name="price" onChange={(e) => this.handleChange(e)} />

                        <MyInput label="Area" placeHolder="Area here" inputStyle={styles.inputStyle} name="area" onChange={(e) => this.handleChange(e)} />

                        <MyInput label="Purpose" placeHolder="Purpose here" inputStyle={styles.inputStyle} name="purpose" onChange={(e) => this.handleChange(e)} />

                        <MyInput label="City" placeHolder="City here" inputStyle={styles.inputStyle} name="city" onChange={(e) => this.handleChange(e)} />

                        <MyInput label="Purpose" placeHolder="Purpose here" inputStyle={styles.inputStyle} name="purpose" onChange={(e) => this.handleChange(e)} />

                        <MyInput label="Location" placeHolder="Location here" inputStyle={styles.inputStyle} name="location" onChange={(e) => this.handleChange(e)} />

                        <MyInput label="Description" placeHolder="Description here" textarea inputStyle={styles.inputStyle} name="description" onChange={(e) => this.handleChange(e)} />

                        <h5 style={{ fontWeight: 'bold', color: "#fff" }}>Proof of ownership:</h5>

                        <MyInput inputType="file" imageOnly inputStyle={styles.imageInput} inputClass="" name="proofOfOwnership" onChange={(e) => this.handleChange(e)} />

                        <h5 style={{ fontWeight: 'bold', color: "#fff" }}>Property Images:</h5>

                        <MyInput multiple imageOnly inputType="file" inputStyle={styles.imageInput} name="images" onChange={(e) => this.handleChange(e)} />

                        <MyBtn startColor="#13c0cf" className="HoverEffect" endColor="#1390cf" style={{ color: 'white' }} title="Sell" onClick={() => this.submitAd()} />

                    </div>

                </div>
            </LoadingOverlay>
        )
    }
}