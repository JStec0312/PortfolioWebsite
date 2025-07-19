'use client';
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Portfolio = () => {
    const { t } = useLanguage();
    
    const projects = [
        {
            title: t.project1Title,
            description: t.project1Desc,
            img: "/images/ws1.png",
            link: "https://restaurant-website-tawny-sigma.vercel.app"
        },
        {
            title: t.project2Title,
            description: t.project2Desc,
            img: "/images/ws2.png",
            link: "https://streetwear-shop-vert.vercel.app"
        },
        {
            title: t.project3Title,
            description: t.project3Desc,
            img: "/images/ws3.png",
            link: "https://photograph-website-l9x7.vercel.app"
        }
    ];

    return(
        <section id="Portfolio" className="bg-transparent text-white">
            <h2 className="text-3xl font-bold mb-8 font-header text-h3">{t.portfolioTitle}</h2>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8">
                {projects.map((project, i) => (
                <div key={i} className="bg-white/5 shadow-secondary  backdrop-blur-sm rounded-xl shadow-2xl  group overflow-hidden">
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
                  <a href={project.link} target="_blank" className="inline-block font-main mt-4 text-sm text-[#D5F60C] underline cursor-pointer hover:text-white">
                    {t.viewProject}
                  </a>
                </div>
              </div>
            
                ))}
            </div>
        </section>
    )
}

export default Portfolio;