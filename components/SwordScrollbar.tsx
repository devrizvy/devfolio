"use client";

import { useEffect, useState } from "react";

export default function SwordScrollbar({ 
  targetRef, 
  isVisible 
}: { 
  targetRef: React.RefObject<HTMLElement | null>,
  isVisible: boolean 
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        if (!targetRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = targetRef.current;
        const maxScroll = scrollHeight - clientHeight;
        if (maxScroll <= 0) return;
        setProgress(scrollTop / maxScroll);
      });
    };

    const target = targetRef.current;
    if (target) {
      target.addEventListener("scroll", handleScroll);
      // init calculation
      handleScroll();
      // window resizes change scroll heights
      window.addEventListener("resize", handleScroll);
    }

    return () => {
      if (target) target.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [targetRef, isVisible]);

  return (
    <div 
      className={`absolute right-0 md:right-0 top-[15%] bottom-[15%] w-8 pointer-events-none z-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-x-0 delay-700" : "opacity-0 translate-x-10"
      }`}
    >
      {/* The glowing track crevice */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.15)] rounded-full" />
      
      {/* The Sword */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 w-4 md:w-5 h-20 md:h-24"
        style={{
          top: `calc(${progress * 100}% - ${progress * 6}rem)`, // 6rem is roughly h-24 max bounds
        }}
      >
        <svg viewBox="0 0 24 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] opacity-90 hover:opacity-100 transition-opacity">
          {/* Pommel */}
          <circle cx="12" cy="4" r="3" fill="#e0dfd5" />
          {/* Grip */}
          <rect x="10" y="7" width="4" height="15" fill="#2a2a2a" stroke="#111" strokeWidth="0.5" />
          <line x1="10" y1="10" x2="14" y2="12" stroke="#444" strokeWidth="1" />
          <line x1="10" y1="14" x2="14" y2="16" stroke="#444" strokeWidth="1" />
          <line x1="10" y1="18" x2="14" y2="20" stroke="#444" strokeWidth="1" />
          {/* Crossguard */}
          <path d="M2 22 L22 22 L24 25 L12 28 L0 25 Z" fill="#e0dfd5" />
          {/* Blade base */}
          <path d="M10 28 L14 28 L12 95 Z" fill="url(#bladeGradient)" />
          {/* Blood groove / fuller */}
          <line x1="12" y1="28" x2="12" y2="70" stroke="#000" strokeWidth="0.5" opacity="0.4" />
          
          <defs>
            <linearGradient id="bladeGradient" x1="10" y1="28" x2="14" y2="28">
              <stop offset="0%" stopColor="#666" />
              <stop offset="50%" stopColor="#fff" />
              <stop offset="100%" stopColor="#333" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
