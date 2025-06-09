"use client";
import { useEffect, useState, useRef } from "react";

export default function PageLoader({ children, isContentLoaded = false }) {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressTimerRef = useRef(null);
  const loadCompleteTimerRef = useRef(null);

  // Handle document load event
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

  // Control progress animation
  useEffect(() => {
    // Clear any existing timers when component mounts or remounts
    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (loadCompleteTimerRef.current) clearTimeout(loadCompleteTimerRef.current);
    };
  }, []);

  // Simulate progress for 4 seconds
  useEffect(() => {
    // Start progress animation
    progressTimerRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        // If content is loaded, accelerate to 100%
        if (isContentLoaded && prevProgress >= 95) {
          return 100;
        }
        
        // Normal case: increment slower at first, faster near the end
        if (prevProgress < 30) {
          return prevProgress + 1.5; // Start faster
        } else if (prevProgress < 70) {
          return prevProgress + 0.8; // Slow down in middle
        } else if (prevProgress < 90) {
          return prevProgress + 0.3; // Very slow near end
        } else {
          return prevProgress + 0.1; // Extremely slow at the very end
        }
      });
    }, 50);

    return () => {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, [isContentLoaded]);

  // Effect to handle progress completion
  useEffect(() => {
    if (progress >= 100) {
      // Clear the progress interval
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
      
      // Ensure we only hit 100% when content is ready
      if (!isContentLoaded) {
        setProgress(99.9);
      }
    }
  }, [progress, isContentLoaded]);

  // Render loader
  return (
    <div role="status" className="flex flex-col items-center justify-center w-full bg-primary h-screen fixed top-0 left-0 z-50">
      <div className="relative w-32 h-32 mb-4">
        {/* Rotating outer circle */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#D5F60C] rounded-full animate-spin opacity-30"></div>
        
        {/* Pulsing inner circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#D5F60C] rounded-full animate-pulse"></div>
        
        {/* Secondary circles rotating in opposite direction */}
        <div className="absolute top-0 left-0 w-full h-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#D5F60C] rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#D5F60C] rounded-full"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-[#D5F60C] rounded-full"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-[#D5F60C] rounded-full"></div>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="w-64 h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
        <div 
          className="h-full bg-[#D5F60C] transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Progress percentage */}
      <div className="text-[#D5F60C] font-bold mt-3 font-header">
        {Math.round(progress)}%
      </div>
      
      <span className="sr-only">Loading {Math.round(progress)}%</span>
    </div>
  );
}
