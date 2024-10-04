import React, { useState, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [burgerBarState, setBurgerBarState] = useState("burgerBar");
    const [menuVisible, setMenuVisible] = useState(false);

    const sections = {
        services: ["Tech Club", "Tech Camp", "Breakfast Camp", "After School Care"],
        about: ["Meet the staff", "Our Story", "FAQs"],
    };

    // Refs to measure submenu heights
    const servicesRef = useRef(null);
    const aboutRef = useRef(null);

    const toggleMenu = () => {
        setBurgerBarState(burgerBarState === "burgerBar unclicked" ? "burgerBar clicked" : "burgerBar unclicked");
        setMenuVisible(!menuVisible);
    };

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const BurgerMenu = () => {
        return (
            <>
                <div className="burgerMenu" onClick={toggleMenu}>
                    <span className={burgerBarState} />
                    <span className={burgerBarState} />
                    <span className={burgerBarState} />
                </div>
                <div className={menuVisible ? "menu show" : "menu hidden"} id="down">
                    <a href='/SERVICES'>Our Services</a>
                    <a href='/ABOUTUS'>About Us</a>
                    <a href='/ACCOUNT'>Account</a>
                </div>
            </>
        );
    };

    return (
        <>
            <BurgerMenu />
            <div className="navLinks">
                <div
                    className={activeSection === "services" ? "slidingServices clicked" : "slidingServices"}
                    onMouseEnter={() => toggleSection("services")}
                    onMouseLeave={() => toggleSection(null)}
                >
                    <div>Our Services</div>
                    <div className={activeSection === "services" ? "menu show" : "menu hidden"}
                    ref={servicesRef}
                    style={{
                        width: activeSection === "services" ? `${105 * sections.services.length}px` : "0px",
                    }}
                    id="side">
                        {sections.services.map((service, index) => (
                            <a href={`/${service.replace(/\s/g, "").toUpperCase()}`} className="link" key={index}>
                                {service}
                            </a>
                        ))}
                    </div>
                </div>
                <div
                    className={activeSection === "about" ? "slidingAbout clicked" : "slidingAbout"}
                    onMouseEnter={() => toggleSection("about")}
                    onMouseLeave={() => toggleSection(null)}
                >
                    <div>About Us</div>
                    <div className={activeSection === "about" ? "menu show" : "menu hidden"}
                     ref={aboutRef}
                     style={{
                        width: activeSection === "about" ? `${80 * sections.about.length}px` : "0px",
                     }}
                    id="side">
                        {sections.about.map((item, index) => (
                            <a href={`/${item.replace(/\s/g, "").toUpperCase()}`} className="link" key={index}>
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
                <a href='/ACCOUNT'>Account</a>
            </div>
        </>
    );
};

export default Navbar;