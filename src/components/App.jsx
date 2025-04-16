import { useEffect, useState } from "react";
import Hero from "./Hero";
import Background from "./Background";
import Label from "./Label";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Colaboration from "./Colaboration";
import Footer from "./Footer";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  return (
    <>
      <Background />
      <main className="flex  flex-col gap-5 font-main px-4 pt-4 md:px-8 lg:px-16">
        <Hero />
        <Label />
        <About />
        <Portfolio />
        <Colaboration />
        <Contact />
        <Footer/>
      </main>
    </>
  );
}
