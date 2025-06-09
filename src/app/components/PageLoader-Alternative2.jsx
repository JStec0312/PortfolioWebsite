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
      <div role="status" className="flex items-center justify-center w-full bg-primary h-screen">
        <div className="flex flex-col items-center">
          {/* Custom loader with staggered elements */}
          <div className="flex items-end space-x-2 mb-6">
            <div className="w-4 h-8 bg-[#D5F60C] animate-bounce" style={{ animationDelay: '0s', animationDuration: '0.8s' }}></div>
            <div className="w-4 h-12 bg-[#D5F60C] animate-bounce" style={{ animationDelay: '0.1s', animationDuration: '1s' }}></div>
            <div className="w-4 h-16 bg-[#D5F60C] animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '0.9s' }}></div>
            <div className="w-4 h-24 bg-[#D5F60C] animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '1.2s' }}></div>
            <div className="w-4 h-16 bg-[#D5F60C] animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '0.9s' }}></div>
            <div className="w-4 h-12 bg-[#D5F60C] animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '1s' }}></div>
            <div className="w-4 h-8 bg-[#D5F60C] animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '0.8s' }}></div>
          </div>
          
          {/* Progress bar */}
          <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-[#D5F60C] animate-progress"></div>
          </div>
          
          <div className="text-[#D5F60C] mt-4 font-header text-lg">WCZYTYWANIE STRONY</div>
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
//     progress: {
//       '0%': { width: '0%' },
//       '50%': { width: '70%' },
//       '100%': { width: '100%' }
//     },
//   },
//   animation: {
//     progress: 'progress 2.5s ease-in-out infinite',
//   },
// },
