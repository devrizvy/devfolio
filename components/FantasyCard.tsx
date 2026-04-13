import React from "react";

interface FantasyCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function FantasyCard({ title, children, className = "" }: FantasyCardProps) {
  return (
    <div className={`relative ${className} bg-black/40 backdrop-blur-sm group`}>
      {/* Top Left Corner Deco */}
      <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-white/30 rounded-tl-xl opacity-60 z-10 transition-opacity group-hover:opacity-100" />
      {/* Top Right Corner Deco */}
      <div className="absolute -top-3 -right-3 w-8 h-8 border-t border-r border-white/30 rounded-tr-xl opacity-60 z-10 transition-opacity group-hover:opacity-100" />
      {/* Bottom Left Corner Deco */}
      <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b border-l border-white/30 rounded-bl-xl opacity-60 z-10 transition-opacity group-hover:opacity-100" />
      {/* Bottom Right Corner Deco */}
      <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-white/30 rounded-br-xl opacity-60 z-10 transition-opacity group-hover:opacity-100" />

      {/* Outer Border Layer */}
      <div className="absolute inset-0 border border-white/10 m-1"></div>
      
      {/* Inner Frame */}
      <div className="absolute inset-2 border border-white/5 bg-gradient-to-br from-[#0c0c10] to-[#050508]/80 pointer-events-none"
           style={{
             clipPath: "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)"
           }}
      >
      </div>

      <div className="relative p-8 z-10">
        {title && (
          <h3 style={{ fontFamily: "var(--font-cinzel)" }} className="text-xl md:text-2xl font-medium tracking-[0.15em] text-[#e0dfd5] mb-6 uppercase">
            {title}
          </h3>
        )}
        <div className="text-gray-400 font-light leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
