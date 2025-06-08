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

  useEffect(() => {
    const preloadImages = async () => {
      const sources = ["/images/hero.png"];

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


      setIsReady(true);
    };

    preloadImages();
  }, []);

  if (!isReady) {
    return <PageLoader />; 
  }

  return (
    <main className="flex flex-col gap-5 font-main px-4 pt-4 md:px-8 max-w-[1600px] mx-auto">
      <Background />
      <Hero />
      <Label />
      <About />
      <Portfolio />
      <Colaboration />
      <Contact />
      <Footer/>
    </main>
  );
}
