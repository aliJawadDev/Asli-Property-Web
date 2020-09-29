import React from 'react'
import TextNavigate from '../Components/TextNavigate'

function RowText(Props) {
    let styles = {
        container:{
            display:'flex',
            flexDirection:'row',
        }
      };
    return (
        <div style={styles.container}>
            <h6 style={Props.LeftStyle}>{Props.text}</h6>
            {Props.navigate ? <TextNavigate style={Props.RightStyle} ToRoute={Props.toRoute} text={Props.rightText}/>
            :
            <h6 style={Props.RightStyle}>{Props.rightText}</h6>
            }
        </div>
    )
  };

  export default RowText;