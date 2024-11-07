import { Link, useLocation } from "react-router-dom";
import techAdv from "../../../assets/techAdventure/techAdventure.svg";
import techAdvMobile from "../../../assets/techAdventure/techAdventureMobile.svg";
import "./Techadventure.css";

const Techadventure = () => {

    const scrollToSection = () => {
        if (window.location.pathname === "/") {
            const section = document.getElementsByClassName("servicesContainer")[0];
            if (section) {
              section.scrollIntoView();
            }
        } else {
            (window.location.href = "/#services")

        }
    };
    
    return (
        <div className="techAdventureContainer">
            <div className="imgContainer">
                <img src={techAdv} alt="techadventure" id="techAdveture" />
                <img src={techAdvMobile} id="techAdventureMobile"/>
            </div>
            <div className="textContainer">
                <h1>Let's have a tech adventure!</h1>
                <p>The wide range of activities and experiences offered at U Teach Mi empower your child to get out of their comfort zone and learn something new.</p>
                <button onClick={scrollToSection}>Book a Camp</button>
            </div>
        </div>
    )    
}

export default Techadventure;