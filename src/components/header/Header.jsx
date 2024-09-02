import React from "react";
import "./Header.css";
import logo from "../../assets/UTMLogo.webp";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <>
            <div className="header">
                <svg preserveAspectRatio="none" data-bbox="-0.003 0.03 312.544 183.06" viewBox="-0.003 0.03 312.544 183.06" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                    <path fill="#0ec167" d="M247.8 91.56c0 50.55-40.98 91.53-91.53 91.53-50.55 0-91.53-40.98-91.53-91.53 0-50.55 40.98-91.53 91.53-91.53 50.55 0 91.53 40.98 91.53 91.53z" data-color="1"></path>
                    <path d="M295.18 111c-10.84-7-27-14.79-46.75-22.69a787.09 787.09 0 0 0-83.83-27.49c-31-8.4-61.29-14.9-87.56-18.79-20.69-3.03-38.29-4.38-50.9-3.82-9.91.44-23.35 2.07-25.8 11.07-1.87 6.93 3.85 14.06 18.57 23.14 11 6.75 26.77 14.39 45.8 22.12 0-4 .16-7.63.41-10.64-15.9-6.59-29.34-13.06-39.06-18.85-13.94-8.29-15.77-12.46-16-13.23 1.65-2.39 16.67-7.13 65.51.1 25.9 3.83 55.78 10.25 86.41 18.56a774.26 774.26 0 0 1 82.74 27.14c46.94 18.76 57.65 30.63 57.82 33.48-2.05 2.14-17.55 6.11-63.86-.23-1.35 2.75-3.06 6-5.06 9.39 18.67 2.68 35 4.08 47.52 4.08h2.94c17.56-.33 26.23-3.56 28.11-10.48 2.46-9.11-8.53-17.4-17.01-22.86z" fill="#c6f4eb" data-color="2"></path>
                </svg>
                <img src={logo} alt="logo" id="logo"/>
                {/* <h1 className="title"> U TEACH MI </h1> */}
                <Navbar />
            </div>
        </>
    )
}

export default Header;