import React from 'react'
import { Link } from 'react-router-dom'

function RowText(Props) {
    let styles = {
        text:{
            color:'white'
        },
      };
    return (
        <Link className="removeDecoration" to={Props.ToRoute}>
        <h6 style={{...styles.text,...Props.style}}>{Props.text}</h6>
        </Link>
    )
  };

  export default RowText;