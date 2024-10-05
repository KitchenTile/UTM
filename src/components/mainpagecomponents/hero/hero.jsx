import React from "react";
import "./hero.css";
import Herologo from "../../../assets/Herologo.svg";
import OrangeBlob from "../../../assets/OrangeBlob.svg";
import MintBlob from "../../../assets/MintBlob.svg";


const Hero = () => {
    return (
        <>          
        <img src={OrangeBlob} alt="OrangeBlob" id="OrangeBlob" />
        <img src={MintBlob} alt="MintBlob" id="MintBlob" />
        <div className="HeroDiv">
            <img src={Herologo} alt="Herologo" id="Herologo"/>
            <div className="textDiv">
                <h2>U Teach Mi, your trusted partner for innovative learning.</h2>
                <h2>Explore and join us today to empower young minds with cutting-edge technology education!</h2>
            </div>
        </div>
        </>
    )
}

export default Hero;