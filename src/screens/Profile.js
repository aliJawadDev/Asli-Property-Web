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
                justifyContent:'space-around'
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
                <div className="Card">
                    <div style={styles.row}>
                        <div style={{display:'flex',flex:5,flexDirection:'row',}}>
                        <div style={styles.nameLetterCon}>
                            <h4 style={styles.nameLetter}>U</h4>
                        </div>
                        <div style={{marginLeft:20,color:'white'}}>
                        <h4>USERNAME</h4>
                        <h4>0123456789</h4>
                        <h4>Email@gmail.com</h4>
                        </div>
                        </div>
                        <div style={{justifyContent:'end'}}>
                        <Link className="removeDecoration" to="/Edit/Profile" style={{color:'white'}}>
                        <MyBtn className="HoverEffect" disableOnClick={true} style={{padding:10}} title={<MyIcon iconClass="fa fa-edit" iconStyle={{fontSize:30}} />}/>
                        </Link>
                        </div>
                    </div>
                    <div style={styles.row}>
                    <MyBtn style={{color:'white',marginTop:20}} className="HoverEffect" title="Log Out"/>
                    </div>
                </div>
            </div>
        )
    }
}