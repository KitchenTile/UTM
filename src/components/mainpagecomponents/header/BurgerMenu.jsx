import React, {useState} from "react";

import "./BurgerMenu.css";

const BurgerMenu = () => {

    const [burgerBarState, setBurgerBarState] = useState("burgerBar unclicked");
    const [menuVisible, setMenuVisible] = useState(false);
    const [activeSection, setActiveSection] = useState(null);


    const sections = {
        services: ["Tech Club", "Tech Camp", "Breakfast Camp", "After School Care"],
        about: ["Meet the staff", "Our Story", "FAQs"],
    };

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };
    

    const toggleMenu = () => {
        setBurgerBarState(burgerBarState === "burgerBar unclicked" ? "burgerBar clicked" : "burgerBar unclicked");
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <div className="burgerMenu" onClick={toggleMenu}>
                <span className={burgerBarState} />
                <span className={burgerBarState} />
                <span className={burgerBarState} />
            </div>


            <div className={menuVisible ? "menu show" : "menu hidden"} id="down"
            style={{
                transform: menuVisible ? "scaleY(1)" : "scaleY(0)"
            }}>
                <div
                    className={activeSection === "services" ? "slidingDownServices clicked" : "slidingDownServices"}
                    onClick={() => toggleSection("services")}
                    id="down"
                >
                    <div>Our Services</div>
                    <div className={activeSection === "services" ? "servicesMenu show" : "servicesMenu hidden"}
                    style={{
                        height: activeSection === "services" ? `${20 * sections.services.length}px` : "0px",
                        transform: activeSection === "services" ? "scaleY(1)" : "scaleY(0)"

                    }}
                    id="down">
                        {sections.services.map((service, index) => (
                            <a href={`/${service.replace(/\s/g, "").toUpperCase()}`} className="linkDown" key={index}>
                                {service}
                            </a>
                        ))}
                    </div>
                </div>
                {/* </div> */}
                <a href='/ABOUTUS'>About Us</a>
                <a href='/ACCOUNT'>Account</a>
            </div>
        </>
    );
};

export default BurgerMenu;