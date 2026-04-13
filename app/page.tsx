"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const CastleModel = dynamic(() => import("../components/CastleModel"), { ssr: false });

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  return (
    <main className="flex-1 flex items-center justify-center min-h-dvh w-full bg-black p-4 sm:p-8">
      <div className="w-full max-w-[800px] h-[90dvh] max-h-[1186px] flex justify-center items-center overflow-hidden relative  shadow-2xl bg-black">
        {!hasEntered ? (
          /* Entry Screen */
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white bg-black">
            <button
              onClick={() => setHasEntered(true)}
              className="px-10 py-4 border border-white/20  text-sm md:text-base tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-700 ease-in-out"
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
              className={`absolute inset-0 bg-black text-white p-6 md:p-12 flex flex-col transition-opacity duration-1000 overflow-y-auto overflow-x-hidden ${
                isVideoEnded
                  ? "opacity-100 z-10"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Header profile section */}
              <div className="flex flex-col md:flex-row items-start gap-8 mb-12 shrink-0">
                {/* 3D Model Container */}
                <div className="w-[250px] h-[250px] shrink-0">
                  <CastleModel />
                </div>
                {/* Profile Info */}
                <div className="flex-1">
                  <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">Dev Rizvy</h1>
                  <h2 className="text-xl text-gray-400 font-light mb-4">Full Stack Developer</h2>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                    I am a full stack developer with 1 year of experience building scalable applications.
                  </p>
                  <div>
                    <h3 className="uppercase tracking-widest text-xs font-semibold text-gray-500 mb-2">Latest Experience</h3>
                    <p className="text-gray-200 text-sm">
                      Web Developer at <span className="font-semibold text-white">Mangrove IT</span> <br/>
                      <span className="text-gray-500 text-xs">Oct 2024 — Oct 2025</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Sections under header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 shrink-0">
                 <div className="p-6 border border-white/10 bg-[#0a0a0a]">
                    <h3 className="uppercase tracking-widest text-xs font-semibold text-gray-500 mb-4">Selected Projects</h3>
                    <ul className="text-gray-300 text-sm space-y-3">
                       <li><strong>01</strong> — Next.js Portfolio</li>
                       <li><strong>02</strong> — E-commerce Platform</li>
                       <li><strong>03</strong> — Real-time Chat App</li>
                    </ul>
                 </div>
                 <div className="p-6 border border-white/10 bg-[#0a0a0a]">
                    <h3 className="uppercase tracking-widest text-xs font-semibold text-gray-500 mb-4">Activities</h3>
                    <ul className="text-gray-300 text-sm space-y-3">
                       <li>— Open Source Contributor</li>
                       <li>— Tech Blog Writer</li>
                       <li>— Local Meetup Organizer</li>
                    </ul>
                 </div>
                 <div className="p-6 border border-white/10 bg-[#0a0a0a]">
                    <h3 className="uppercase tracking-widest text-xs font-semibold text-gray-500 mb-4">Achievements</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-2">
                      Winner of the 2024 Annual Hackathon. Organized technical workshops impacting 100+ students.
                    </p>
                 </div>
              </div>

              {/* Replay button */}
              <div className="flex justify-center mt-auto shrink-0 pt-8">
                <button
                  className="px-8 py-3 border border-white/20 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500"
                  onClick={() => {
                    setIsVideoEnded(false);
                    setHasEntered(false);
                  }}
                >
                  Replay Experience
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
