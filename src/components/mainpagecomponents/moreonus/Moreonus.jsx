import React from "react";
import "./Moreonus.css";
import moreOnUsPicture from "../../../assets/moreOnUsPicture/moreOnUsPicture.svg";
import MoreOnUsTwirls from "../../../assets/moreOnUsPicture/MoreOnUsTwirls.svg";

const Moreonus = () => {
    return (
        <div className="moreOnUsContainer">
            <img src={MoreOnUsTwirls} alt="MoreOnUsTwirls" id="MoreOnUsTwirls" /> 
            <div className="moreOnUsText">
                <h1>More On Us</h1>
                <p>We host Ofsted Registered After School Technology Clubs, After School Care, Breakfast Clubs and thrilling Holiday Tech Camps in primary schools across the UK as well as new Online Learning Courses. </p>
                <button /*onClick={}*/ title="learnMore" id={`learnMoreButton`}>More about U Teach Mi</button>
            </div>
            <img src={moreOnUsPicture} alt="moreOnUsPicture" id="moreOnUsPicture" />
            
        </div>  
    )
}

export default Moreonus;