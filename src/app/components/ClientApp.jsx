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
import { LanguageProvider } from "../context/LanguageContext";

export default function ClientApp() {
  const [ready, setReady] = useState(false);          // obrazy gotowe
  const [fadeDone, setFadeDone] = useState(false);    // koniec animacji

  /* ───────── preload obrazków ───────── */
  useEffect(() => {
    const preload = async () => {
      const imgs = [
        "/images/hero.webp","/images/react.png","/images/next.png","/images/js.png",
        "/images/tailwind.png","/images/node.png","/images/html.png","/images/css.png",
        "/images/figma.png","/images/postgres.png","/images/projekt.png","/images/poznaje.png",
        "/images/kodowanie.png","/images/odbior.png"
      ];

      const minTime = 4000;                 // min 4 s loader
      const start   = Date.now();

      await Promise.all(imgs.map(src => new Promise(res => {
        const img = new Image();
        img.src = src;
        img.onload = img.onerror = res;
      })));

      const left = Math.max(0, minTime - (Date.now() - start));
      setTimeout(() => setReady(true), left);
    };

    preload();
  }, []);

  /* ───────── klasa fade dla maina ───────── */
  const mainClass = ready
    ? "opacity-100 transition-opacity duration-700"
    : "opacity-0 pointer-events-none";
  return (
    <>
      {/* tło zawsze obecne */}
      <Background className="fixed inset-0 -z-10" />

      {/* strona (początkowo niewidoczna) */}
      <LanguageProvider>
        <main
          className={`flex flex-col gap-16 font-main px-4 pt-4 md:px-8 max-w-[1600px] mx-auto ${mainClass}`}
          onTransitionEnd={() => setFadeDone(true)}
        >
          <div className="animate-slideUp" style={{ animationDelay: "0.2s" }}>
            <Hero />
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "0.3s" }}>
            <Label />
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "0.4s" }}>
            <About />
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "0.5s" }}>
            <Portfolio />
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "0.6s" }}>
            <Colaboration />
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "0.7s" }}>
            <Contact />
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "0.8s" }}>
            <Footer />
          </div>
        </main>
      </LanguageProvider>

      {/* loader znika dopiero kiedy main jest w pełni widoczny */}
      {!fadeDone && <PageLoader isContentLoaded={ready} />}
    </>
  );
}