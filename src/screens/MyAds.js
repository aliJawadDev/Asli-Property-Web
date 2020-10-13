import React, { Component } from 'react'
import '../App.css'
import { MyNav, MyItemCard } from '../Components/MyComponents'
import axios from 'axios';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import LoadingOverlay from 'react-loading-overlay';

export default class MyAds extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            myAds: [],
            favorite: [],
            user: {},
            loading: true,
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
                    this.getMyAds();
                    this.getfavorite();
                }
            }).catch(error => {
                if (error) {
                this.setState({loading:false})
                    ToastsStore.error("Error\nCould not find user!");
                }
            });
    }

    getMyAds() {
        axios.get(`https://property12.herokuapp.com/api/banner/get_phone/` + this.state.user.phoneNo)
            .then(response => {
                var data = response.data.data
                this.setState({ myAds: data })
            }).catch(error => {
                if (error) {
                this.setState({loading:false})
                    ToastsStore.error("Error\nError getting Data!");
                }
            });
    }
    getfavorite() {
        axios.get(`https://property12.herokuapp.com/api/favorite/get_phone/` + this.state.user.phoneNo)
            .then(response => {
                var data = response.data.data
                this.setState({ favorite: data })
                this.setState({loading:false})
            }).catch(error => {
                if (error) {
                this.setState({loading:false})
                    ToastsStore.error("Error\nError getting Data!");
                }
            });
    }
    render() {
        const styles = {
            container: {
                display: 'flex',
                paddingTop: 70,
                flex: 1,
                minHeight: 100 + "vh",
            },
            centerLine: {
                borderLeft: '2px solid white'
            },
            title: {
                fontWeight: 'bold',
                color: 'white',
                position: "sticky",
                top: 57,
                backgroundColor: "#1390cf",
                width: 100 + "%",
                textAlign: 'center',
                padding: 10,
                borderBottom: '1px solid black'
            },
            subCon: {
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center'
            }
        };
        return (
            <LoadingOverlay
                active={this.state.loading}
                spinner
                text='Fetching Data'>
                <div style={styles.container}>
                    <MyNav />

                    <ToastsContainer store={ToastsStore} />

                    <div style={styles.subCon}>

                        <h2 style={styles.title}>My Ads</h2>


                        {this.state.myAds.map(function (item) {
                            return (
                                <MyItemCard containerStyle={{ width: 18 + "em" }} title={item.title} toRoute={"/Item/" + item._id} price={item.price} description={item.description} imageSrc={item.image[0]} />
                            )
                        })}


                    </div>


                    <div style={styles.centerLine} />



                    <div style={styles.subCon}>

                        <h2 style={styles.title}>Favorites</h2>


                        {this.state.favorite.map(function (item) {
                            return (
                                <MyItemCard containerStyle={{ width: 18 + "em" }} title={item.title} toRoute={"/Item/" + item._id} price={item.price} description={item.description} imageSrc={item.image[0]} />
                            )
                        })}


                    </div>

                </div>
            </LoadingOverlay>
        )
    }
}