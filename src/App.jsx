import React from "react";
import { Link } from "react-router-dom";

function Mtavari () {
    const links = {
        textDecoration : "none",
        color : "white",
        backgroundColor : "gray",
        padding : "20px",
        borderRadius : "20px"
    }
    return(
        <React.Fragment>
            <nav>
                <Link to={"/Mtavari"} style={links}>მთავარი</Link>
                <Link to={"/contact"} style={links}> კონტაქტი </Link>
                <Link to={"/aboutus"} style={links}>ჩვენს შესახებ</Link>
            </nav>
        </React.Fragment>
    )
}

export default Mtavari;

