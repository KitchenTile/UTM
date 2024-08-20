import React, {useState} from "react";
import "./Navbar.css"

const Navbar = () => {

    const [burgerBarState, setburgerBarState] = useState("burgerBar");
    const [slidingBarState, setslidingBarState] = useState("slidingBar");
    const [menuState, setMenuState] = useState("menu");
    const [isClicked, setIsClicked] = useState(false);

    const pages = ["HOME", "ABOUT", "FAQ", "CONTACT"];
    const services = ["TECH CLUB", "TECH CAMP", "BREAKFAST CLUB"];

    const toggleMenu = () => {
        if (!isClicked) {
            setburgerBarState("burgerBar clicked");
            setMenuState("menu show");
        } else {
            setDisplayClass("burgerBar unclicked");
            setMenuState("menu hidden");
        }
        setIsClicked(!isClicked);
    }

    const toggleServices = () => {
        if (!isClicked) {
            setDisplayClass("slidingBar clicked");
            setMenuState("menu show");

        } else {
            setslidingBarState("slidingBar unclicked");
            setMenuState("menu hidden");
        }
        setIsClicked(!isClicked);
    }

    const BurgerMenu = () => {
        return (
            <>
                <div className="burgerMenu" onClick={toggleMenu}>
                    <span className={burgerBarState}/>
                    <span className={burgerBarState}/>
                    <span className={burgerBarState}/>
                </div>
                <div className={menuState}>
                <a href='/SERVICES'>SEVICES</a>
                <a href='/HOME'>HOME</a>
                <a href='/ABOUT'>ABOUT</a>
                <a href='/FAQ'>FAQ</a>
                <a href='/CONTACT'>CONTACT</a>
                </div>
            </>
        )
    }

    return (
        <>
            <BurgerMenu />
            <div className="navLinks">
                <div id={slidingBarState} onClick={toggleServices}>SERVICES</div>
                <a href='/HOME'>HOME</a>
                <a href='/ABOUT'>ABOUT</a>
                <a href='/FAQ'>FAQ</a>
                <a href='/CONTACT'>CONTACT</a>
            </div>
        </>
    )
   
}

export default Navbar;