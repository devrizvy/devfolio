"use client";

import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

export default function GlobalLoader() {
  const { progress } = useProgress();
  const [localProgress, setLocalProgress] = useState(0);

  useEffect(() => {
    setLocalProgress(progress);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] text-white">
      {/* Magic Circle SVG */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="absolute w-full h-full animate-spin-slow opacity-20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
          <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
        </svg>
        <div className="flex flex-col items-center">
          <span
            style={{ fontFamily: "var(--font-cinzel)" }}
            className="text-white text-3xl font-bold tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            {Math.round(localProgress)}%
          </span>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col items-center gap-2">
        <p
          style={{ fontFamily: "var(--font-cinzel)" }}
          className="text-[#b08d57] text-xs tracking-[0.4em] uppercase animate-pulse"
        >
          Summoning Citadel
        </p>
        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#b08d57]/30 to-transparent mt-2" />
      </div>
      
      {/* Decorative corners for the loader */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/20" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-white/20" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-white/20" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/20" />
    </div>
  );
}
