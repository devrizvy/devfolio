"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import FantasyCard from "../components/FantasyCard";

const CastleModel = dynamic(() => import("../components/CastleModel"), { ssr: false });

export default function Home() {
  const [hasEntered, setHasEntered] = useState(true);
  const [isVideoEnded, setIsVideoEnded] = useState(true);

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
              className={`absolute inset-0 bg-gradient-to-b from-[#06080a] via-[#000000] to-[#040406] text-white p-6 md:p-12 flex flex-col transition-opacity duration-1000 overflow-y-auto overflow-x-hidden ${
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
                <div className="flex-1 mt-4 md:mt-10">
                  <h1 style={{ fontFamily: "var(--font-cinzel)" }} className="text-4xl md:text-5xl tracking-[0.2em] mb-4 text-[#e0dfd5]">Dev Rizvy</h1>
                  <h2 style={{ fontFamily: "var(--font-cinzel)" }} className="text-xl md:text-2xl text-[#8e9496] tracking-widest mb-6 uppercase">Full Stack Developer</h2>
                  <p className="text-gray-300/80 text-sm md:text-base leading-relaxed mb-6 max-w-xl font-light">
                    I am a full stack developer with 1 year of experience building scalable applications.
                  </p>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-cinzel)" }} className="tracking-[0.15em] text-sm text-[#5a6266] mb-3 uppercase">Latest Experience</h3>
                    <p className="text-gray-200 text-sm">
                      Web Developer at <span className="font-semibold text-white">Mangrove IT</span> <br/>
                      <span className="text-gray-500 text-xs">Oct 2024 — Oct 2025</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Staggered Sections under header */}
              <div className="flex flex-col gap-16 md:gap-24 mt-12 w-full relative max-w-4xl mx-auto shrink-0 pb-16">
                 
                 {/* Decorative background arc rings */}
                 <div className="absolute top-[10%] left-[-20%] w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none mix-blend-screen" />
                 <div className="absolute top-[30%] right-[-30%] w-[800px] h-[800px] border border-white/[0.03] rounded-full pointer-events-none mix-blend-screen" />
                 <div className="absolute top-[50%] left-[-10%] w-[400px] h-[400px] border border-white/[0.02] rounded-full pointer-events-none mix-blend-screen" />

                 <FantasyCard title="Selected Projects" className="self-start w-full md:w-[70%]">
                    <ul className="space-y-4">
                       <li className="flex items-start gap-4">
                         <span style={{ fontFamily: "var(--font-cinzel)" }} className="text-white/40 mt-1">01</span>
                         <span>Next.js Portfolio Platform with 3D elements</span>
                       </li>
                       <li className="flex items-start gap-4">
                         <span style={{ fontFamily: "var(--font-cinzel)" }} className="text-white/40 mt-1">02</span>
                         <span>High-performance E-commerce Architecture</span>
                       </li>
                       <li className="flex items-start gap-4">
                         <span style={{ fontFamily: "var(--font-cinzel)" }} className="text-white/40 mt-1">03</span>
                         <span>Real-time Concurrent Chat Application</span>
                       </li>
                    </ul>
                 </FantasyCard>

                 <FantasyCard title="Activities" className="self-end w-full md:w-[70%]">
                    <ul className="space-y-4">
                       <li className="flex items-center gap-3"><span className="text-white/20 text-xs">✦</span> Open Source Contributor</li>
                       <li className="flex items-center gap-3"><span className="text-white/20 text-xs">✦</span> Technical Blog Writer</li>
                       <li className="flex items-center gap-3"><span className="text-white/20 text-xs">✦</span> Local Meetup Organizer</li>
                    </ul>
                 </FantasyCard>

                 <FantasyCard title="Achievements" className="self-start w-full md:w-[70%]">
                    <p className="leading-loose">
                      Winner of the 2024 Annual Hackathon across 500+ participants. <br/><br/>
                      Organized and executed technical workshops locally, impacting over 100+ upcoming student developers in the region.
                    </p>
                 </FantasyCard>
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
