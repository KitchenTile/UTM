import React, {useState} from "react";
import "./Navbar.css"

const Navbar = () => {

    const [burgerBarState, setBurgerBarState] = useState("burgerBar");
    const [slidingBarState, setSlidingBarState] = useState("slidingBar");
    const [menuState, setMenuState] = useState("menu");
    const [isClicked, setIsClicked] = useState(false);

    const pages = ["HOME", "ABOUT", "FAQ", "CONTACT"];
    const services = ["TECH CLUB", "TECH CAMP", "BREAKFAST CLUB"];

    const toggleMenu = () => {
        if (!isClicked) {
            setBurgerBarState("burgerBar clicked");
            setMenuState("menu show");
        } else {
            setBurgerBarState("burgerBar unclicked");
            setMenuState("menu hidden");
        }
        setIsClicked(!isClicked);
    }

    const toggleServices = () => {
        if (!isClicked) {
            setSlidingBarState("slidingBar clicked");
            setMenuState("menu show");

        } else {
            setSlidingBarState("slidingBar unclicked");
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
                <div className={menuState} id="down">
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
                <div className={menuState} id="side">
                    <a href='/TECHCLUB'>TECH CLUB</a>
                    <a href='/TECHCAMP'>TECH CAMP</a>
                    <a href='/BREAKFASTCLUB'>BREAKFAST CLUB</a>
                </div>
                <div className={slidingBarState} onClick={toggleServices}>SERVICES</div>
                <a href='/HOME'>HOME</a>
                <a href='/ABOUT'>ABOUT</a>
                <a href='/FAQ'>FAQ</a>
                <a href='/CONTACT'>CONTACT</a>
            </div>
        </>
    )
   
}

export default Navbar;