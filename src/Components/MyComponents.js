import React, { useState } from 'react';
import { Link } from 'react-router-dom'


//My Input

export function MyInput(Props) {
    const styles = {
        label: {
            color: 'white',
            textAlign: 'left',
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: 14,
        },
        input: {
            backgroundColor: "#096491",
            border: "none",
            marginTop: -5,
            marginBottom: 10,
            padding: 10,
            borderRadius: 20,
            color: 'white',
            width: 100 + "%",
        },
        container: {
            width: 100 + "%",
        }
    };
    return (
        <div style={{ ...styles.container, ...Props.containerStyle }}>
            {Props.label ? <h6 style={{ ...styles.label, ...Props.labelStyle }}>{Props.label}</h6> : null}
            <input type={Props.inputType ? Props.inputType : "text"} style={{ ...styles.input, ...Props.inputStyle }} name={Props.name} onChange={Props.onChange} placeholder={Props.placeHolder} />
        </div>
    )
};



//My Button


export function MyBtn(Props) {
    let styles = {
        button: {
            background: Props.startColor || Props.endColor ? 'linear-gradient(90deg,' + Props.startColor + ' 0%,' + Props.endColor + ' 100%)' : 'linear-gradient(90deg,#13c0cf 0%,#1390cf 100%)' ,
            width: 100 + "%",
            border: "2px solid aqua",
            padding: "5px",
            borderRadius: "20px",
            fontSize: "larger",
            fontWeight: "bold",
            marginTop: "10px",
            textAlign: "center",
            transition: "all",
            transitionDuration: "500ms",
        },
    };
    function clicked() {
        console.log("MyBtnClicked")
    }
    return (
        <h2 onClick={Props.disableOnClick ? null : Props.onClick ? Props.onClick : () => clicked()} style={{ ...styles.button, ...Props.style }} className={Props.className} >{Props.title}</h2>
    )
};




//Row Text


export function RowText(Props) {
    let styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
        }
    };
    return (
        <div style={styles.container}>
            <h6 style={Props.LeftStyle}>{Props.text}</h6>
            {Props.navigate ? <TextNavigate style={Props.RightStyle} ToRoute={Props.toRoute} text={Props.rightText} />
                :
                <h6 style={Props.RightStyle}>{Props.rightText}</h6>
            }
        </div>
    )
};


//Text Navigate


export function TextNavigate(Props) {
    let styles = {
        text: {
            color: 'white'
        },
    };
    return (
        <Link className="removeDecoration" to={Props.ToRoute}>
            <h6 style={{ ...styles.text, ...Props.style }}>{Props.text}</h6>
        </Link>
    )
};


//Navbar


export function MyNav() {
    const styles = {
        container: {
            width: 100 + "%",
            position: 'fixed',
            top: 0,
            backgroundColor: "#00aaff",
            borderBottom: '1px solid black',
            padding: 5,
            zIndex:99
        },
        link: {
            color: 'white',
            marginLeft: 20,
            display:'flex',
            flex:1,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        },
        logo: {
            maxHeight: 50,
            maxWidth: 150,
        },
        linkCon:{
            display:'flex',
            flex:1,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
        },
        smNavLinkSubCon:{
            color:'white',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
        },
        subCon:{
            display: 'flex',
            flex: 1,
            justifyContent:'space-around !important',
            flexDirection: "row",
            alignItems: 'center',
        },
        navLinkSubCon:{
            color:'white',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        },
        navLinkIcon:{
            fontSize:20,
            marginBottom:-5
        }
    };
    const [moreShown, ToggleShown] = useState(false);
    return (
        <div style={styles.container}>
            <div style={styles.subCon}>
            <Link to="/">
            <img style={styles.logo} className="navLogo" src={require("../images/logo.png")} alt="Logo"/>
            </Link>
            <div className="navSearch" style={{display:'flex',flexDirection:'row'}}>
            <MyInput name="Search" placeHolder="Search" inputStyle={{margin:0,padding:5,borderRadius:10,borderTopRightRadius:0,borderBottomRightRadius:0}}/>
            <MyBtn className="HoverEffect" style={{borderLeftWidth:0,borderRadius:0,margin:0,color:'white',width:50,padding:2,textAlign:'center', borderTopRightRadius:10,borderBottomRightRadius:10}} title={<MyIcon iconClass="fa fa-search" iconStyle={{color:'white',fontSize:20}}/>}/>
            </div>
            <div style={styles.linkCon}>

            <MyNavLink to="/Profile" linkClass="removeDecoration navLink" linkText="Sell" iconClass="fa fa-camera" subConStyle={styles.navLinkSubCon} iconStyle={{marginBottom:-5}}/>
            <MyNavLink to="/Profile" linkClass="removeDecoration navLink" linkText="My Ads" iconClass="fa fa-bars" subConStyle={styles.navLinkSubCon} iconStyle={{marginBottom:-5}}/>
            <MyNavLink to="/Profile" linkClass="removeDecoration navLink" linkText="Profile" iconClass="fa fa-user" subConStyle={styles.navLinkSubCon} iconStyle={{marginBottom:-5}}/>

            <MyIcon iconClass={moreShown ? "fa fa-times HoverPointer navExtraBtn":"fa fa-bars HoverPointer navExtraBtn"} iconStyle={{color:'white',fontSize:40}} onClick={()=>ToggleShown(!moreShown)}/>
            </div>
            </div>
            {moreShown ? 
            <div className="navExtra" style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
            <MyNavLink to="/Profile" linkClass="removeDecoration navSmLink" linkText="Sell" iconClass="fa fa-camera" subConStyle={styles.smNavLinkSubCon} iconStyle={{marginRight:5}}/>
            <MyNavLink to="/Profile" linkClass="removeDecoration navSmLink" linkText="My Ads" iconClass="fa fa-bars" subConStyle={styles.smNavLinkSubCon} iconStyle={{marginRight:5}}/>
            <MyNavLink to="/Profile" linkClass="removeDecoration navSmLink" linkText="Profile" iconClass="fa fa-user" subConStyle={styles.smNavLinkSubCon} iconStyle={{marginRight:5}}/>
            </div> : null}
        </div>
    )
};

// Nav link
export function MyNavLink(Props){
    return(
        <Link to={Props.to} className={Props.linkClass}>
            <div style={Props.subConStyle}>
            <i className={Props.iconClass} style={Props.iconStyle}></i>
            {Props.linkText}
            </div>
        </Link>
    )
}

//My Icon

export function MyIcon(Props){
    return(
        <div style={Props.containerStyle}>
        <i className={Props.iconClass} onClick={Props.onClick} style={Props.iconStyle}></i>
        </div>
    )
}

//Logo With Text

export function MyLogoText(Props){
    let styles = {
        text: {
            color: 'white',
            fontSize:14,
            fontWeight:'bold',
            fontStyle:'italic',
            marginTop:-10,
            textAlign:'center'
        },
    };
    return(
        <div style={Props.containerStyle}>
        <img style={Props.imageStyle} alt="Loading" src={Props.imageSrc} />
        <h6 style={{...styles.text,...Props.textStyle}}>{Props.text}</h6>
        </div>
    )
}

//Item Card

export function MyItemCard(Props){
    let styles = {
        titleStyle: {
            fontWeight:'bold',
        },
        imageStyle:{
            width:100+"%",
            height:200+"px",
        },
        containerStyle:{
            color:'white',
            borderTopRightRadius:20,
            borderTopLeftRadius:20,
            boxShadow: '0 0 20px black',
            borderBottomRightRadius:10,
            borderBottomLeftRadius:10,
            overflow:'hidden',
            margin:10
        },
        priceStyle:{
            marginTop:-10,
            fontStyle:"italic",
        },
        textContainerStyle:{
            border:'1px solid black',
            backgroundColor:"#00aaff",
            padding:10,
            borderBottomRightRadius:10,
            borderBottomLeftRadius:10,
        },
        descStyle:{
            marginTop:-5
        }
    };
    return(
        <div style={{...styles.containerStyle,...Props.containerStyle}}>
        <img style={{...styles.imageStyle,...Props.imageStyle}} alt="Loading" src={Props.imageSrc} />
        <div style={{...styles.textContainerStyle,...Props.textContainerStyle}}>
        <h4 style={{...styles.titleStyle,...Props.titleStyle}}>{Props.title}</h4>
        <h6 style={{...styles.priceStyle,...Props.priceStyle}}>{Props.price}</h6>
        <h5 style={{...styles.descStyle,...Props.descStyle}}>{Props.description}</h5>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Link to="/Item/1" className="removeDecoration" style={{width:60+"%"}}>
        <MyBtn title="More" className="HoverEffect" style={{color:'white'}}/>
        </Link>
        </div>
        </div>
        </div>
    )
}

export function ItemDetailRow(Props) {
    let styles = {
        container: {
            display: 'flex',
            flex:1,
            flexDirection: 'row',
            background: Props.bgDark ? "#1377a8" : 'transparent',
            color:'white',
            borderRadius:10,
        },
        iconStyle:{
            marginRight:20,
        },
        titleStyle:{
            fontWeight:'bold'
        },
        detailStyle:{
            fontStyle:'italic'
        }
    };
    return (
        <div style={{...styles.container,...Props.containerStyle}} className={Props.containerClass}>
            <div style={{display: 'flex',flexDirection:'row',flex:1}}>
            <MyIcon iconClass={Props.iconClass} containerStyle={{display:'flex',justifyContent:'center',alignItems:'center',padding:0,margin:0}} icon iconStyle={{...styles.iconStyle,...Props.iconStyle}}/>
            <h4 style={{...Props.titleStyle,...styles.titleStyle}} className={Props.titleClass} >{Props.title}</h4>
            </div>
            <div style={{flex:1}}>
            <h4 style={{...Props.detailStyle,...styles.detailStyle}} className={Props.detailClass}>{Props.detail}</h4>
            </div>
        </div>
    )
};
