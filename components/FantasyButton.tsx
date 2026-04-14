import React from "react";

interface FantasyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export default function FantasyButton({ children, className = "", active = false, ...props }: FantasyButtonProps) {
  return (
    <button 
      className={`relative group px-12 py-4 uppercase tracking-[0.25em] transition-all duration-500 outline-none
                 ${active ? "text-white" : "text-[#d4af37] hover:text-white"} ${className}`}
      style={{ fontFamily: "var(--font-cinzel)" }}
      {...props}
    >
      {/* Outer Border with corner cuts */}
      <div className="absolute inset-0 border border-[#b08d57]/40 transition-colors duration-500 group-hover:border-white/80 scale-100 group-hover:scale-[1.02]"
           style={{
             clipPath: "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)"
           }}
      />
      
      {/* Inner thin border */}
      <div className="absolute inset-[3px] border border-[#b08d57]/20 transition-colors duration-500 group-hover:border-white/40"
           style={{
             clipPath: "polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)"
           }}
      />

      {/* Edge flares (subtle glows at the corners) */}
      <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/80 to-transparent opacity-50 group-hover:via-white group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/80 to-transparent opacity-50 group-hover:via-white group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glow shadow bg on hover */}
      <div className="absolute inset-0 bg-[#b08d57]/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" 
           style={{
             clipPath: "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)"
           }}
      />

      {/* Internal Pulse Animation */}
      <div className="absolute inset-0 bg-[#d4af37]/10 animate-pulse mix-blend-screen pointer-events-none" 
           style={{
             clipPath: "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)"
           }}
      />

      <span className="relative z-10 text-sm md:text-base font-semibold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition-all duration-500">{children}</span>
    </button>
  );
}
