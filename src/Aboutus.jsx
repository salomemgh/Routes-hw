import React from "react";
import Mtavari from "./App";

function Aboutus() {
    const color = {
        backgroundColor : "purple",
        color : "yellow"
    }

    return (
        <React.Fragment>
            <Mtavari />
            <h1 style={color}> ჩვენს შესახებ </h1>
        </React.Fragment>
    )
}

export default Aboutus;