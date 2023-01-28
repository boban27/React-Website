import React from "react";
import '../../App.css';
import CardItems from "../CardItems";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";


function Home(){
    return(
        <>
        <HeroSection />
        <Cards   />
        <Footer></Footer>
        </>
    )
}

export default Home;  