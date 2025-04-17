'use client';
import React from "react";
import {useState} from "react";
import Logo from "../ui/Logo";
import { logos } from "../ui/Logo";
import Button from "../ui/Button";
import { useMediaQuery } from "react-responsive";

const About = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });;
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const [logoTitle, setLogoTitle] = useState("");
    const [logoDesc, setLogoDesc] = useState("");
    const [logoClicked, setLogoClicked] = useState(false);
    const handleLogoClick = (title, description) => {
        setLogoTitle(title);
        setLogoDesc(description);
        setLogoClicked(!logoClicked);
    }
    return(
        <>
            <section id="o-mnie" className="flex py-4 flex-col  lg:flex-row gap-10 lg:items-center  ">
                <div className="flex-1 flex flex-col gap-8 items-between justify-between  h-full">
                    {isDesktop && <h3 className="text-h3 text-secondary font-header leading-tight">DOŚWIADCZONY W → </h3>}
                    <div className="flex flex-col gap-4 ">
                        <h3 className="text-h3 text-text font-header leading-tight ">O MNIE</h3>
                        <p className="text-body text-text max-w-[700px] md:w-3/4 leading-relaxed">Stawiam na przejrzystość i prostotę – zarówno w kodzie, jak i w komunikacji z klientem.

Zaczynam od poznania Twoich potrzeb, potem projektuję w Figmie, konsultuję z Tobą, i dopiero wtedy siadam do kodu.

Korzystam z narzędzi, które przyspieszają pracę i dają nowoczesny efekt: React, Tailwind, Node.js, PostgreSQL.

Każda strona, którą robię, jest responsywna, zoptymalizowana i gotowa do działania na każdej platformie.</p>
                    </div>
                    {isMobile && <h3 className="text-h3 text-secondary font-header leading-tight">DOŚWIADCZONY W ↓ </h3>}
            
                </div>
                <div className="grid grid-cols-[fit-content(100%)_fit-content(100%)_fit-content(100%)] grid-rows-3 gap-8  lg:max-w-[700px] justify-between flex-1">
                {logos.map((logo, index) => {
                    let thisJusting = 'justify-center';
                    if (index % 3 === 0) {
                        thisJusting = 'justify-start';
                    } else if (index % 3 === 1) {
                        thisJusting = 'justify-center';
                    } else if (index % 3 === 2) {
                        thisJusting = 'justify-end';
                    }
                    return (
                        <Logo
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            title={logo.title}
                            description={logo.description}
                            justing={thisJusting}
                            clickAction={()=>handleLogoClick(logo.title, logo.description)}
                        />
                    );
                })}
                </div>
            </section>
            {logoClicked && (
                <div onClick={handleLogoClick} className="fixed inset-0 flex items-center justify-center  bg-black/50 z-10 p-4" >
                    <div className=" border-2  border-secondary bg-black/50 backdrop-blur-sm text-center  px-2 md:px-8  py-8 flex flex-col justify-center items-center gap-4 rounded-lg shadow-lg  w-full md:w-3/4 lg:w-[700px]">
                        <h3 className="text-3xl font-bold font-header text-justify  text-secondary ">{logoTitle}</h3>
                        <p className="text-body font-primary md:w-3/4  text-white">{logoDesc}</p>
                        <Button type="wyjdz" />
                    </div>
                </div>
            )}
        </>
        
    )
}
export default About;