import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { MyBtn, MyIcon, MyNav } from '../Components/MyComponents'
import axios from 'axios';
import { ToastsContainer, ToastsStore } from 'react-toasts';

export default class Profile extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            user: {},
            userNameLetter: "",
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
                    var firstName = data.name.split(' ').slice(0, -1).join(' ');
                    var lastName = data.name.split(' ').slice(-1).join(' ');
                    var letters = firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase();
                    this.setState({ userNameLetter: letters })
                }
            }).catch(error => {
                if (error) {
                    ToastsStore.error("Error\nCould not find user!");
                }
            });
    }
    logout(){
        localStorage.clear();
        this.props.history.push('/');
    }
    render() {
        const styles = {
            row: {
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around'
            },
            nameLetterCon: {
                display: 'flex',
                borderWidth: 1,
                borderColor: 'silver',
                backgroundColor: 'silver',
                borderRadius: 100,
                height: 100,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
            },
            nameLetter: {
                fontSize: 35,
                fontWeight: 'bold',
                fontStyle: 'italic',
            },
        };
        return (
            <div className="Center" style={{ paddingTop: 50 }}>
                <MyNav />

                <ToastsContainer store={ToastsStore} />

                <div className="Card">
                    <div style={styles.row}>
                        <div style={{ display: 'flex', flex: 5, flexDirection: 'row', }}>
                            <div style={styles.nameLetterCon}>
                                <h4 style={styles.nameLetter}>{this.state.userNameLetter}</h4>
                            </div>
                            <div style={{ marginLeft: 20, color: 'white' }}>
                                <h4>{this.state.user.name}</h4>
                                <h4>{this.state.user.phoneNo}</h4>
                                <h4>{this.state.user.email}</h4>
                            </div>
                        </div>
                        <div style={{ justifyContent: 'end' }}>
                            <Link className="removeDecoration" to="/Edit/Profile" style={{ color: 'white' }}>
                                <MyBtn className="HoverEffect" disableOnClick={true} style={{ padding: 10 }} title={<MyIcon iconClass="fa fa-edit" iconStyle={{ fontSize: 30 }} />} />
                            </Link>
                        </div>
                    </div>
                    <div style={styles.row}>
                        <MyBtn style={{ color: 'white', marginTop: 20 }} onClick={() => this.logout()} className="HoverEffect" title="Log Out" />
                    </div>
                </div>
            </div>
        )
    }
}