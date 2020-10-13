import React, { Component } from 'react'
import '../App.css'
import { MyNav, MyItemCard } from '../Components/MyComponents'
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';

export default class Home extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      data: [],
      loading:true
    }
  }
  componentDidMount() {
    axios.get(`https://property12.herokuapp.com/api/banner/get`)
      .then(response => {
        this.setState({ data: response.data.data })
        this.setState({loading:false})
      }).catch(error => {
        if (error) {
        }
      });
  }
  render() {
    let rowContents = [];
    const contents = this.state.data.reduce((acc, item, i) => {
      rowContents.push(<MyItemCard containerStyle={{ width: 18 + "em" }} title={item.title} toRoute={"/Item/" + item._id} price={item.price} description={item.description} imageSrc={item.image[0]} />);
      if (i % 4 === 3) {
        acc.push(<div className="lg-home-cards-con" style={{ flexDirection: 'row', justifyContent: 'space-around' }}>{rowContents}</div>);
        rowContents = [];
      }
      return acc;
    }, [])
    contents.push(<div className="lg-home-cards-con" style={{ flexDirection: 'row', justifyContent: 'space-around' }}>{rowContents}</div>);

    let smRowContents = [];
    const smContents = this.state.data.reduce((acc, item, i) => {
      smRowContents.push(<MyItemCard containerStyle={{ width: 18 + "em" }} title={item.title} toRoute={"/Item/" + item._id} price={item.price} description={item.description} imageSrc={item.image[0]} />);
      if (i % 2 === 1) {
        acc.push(<div className="sm-home-cards-con" style={{ flexDirection: 'row', justifyContent: 'space-around' }}>{smRowContents}</div>);
        smRowContents = [];
      }
      return acc;
    }, [])
    smContents.push(<div className="sm-home-cards-con" style={{ flexDirection: 'row', justifyContent: 'space-around' }}>{smRowContents}</div>);

    return (
      <LoadingOverlay
        active={this.state.loading}
        spinner
        text='Fetching Data'>
      <div style={{ paddingTop: 80,minHeight:100+"vh" }}>
        <MyNav />
        {contents}
        {smContents}
      </div>
      </LoadingOverlay>
    )
  }
}