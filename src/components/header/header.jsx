import React from "react";
import "./header.css";
import logo from "../../assets/UTMLogo.webp";

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={logo} alt="logo" id="logo"/>
                <h1 className="title"> U TEACH MI </h1>
            </div>
        </>
    )
}

export default Header;