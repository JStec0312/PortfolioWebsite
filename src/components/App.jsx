import { useEffect, useState } from "react";
import Hero from "./Hero";
import Background from "./Background";
import Label from "./Label";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Colaboration from "./Colaboration";
import Footer from "./Footer";

// Spinner jako osobny komponent
const Preloader = () => (
  <div className="h-screen w-screen flex items-center justify-center bg-black z-50 fixed top-0 left-0">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-secondary border-white"></div>
  </div>
);

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) return <Preloader />;

  return (
    <>
      <Background />
      <main className="flex flex-col gap-5 font-main px-4 pt-4 md:px-8 lg:px-16">
        <Hero />
        <Label />
        <About />
        <Portfolio />
        <Colaboration />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
