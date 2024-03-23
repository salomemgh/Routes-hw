import React from "react";
import Mtavari from "./App"

function Contact () {
    const style = {
        backgroundColor : "blue",
        color : "yellow"
    }
    
    return(
        <React.Fragment>
            <Mtavari />
            <h1 style={style}>კონტაქტი</h1>
        </React.Fragment>
    )
}

export default Contact;