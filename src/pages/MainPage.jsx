import React from "react";
import './MainPage.css'
import Header from "../components/mainpagecomponents/header/Header";
import Hero from "../components/mainpagecomponents/hero/hero";
import Ourservices from "../components/mainpagecomponents/ourservices/OurServices";
import Moreonus from "../components/mainpagecomponents/moreonus/Moreonus";


const MainPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Ourservices />
            <Moreonus />
        </>
    );
};

export default MainPage;