import React, { Component } from 'react'
import '../App.css'
import { MyNav, MyItemCard } from '../Components/MyComponents'


export default class Home extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      data: [
        {
          id:1,
          title: "Hi",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
          id:2,
          title: "Bye",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
          id:3,
          title: "Cya",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
          id:4,
          title: "Welcome",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
          id:5,
          title: "Hi1",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
          id:6,
          title: "Bye2",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
          id:7,
          title: "Cya3",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
          id:8,
          title: "Welcome4",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
      ]
    }
  }
  render() {
    let rowContents = [];
    const contents = this.state.data.reduce((acc, item, i) => {
      rowContents.push(<MyItemCard containerStyle={{ width: 18 + "em" }} title={item.title} toRoute={"/Item/"+item.id} price={item.price} description={item.description} imageSrc={item.imageSrc} />);
      if (i % 4 === 3) {
        acc.push(<div className="lg-home-cards-con" style={{ flexDirection: 'row', justifyContent: 'space-around' }}>{rowContents}</div>);
        rowContents = [];
      }
      return acc;
    }, [])
    contents.push(<div className="lg-home-cards-con" style={{  flexDirection: 'row', justifyContent: 'space-around' }}>{rowContents}</div>);

    let smRowContents = [];
    const smContents = this.state.data.reduce((acc, item, i) => {
      smRowContents.push(<MyItemCard containerStyle={{ width: 18 + "em" }} title={item.title} toRoute={"/Item/"+item.id} price={item.price} description={item.description} imageSrc={item.imageSrc} />);
      if (i % 2 === 1) {
        acc.push(<div className="sm-home-cards-con" style={{  flexDirection: 'row', justifyContent: 'space-around' }}>{smRowContents}</div>);
        smRowContents = [];
      }
      return acc;
    }, [])
    smContents.push(<div className="sm-home-cards-con" style={{ flexDirection: 'row', justifyContent: 'space-around' }}>{smRowContents}</div>);

    return (
      <div style={{ paddingTop: 100 }}>
        <MyNav/>
        {contents}
        {smContents}
      </div>
    )
  }
}