import React, { useState } from "react";
import "./header.css";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import UTMLogo from "../../../assets/UTM.svg"
import Facebook from "../../../assets/Facebook.svg"
import Instagram from "../../../assets/Instagram.svg"

const Header = () => {
    const [activeSection, setActiveSection] = useState(null);



    return (
        <div className="header">

            <img src={UTMLogo} alt="UTMLogo" id="logoSvg"/>
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <BurgerMenu />

            <div className="social-icons"
                    style={{
                        opacity: activeSection === "services" ? 0 : 1,  // Change opacity if "services" is active
                        transition: "opacity 0.5s ease-in-out",
                    }}>

                {/* Issue with these is, when using the svg file from the assets, since it's imported, I don't know how to access their paths and therefore, the Hover css does not work */}
                    {/* FACEBOOK */}
                <a href="/">
                    {/* <img src={Facebook} alt="facebook" /> */}
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 10.3333V23.6667C32 28.269 28.269 32 23.6667 32H10.3333C5.73097 32 2 28.269 2 23.6667V10.3333C2 5.73097 5.73097 2 10.3333 2H23.6667C28.269 2 32 5.73097 32 10.3333Z" stroke="black" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.3335 32.0002C15.3335 27.0002 15.3335 22.0002 15.3335 17.0002C15.3335 13.3543 16.1668 10.3335 22.0002 10.3335" stroke="black" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 18.6665H15.3333H22" stroke="black" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>

                    {/* INSTAGRAM */}
                <a href="/">
                    {/* <img src={Instagram} alt="instagram" /> */}
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0002 23.6668C20.682 23.6668 23.6668 20.682 23.6668 17.0002C23.6668 13.3183 20.682 10.3335 17.0002 10.3335C13.3183 10.3335 10.3335 13.3183 10.3335 17.0002C10.3335 20.682 13.3183 23.6668 17.0002 23.6668Z" stroke="black" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 23.6667V10.3333C2 5.73097 5.73097 2 10.3333 2H23.6667C28.269 2 32 5.73097 32 10.3333V23.6667C32 28.269 28.269 32 23.6667 32H10.3333C5.73097 32 2 28.269 2 23.6667Z" stroke="black" stroke-width="3.5" />
                        <path d="M26.167 7.85199L26.1854 7.83154" stroke="black" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>


                    {/* YOUTUBE */}
                <a href="/">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 23.6667V10.3333C2 5.73097 5.73097 2 10.3333 2H23.6667C28.269 2 32 5.73097 32 10.3333V23.6667C32 28.269 28.269 32 23.6667 32H10.3333C5.73097 32 2 28.269 2 23.6667Z" stroke="black" stroke-width="3.5"/>
                        <path d="M23.4813 15.2053C24.9711 15.938 24.9711 18.062 23.4813 18.7947L14.1652 23.3765C12.8362 24.0301 11.2825 23.0628 11.2825 21.5818V12.4182C11.2825 10.9372 12.8362 9.96989 14.1652 10.6235L23.4813 15.2053Z" fill="black" id="youtube"/>
                    </svg>
                </a>
            </div>

        </div>
    )
}

export default Header;