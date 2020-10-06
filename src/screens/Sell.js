import React, { Component } from 'react'
import '../App.css'
import { MyInput, MyBtn, MyLogoText, MyNav } from '../Components/MyComponents'

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
            <div style={{ paddingTop: 100 }}>
                <MyNav />
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

                    <MyBtn startColor="#13c0cf" className="HoverEffect" endColor="#1390cf" style={{ color: 'white' }} title="Sell" onClick={() => alert("SOLD")} />

                </div>

            </div>
        )
    }
}