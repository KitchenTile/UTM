import React, {useState} from "react";

import "./BurgerMenu.css";

const BurgerMenu = () => {

    const [burgerBarState, setBurgerBarState] = useState("burgerBar");
    const [menuVisible, setMenuVisible] = useState(false);

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
            <div className={menuVisible ? "menu show" : "menu hidden"} id="down">
                <a href='/SERVICES'>Our Services</a>
                <a href='/ABOUTUS'>About Us</a>
                <a href='/ACCOUNT'>Account</a>
            </div>
        </>
    );
};

export default BurgerMenu;