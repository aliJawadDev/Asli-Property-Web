import React, { Component } from 'react'
import '../App.css'
import { MyNav,MyItemCard } from '../Components/MyComponents'

export default class MyAds extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: "Hi",
                    price: "PKR:100",
                    description: "Demo Desc",
                    imageSrc: require('../images/ads/1.png'),
                },
                {
                    id: 2,
                    title: "Bye",
                    price: "PKR:100",
                    description: "Demo Desc",
                    imageSrc: require('../images/ads/1.png'),
                },
                {
                    id: 3,
                    title: "Cya",
                    price: "PKR:100",
                    description: "Demo Desc",
                    imageSrc: require('../images/ads/1.png'),
                },
                {
                    id: 4,
                    title: "Welcome",
                    price: "PKR:100",
                    description: "Demo Desc",
                    imageSrc: require('../images/ads/1.png'),
                },
                {
                    id: 5,
                    title: "Hi1",
                    price: "PKR:100",
                    description: "Demo Desc",
                    imageSrc: require('../images/ads/1.png'),
                },
                {
                    id: 6,
                    title: "Bye2",
                    price: "PKR:100",
                    description: "Demo Desc",
                    imageSrc: require('../images/ads/1.png'),
                },
                {
                    id: 7,
                    title: "Cya3",
                    price: "PKR:100",
                    description: "Demo Desc",
                    imageSrc: require('../images/ads/1.png'),
                },
                {
                    id: 8,
                    title: "Welcome4",
                    price: "PKR:100",
                    description: "Demo Desc",
                    imageSrc: require('../images/ads/1.png'),
                },
            ]
        }
    }
    render() {
        const styles = {
            container:{
                display: 'flex',
                paddingTop: 70,
                flex: 1,
                minHeight: 100 + "vh",
            },
            centerLine:{
                borderLeft: '2px solid white'
            },
            title:{
                fontWeight: 'bold',
                color: 'white',
                position:"sticky",
                top:57,
                backgroundColor:"#1390cf",
                width:100+"%",
                textAlign:'center',
                padding:10,
                borderBottom:'1px solid black'
            },
            subCon:{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center'
            }
        };
        return (
            <div style={styles.container}>
                <MyNav />
                <div style={styles.subCon}>

                    <h2 style={styles.title}>My Ads</h2>


                    {this.state.data.map(function (item) {
                        return (
                        <MyItemCard containerStyle={{ width: 18 + "em" }} title={item.title} toRoute={"/Item/" + item.id} price={item.price} description={item.description} imageSrc={item.imageSrc} />
                        )
                    })}


                </div>


                <div style={styles.centerLine} />



                <div style={styles.subCon}>

                    <h2 style={styles.title}>Favorites</h2>


                    {this.state.data.map(function (item) {
                        return (
                        <MyItemCard containerStyle={{ width: 18 + "em" }} title={item.title} toRoute={"/Item/" + item.id} price={item.price} description={item.description} imageSrc={item.imageSrc} />
                        )
                    })}

                    
                </div>

            </div>
        )
    }
}