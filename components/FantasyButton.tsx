import React from "react";

interface FantasyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export default function FantasyButton({ children, className = "", active = false, ...props }: FantasyButtonProps) {
  return (
    <button 
      className={`relative group px-10 py-3 uppercase tracking-[0.2em] transition-all duration-300 outline-none
                 ${active ? "text-white" : "text-gray-400 hover:text-white"} ${className}`}
      style={{ fontFamily: "var(--font-cinzel)" }}
      {...props}
    >
      {/* Outer Border with corner cuts */}
      <div className="absolute inset-0 border border-white/20 transition-colors duration-300 group-hover:border-white/50"
           style={{
             clipPath: "polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)"
           }}
      />
      
      {/* Inner thin border */}
      <div className="absolute inset-1 border border-white/10 transition-colors duration-300 group-hover:border-white/30"
           style={{
             clipPath: "polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)"
           }}
      />

      {/* Edge flares (subtle glows at the corners based on reference) */}
      <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Glow shadow bg on hover */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" 
           style={{
             clipPath: "polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)"
           }}
      />

      <span className="relative z-10 text-xs md:text-sm">{children}</span>
    </button>
  );
}
