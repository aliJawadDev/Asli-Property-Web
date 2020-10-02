import React, { Component } from 'react'
import '../App.css'
import { MyNav, MyItemCard } from '../Components/MyComponents'


export default class Home extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      data: [
        {
          title: "Hi",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
          title: "Bye",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
          title: "Cya",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
          title: "Welcome",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
          title: "Hi1",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
          title: "Bye2",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
          title: "Cya3",
          price: "PKR:100",
          description: "Demo Desc",
          imageSrc: require('../images/ads/1.png'),
        },
        {
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
      rowContents.push(<MyItemCard containerStyle={{ width: 18 + "em" }} title={item.title} price={item.price} description={item.description} imageSrc={item.imageSrc} />);
      if (i % 4 === 3) {
        acc.push(<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>{rowContents}</div>);
        rowContents = [];
      }
      return acc;
    }, [])
    contents.push(<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>{rowContents}</div>);

    return (
      <div style={{ paddingTop: 100 }}>
        <MyNav/>
        {contents}
      </div>
    )
  }
}