'use client';
import React from "react";
const projects=[
    {
    title: "SCRAPSS STUDIO",
    description: "Description of project 1",
    img: "https://images.ctfassets.net/lzny33ho1g45/5VGvMMdX169JCk60IJCRDA/358a2d3f62c6028d978efc382cb83ad5/image10.png?w=1400",
    },
    {
        title: "Fight Club",
        description: "Description of project 2",
        img: "https://images04.nicepage.com/feature/511177/create-any-website-with-powerful-website-builder-website-builder.jpg",
    },
    {
        title: "Strona klubu sztuk walki",
        description: "Description of project 3",
        img: "https://content-management-files.canva.com/18bc5b91-0539-4f80-8380-2e8fc8fcc5fa/0001.png"
    }
]
const Portfolio = () => {
    return(
        <section id="portfolio" className="py-16  bg-transparent text-white">
            <h2 className="text-3xl font-bold mb-8  font-header text-h3">Portfolio</h2>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 ">
                {projects.map((project, i) => (
                <div key={i}  className="bg-white/5 shadow-secondary  h-[400px] backdrop-blur-sm rounded-xl shadow-xl md:shadow-xl group overflow-hidden">
                <picture className="block overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </picture>
                
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-2 font-header text-[#D5F60C]">{project.title}</h3>
                  <p className="font-main text-body">{project.description}</p>
                  <button href={project.link} className="inline-block font-main mt-4 text-sm text-[#D5F60C] underline hover:text-white">
                    Zobacz projekt
                  </button>
                </div>
              </div>
              
            
                ))}
            </div>
        </section>

    )
}

export default Portfolio;