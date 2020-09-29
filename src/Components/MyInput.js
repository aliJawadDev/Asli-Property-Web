import React from 'react'

function MyInput(Props) {
    const styles = {
        label:{
            color:'white',
            textAlign:'left',
            alignSelf:'flex-start',
            fontWeight:'bold',
            fontStyle:'italic',
            fontSize:14,
        },
        input:{
            backgroundColor:"#096491",
            border:"none",
            display:"flex",
            marginTop:-5,
            marginBottom:10,
            padding:10,
            borderRadius:20,
            color:'white',
            width:100+"%",
        },
        container:{
            width:100+"%"
        }
    };
    return (
        <div style={{ ...styles.container, ...Props.containerStyle }}>
            <h6 style={{ ...styles.label, ...Props.labelStyle }}>{Props.label}</h6>
            <input type={Props.inputType ? Props.inputType : "text"} style={{ ...styles.input, ...Props.inputStyle }} name={Props.name} onChange={Props.onChange} placeholder={Props.placeHolder} />
        </div>
    )
};

export default MyInput;