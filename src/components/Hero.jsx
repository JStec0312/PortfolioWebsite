'use client'
import React from "react";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
const Hero = () => {
    return(
        <section className=" md:max-h-[100dvh]  flex flex-col gap-4">
            <Navbar/>
            <HeroContent/>
        </section>
    )
}
export default Hero;