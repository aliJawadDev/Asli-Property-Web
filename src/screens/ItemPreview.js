import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { MyBtn, MyIcon, MyNav } from '../Components/MyComponents'


export default class Profile extends Component {
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
            <div style={{ paddingTop: 50}}>
                <div id="imageSlider" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#imageSlider" data-slide-to="0" className="active"></li>
                        <li data-target="#imageSlider" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" style={{height:400}} src={require('../images/ads/1.png')} alt="Loading" />
                        </div>
                        <div class="carousel-item">
                            <img className="d-block w-100" style={{height:400}} src={require('../images/ads/1.png')} alt="Loading" />
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" style={{height:500}} href="#imageSlider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" style={{height:500}} href="#imageSlider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        )
    }
}

