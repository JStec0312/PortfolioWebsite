"use client";
import { useEffect, useState } from "react";

export default function PageLoader({ show = true }) {
  const [hidden, setHidden] = useState(false);     // czy już usunąć z DOM
  const [progress, setProgress] = useState(0);     // “fałszywy” postęp

  /* ── symulacja postępu ── */
  useEffect(() => {
    if (!show) {          // kiedy rodzic oznajmi gotowość
      setProgress(100);   // dokończ pasek
      return;
    }

    const int = setInterval(() => {
      setProgress((p) => (p < 95 ? p + (100 - p) * 0.5 : p));
    }, 120);

    return () => clearInterval(int);
  }, [show]);

  /* ── po zakończeniu fade-outu odmontuj ── */
  const handleEnd = () => {
    if (!show) setHidden(true);
  };

  if (hidden) return null;

  return (
    <div
      role="status"
      onTransitionEnd={handleEnd}
      className={`
        fixed inset-0 z-50 flex flex-col items-center justify-center
        bg-primary transition-opacity duration-700 h-screen overflow-hidden
        ${show ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* kola / punkty */}
      <div className="relative w-32 h-32 mb-5">
        {/* zewn. obręcz */}
        <div className="absolute inset-0 border-4 border-[#D5F60C] rounded-full animate-spin opacity-30" />
        {/* pulsujące koło */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#D5F60C] rounded-full animate-pulse" />
        {/* cztery kropki */}
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "3s" }}
        >
          {["top-0 left-1/2 -translate-x-1/2",
            "bottom-0 left-1/2 -translate-x-1/2",
            "left-0 top-1/2 -translate-y-1/2",
            "right-0 top-1/2 -translate-y-1/2"].map((cls) => (
            <div key={cls} className={`absolute w-5 h-5 bg-[#D5F60C] rounded-full ${cls}`} />
          ))}
        </div>
      </div>

      {/* pasek postępu */}
      <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#D5F60C] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* % */}
      <div className="text-[#D5F60C] font-header font-bold mt-3">
        {Math.round(progress)}%
      </div>
      <span className="sr-only">Loading {Math.round(progress)}%</span>
    </div>
  );
}