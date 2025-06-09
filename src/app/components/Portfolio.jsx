'use client';
import React from "react";
const projects = [
    {
        title: "Restauracja 'Twój Smak'",
        description: "Strona internetowa z systemem CMS i rezerwacjami online dla restauracji. Next.js, React, Node.js, PostgreSQL.",
        img: "/images/ws1.png",
        link: "https://restaurant-website-tawny-sigma.vercel.app"
    },
    {
        title: "Society Landscape",
        description: "Landing page dla sklepu ze streetwearem. React, Tailwind CSS. Animacje, responsywny design.",
        img: "/images/ws2.png",
        link: "https://streetwear-shop-vert.vercel.app"
    },
    {
        title: "Portfolio Fotografa",
        description: "Szablon strony portfolio dla fotografa. Next.js, React, Tailwind CSS. Minimalistyczny design, wysoka jakość zdjęć.",
        img: "/images/ws3.png",
        link: "https://photograph-website-l9x7.vercel.app"
    }
];

const Portfolio = () => {
    return(
        <section id="Portfolio" className="  bg-transparent text-white">
            <h2 className="text-3xl font-bold mb-8  font-header text-h3">Portfolio</h2>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 ">
                {projects.map((project, i) => (
                <div key={i}  className="bg-white/5 shadow-secondary   backdrop-blur-sm rounded-xl shadow-xl md:shadow-xl group overflow-hidden">
                <picture className="block overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </picture>
                
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-2 font-header text-[#D5F60C]">{project.title}</h3>
                  <p className="font-main text-md">{project.description}</p>
                  <a href={project.link} className="inline-block font-main mt-4 text-sm text-[#D5F60C] underline cursor-pointer hover:text-white">
                    Zobacz projekt
                  </a>
                </div>
              </div>
              
            
                ))}
            </div>
        </section>

    )
}

export default Portfolio;