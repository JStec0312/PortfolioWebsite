import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative w-full flex flex-col items-center font-header">
            <div className="flex justify-between items-center w-full  py-2">
                <h3 className="text-text text-[30px]">Jakub Stec</h3>

                {/* Desktop menu */}
                <ul className="hidden md:flex gap-6 text-[30px]">
                    <li className="cursor-pointer text-text hover:text-secondary transition">O mnie</li>
                    <li className="cursor-pointer text-text hover:text-secondary transition">PORTFOLIO</li>
                    <li className="cursor-pointer text-text hover:text-secondary transition">KONTAKT</li>
                </ul>

                {/* Hamburger */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex items-center justify-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-auto w-[30px]" x="0px" y="0px" viewBox="0,0,256,256">
                                <g fill="white" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                    <g transform="scale(5.12,5.12)">
                                        <path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path>
                                    </g>
                                </g>
                        </svg>
                    </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`w-full overflow-hidden transition-all duration-300 ease-in-out bg-background text-text md:hidden
                ${isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"}
            `}>
                <ul className="flex flex-col  gap-4 border-t-2 border-secondary pt-4">
                    <li className="cursor-pointer text-2xl hover:text-secondary transition">O mnie</li>
                    <li className="cursor-pointer text-2xl hover:text-secondary transition">PORTFOLIO</li>
                    <li className="cursor-pointer text-2xl hover:text-secondary transition">KONTAKT</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
