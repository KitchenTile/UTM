import React, {useState} from "react";
import "./Navbar.css"

const Navbar = () => {

    const [displayClass, setDisplayClass] = useState("burgerBar unclicked");
    const [menuState, setMenuState] = useState("menu hidden");
    const [isClicked, setIsClicked] = useState(false);

    const pages = ["HOME", "SERVICES", "ABOUT", "CONTACT"];

    const toggleMenu = () => {
        if (!isClicked) {
            setDisplayClass("burgerBar clicked");
            setMenuState("menu show");
            console.log(displayClass);
            console.log(menuState);
        } else {
            setDisplayClass("burgerBar unclicked");
            setMenuState("menu hidden");
        }
        setIsClicked(!isClicked);
    }


    const navLinks = pages.map((page, index) => {
        return (
            <a href={'/' + page} key={index}>
                &nbsp;{page}
            </a>
        )
    })

    const BurgerMenu = () => {
        return (
            <>
                <div className="burgerMenu" onClick={toggleMenu}>
                    <span className={displayClass}/>
                    <span className={displayClass}/>
                    <span className={displayClass}/>
                </div>
                <div className={menuState}>{navLinks}</div>
            </>
        )
    }

    return (
        <>
            <BurgerMenu />
            <div className="navLinks">{navLinks}</div>
        </>
    )
   
}

export default Navbar;