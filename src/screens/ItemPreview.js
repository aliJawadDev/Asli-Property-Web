import React, { Component } from 'react'
import '../App.css'
import { MyBtn, MyIcon, MyNav, ItemDetailRow } from '../Components/MyComponents'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';

export default class Profile extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            data: {},
            loaded: false,
        }
    }

    componentDidMount() {
        var _id = this.props.match.params.id;
        this.setState({ itemId: _id })
        axios.get(`https://property12.herokuapp.com/api/banner/get/` + _id)
            .then(response => {
                this.setState({ loaded: true })
                this.setState({ data: response.data.data })
            }).catch(error => {
                if (error) {
                    alert("Error Getting Item")
                }
            });
    }
    render() {
        return (
            <LoadingOverlay
                active={!this.state.loaded}
                spinner
                text='Fetching Data'>

                <div style={{ paddingTop: 70,minHeight:100+"vh" }}>
                    <MyNav />

                    {this.state.data._id && this.state.loaded ? <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Carousel transitionTime={1000} autoPlay={true} infiniteLoop={true} className="imageSlider" showThumbs={false} dynamicHeight={true}>
                            {this.state.data.image.map((image) => <div>
                                <img src={image} alt="loading" />
                            </div>)}
                        </Carousel>
                    </div> : null}


                    <div className="imageSlider" style={{ margin: 'auto' }}>

                        <div style={{ width: 100 + "%", display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
                            <MyBtn className="HoverEffect" style={{ borderRadius: 360, margin: 0, color: 'white', width: 50, height: 50 }} title={<MyIcon iconClass="fa fa-heart" containerStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} iconStyle={{ color: 'white', fontSize: 30, paddingTop: 4 }} />} />
                        </div>

                        <ItemDetailRow containerClass="ItemPreviewRow" title="Property ID" detail={this.state.data._id} bgDark iconClass="fa fa-home itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />
                        <ItemDetailRow containerClass="ItemPreviewRow" title="Type" detail={this.state.data.type} iconClass="fa fa-building itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />
                        <ItemDetailRow containerClass="ItemPreviewRow" title="Price" detail={this.state.data.price} bgDark iconClass="fa fa-money itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />
                        <ItemDetailRow containerClass="ItemPreviewRow" title="Area" detail={this.state.data.area} iconClass="fa fa-text-height itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />
                        <ItemDetailRow containerClass="ItemPreviewRow" title="Purpose" detail={this.state.data.purpose} bgDark iconClass="fa fa-check-circle itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />
                        <ItemDetailRow containerClass="ItemPreviewRow" title="City" detail={this.state.data.city} iconClass="fa fa-map itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />
                        <ItemDetailRow containerClass="ItemPreviewRow" title="Location" detail={this.state.data.location} bgDark iconClass="fa fa-map-marker itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />


                        <h2 className="itemPreviewText" style={{ color: 'white', margin: 20, fontWeight: 'bold', marginBottom: 10, }}>
                            Description:
                    </h2>
                        <h5 style={{ color: 'white' }}>
                            {this.state.data.description}
                        </h5>
                    </div>
                </div>
            </LoadingOverlay>
        )
    }
}

