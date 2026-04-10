"use client";

import { useState } from "react";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  return (
    <main className="flex-1 flex items-center justify-center min-h-dvh w-full bg-black p-4 sm:p-8">
      <div className="w-full max-w-[800px] h-[90dvh] max-h-[1186px] flex justify-center items-center overflow-hidden relative rounded-2xl shadow-2xl bg-black">
        
        {!hasEntered ? (
          /* Entry Screen */
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white bg-black">
            <button 
              onClick={() => setHasEntered(true)}
              className="px-10 py-4 border border-white/20 rounded-full text-sm md:text-base tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-700 ease-in-out"
            >
              Enter Arena
            </button>
          </div>
        ) : (
          <>
            {/* Intro Video Layer (Unmuted!) */}
            <div 
              className={`absolute inset-0 transition-opacity duration-1000 ${
                isVideoEnded ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <video 
                src="/rebirth.mp4" 
                autoPlay  
                playsInline 
                onEnded={() => setIsVideoEnded(true)}
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Portfolio Info Layer */}
            <div 
              className={`absolute inset-0 bg-black text-white p-6 md:p-12 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                isVideoEnded ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
              }`}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-wide uppercase text-center">Your Name</h1>
              <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-8 text-center">Creative Developer</h2>
              
              <div className="w-full bg-[#111] p-6 md:p-8 rounded-xl border border-gray-800">
                <p className="text-gray-300 leading-relaxed text-center text-sm md:text-base">
                  Welcome to my portfolio space. The video has ended, and this area has expanded to showcase my work, background, and contact details. 
                </p>
              </div>
              
              <button 
                className="mt-8 md:mt-10 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                onClick={() => {
                  setIsVideoEnded(false);
                  setHasEntered(false);
                }}
              >
                Replay Experience
              </button>
            </div>
          </>
        )}

      </div>
    </main>
  );
}
