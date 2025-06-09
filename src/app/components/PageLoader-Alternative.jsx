"use client";
import { useEffect, useState } from "react";

export default function PageLoader({ children }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loaded) {
    return (
      <div role="status" className="flex flex-col items-center justify-center w-full bg-primary h-screen">
        {/* Logo-like loader */}
        <div className="relative w-32 h-32 mb-4">
          {/* Square outline */}
          <div className="absolute top-0 left-0 w-full h-full border-4 border-[#D5F60C] animate-pulse"></div>
          
          {/* Animated text elements that simulate code being written */}
          <div className="absolute top-1/4 left-1/4 w-1/2 h-2 bg-[#D5F60C] animate-pulse" 
               style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-2/4 left-1/4 w-3/4 h-2 bg-[#D5F60C] animate-pulse" 
               style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute top-3/4 left-1/4 w-1/3 h-2 bg-[#D5F60C] animate-pulse" 
               style={{ animationDelay: '0.6s' }}></div>
          
          {/* Blinking cursor */}
          <div className="absolute bottom-1/4 right-1/4 w-2 h-5 bg-[#D5F60C] animate-blink"></div>
        </div>
        
        {/* Loading text */}
        <div className="text-[#D5F60C] font-bold text-xl mt-4 font-header tracking-wider">
          ŁADOWANIE...
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return <>{children}</>;
}

// Add this to your tailwind.config.js if you haven't already:
// extend: {
//   keyframes: {
//     blink: {
//       '0%, 100%': { opacity: 1 },
//       '50%': { opacity: 0 },
//     },
//   },
//   animation: {
//     blink: 'blink 1s ease-in-out infinite',
//   },
// },
