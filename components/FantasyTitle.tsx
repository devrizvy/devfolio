import React from "react";

export default function FantasyTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full my-8">
      {/* Top Divider */}
      <div className="relative flex items-center justify-center w-full max-w-[400px] mb-6 opacity-60">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/40" />
        <div className="w-2 h-2 mx-1 border border-white/50 rotate-45" />
        {/* Intricate diamond center */}
        <div className="w-3 h-3 mx-1 flex items-center justify-center border border-white/60 rotate-45">
           <div className="w-1 h-1 bg-white/80" />
        </div>
        <div className="w-2 h-2 mx-1 border border-white/50 rotate-45" />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/40" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl tracking-[0.2em] text-[#e0dfd5] uppercase font-light drop-shadow-lg"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <h2 
            className="text-lg md:text-xl text-[#8e9496] tracking-[0.3em] uppercase mt-2"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            {subtitle}
          </h2>
        )}
      </div>

      {/* Bottom Divider */}
      <div className="relative flex items-center justify-center w-full max-w-[400px] mt-6 opacity-60">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/40" />
        <div className="w-2 h-2 mx-1 border border-white/50 rotate-45" />
        {/* Intricate diamond center */}
        <div className="w-3 h-3 mx-1 flex items-center justify-center border border-white/60 rotate-45">
           <div className="w-1 h-1 bg-white/80" />
        </div>
        <div className="w-2 h-2 mx-1 border border-white/50 rotate-45" />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/40" />
      </div>
    </div>
  );
}
