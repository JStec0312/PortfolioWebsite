"use client";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import Background from "./Background";
import Label from "./Label";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import PageLoader from "./PageLoader";
import Colaboration from "./Colaboration";
import Footer from "./Footer";

export default function ClientApp() {
  const [isReady, setIsReady] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [components, setComponents] = useState(null);

  // Pre-render all components while loader is showing
  useEffect(() => {
    if (!isReady && !components) {
      // Pre-render all components
      const preRenderedComponents = (
        <main className="flex flex-col gap-5 font-main px-4 pt-4 md:px-8 opacity-0 absolute pointer-events-none">
          <Background />
          <Hero />
          <Label />
          <About />
          <Portfolio />
          <Colaboration />
          <Contact />
          <Footer />
        </main>
      );
      setComponents(preRenderedComponents);
    }
  }, [isReady, components]);

  useEffect(() => {
    const preloadImages = async () => {
      const sources = [
        "/images/hero.png",
        "/images/react.png",
        "/images/next.png",
        "/images/js.png",
        "/images/tailwind.png",
        "/images/node.png",
        "/images/html.png",
        "/images/css.png",
        "/images/figma.png",
        "/images/postgres.png",
        "/images/projekt.png",
        "/images/poznaje.png",
        "/images/kodowanie.png",
        "/images/odbior.png"
      ];
      const startTime = Date.now();
      const minimumLoadTime = 4000; // 4 seconds minimum loading time

      try {
        await Promise.all(
          sources.map(
            (src) =>
              new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve();
                img.onerror = () => resolve(); // nie blokuje nawet jak nie wczyta
              })
          )
        );
        
        // Mark content as loaded
        setContentLoaded(true);

        // Calculate remaining time to reach minimum load time
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);

        // Set a timeout to ensure minimum loading time
        setTimeout(() => {
          setIsReady(true);
        }, remainingTime);
      } catch (error) {
        console.error("Error preloading images:", error);
        // Still mark as ready after minimum time even if there's an error
        setTimeout(() => {
          setContentLoaded(true);
          setIsReady(true);
        }, minimumLoadTime);
      }
    };

    preloadImages();
  }, []);
  if (!isReady) {
    return (
      <>
        {/* Hidden pre-rendered components to ensure they're ready */}
        {components}
        {/* Loader visible to user */}
        <PageLoader isContentLoaded={contentLoaded} />
      </>
    );
  }
  return (
    <main className="flex flex-col gap-16 font-main px-4 pt-4 md:px-8 max-w-[1600px] mx-auto animate-fadeIn">
      <Background />
      <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
        <Hero />
      </div>
      <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
        <Label />
      </div>
      <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
        <About />
      </div>
      <div className="animate-slideUp" style={{ animationDelay: '0.5s' }}>
        <Portfolio />
      </div>
      <div className="animate-slideUp" style={{ animationDelay: '0.6s' }}>
        <Colaboration />
      </div>
      <div className="animate-slideUp" style={{ animationDelay: '0.7s' }}>
        <Contact />
      </div>
      <div className="animate-slideUp" style={{ animationDelay: '0.8s' }}>
        <Footer/>
      </div>
    </main>
  );
}
