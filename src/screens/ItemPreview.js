import React, { Component } from 'react'
import '../App.css'
import { MyBtn, MyIcon, MyNav, ItemDetailRow } from '../Components/MyComponents'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Profile extends Component {
    render() {
        return (
            <div style={{ paddingTop: 70 }}>
                <MyNav />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Carousel transitionTime={1000} autoPlay={true} infiniteLoop={true} className="imageSlider" showThumbs={false} dynamicHeight={true}>
                        <div>
                            <img src={require('../images/ads/1.png')} alt="loading" />
                        </div>
                        <div>
                            <img src={require('../images/ads/1.png')} alt="loading" />
                        </div>
                        <div>
                            <img src={require('../images/ads/1.png')} alt="loading" />
                        </div>
                    </Carousel>
                </div>
                <div className="imageSlider" style={{ margin: 'auto' }}>

                    <div style={{ width: 100 + "%", display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
                        <MyBtn className="HoverEffect" style={{ borderRadius: 360, margin: 0, color: 'white', width: 50, height: 50 }} title={<MyIcon iconClass="fa fa-heart" containerStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} iconStyle={{ color: 'white', fontSize: 30, paddingTop: 4 }} />} />
                    </div>


                    <ItemDetailRow containerClass="ItemPreviewRow" title="Property ID" detail="01234567890" bgDark iconClass="fa fa-home itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />
                    <ItemDetailRow containerClass="ItemPreviewRow" title="Type" detail="House" iconClass="fa fa-building itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />
                    <ItemDetailRow containerClass="ItemPreviewRow" title="Price" detail="PKR 10 Lac" bgDark iconClass="fa fa-money itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />
                    <ItemDetailRow containerClass="ItemPreviewRow" title="Area" detail="100 feet" iconClass="fa fa-text-height itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />
                    <ItemDetailRow containerClass="ItemPreviewRow" title="Purpose" detail="Nothing" bgDark iconClass="fa fa-check-circle itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />
                    <ItemDetailRow containerClass="ItemPreviewRow" title="City" detail="Rawalpindi" iconClass="fa fa-map itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />
                    <ItemDetailRow containerClass="ItemPreviewRow" title="Location" detail="PK" bgDark iconClass="fa fa-map-marker itemPreviewText" titleClass="itemPreviewText" detailClass="itemPreviewText" />


                    <h2 className="itemPreviewText" style={{color:'white', margin:20,fontWeight:'bold',marginBottom:10,}}>
                        Description:
                    </h2>
                    <h5 style={{color:'white'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </h5>
                </div>
            </div>
        )
    }
}

