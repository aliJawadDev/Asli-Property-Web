import React from 'react'

function MyBtn(Props) {
    let styles = {
        button: {
            background: 'linear-gradient(90deg,' + Props.startColor + ' 0%,' + Props.endColor +' 100%)',
            width: 100+"%",
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
      function clicked(){
          console.log("MyBtnClicked")
        }
    return (
    <h2 onClick={Props.onClick? Props.onClick : ()=>clicked()} style={{...styles.button,...Props.style}} className="HoverEffect" >{Props.title}</h2>
    )
  };

  export default MyBtn;