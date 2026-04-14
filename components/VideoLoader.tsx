"use client";

export default function VideoLoader() {
  return (
    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black">
      {/* Magic Circle SVG */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="absolute w-full h-full animate-spin-slow opacity-20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
          <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
        </svg>
        <div className="w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_15px_white]" />
      </div>
      <p 
        style={{ fontFamily: 'var(--font-cinzel)' }}
        className="text-[#5a6266] text-xs tracking-[0.4em] uppercase mt-8 animate-pulse"
      >
        Awakening...
      </p>
    </div>
  );
}
