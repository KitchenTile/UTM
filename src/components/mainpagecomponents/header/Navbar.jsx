import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ activeSection, setActiveSection }) => {

    const sections = {
        services: ["Tech Club", "Tech Camp", "Breakfast Camp", "After School Care"],
        about: ["Meet the staff", "Our Story", "FAQs"],
    };

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <>
            <div className="navLinks">
                <div
                    className={activeSection === "services" ? "slidingServices hovered" : "slidingServices"}
                    onMouseEnter={() => toggleSection("services")}
                    onMouseLeave={() => toggleSection(null)}
                >
                    <div>Our Services</div>
                    <div className={activeSection === "services" ? "menu show" : "menu hidden"}
                    style={{
                        width: activeSection === "services" ? `${152 * sections.services.length}px` : "0px",
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
                    className={activeSection === "about" ? "slidingAbout hovered" : "slidingAbout"}
                    onMouseEnter={() => toggleSection("about")}
                    onMouseLeave={() => toggleSection(null)}
                >
                    <div>About Us</div>
                    <div className={activeSection === "about" ? "menu show" : "menu hidden"}
                     style={{
                        width: activeSection === "about" ? `${115 * sections.about.length}px` : "0px",
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