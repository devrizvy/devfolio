"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import FantasyCard from "../components/FantasyCard";
import FantasyButton from "../components/FantasyButton";
import FantasyTitle from "../components/FantasyTitle";

const CastleModel = dynamic(() => import("../components/CastleModel"), {
  ssr: false,
});

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  return (
    <main className="flex-1 flex items-center justify-center min-h-dvh w-full bg-[#030303] p-4 sm:p-12">
      {/* Outer wrapper to hold decorations outside the clipped bounds */}
      <div className="relative w-full max-w-[800px] h-[85dvh] max-h-[1186px]">
        {/* ── Corner Decorations on Main Canvas ── */}
        <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-white/40 rounded-tl-xl z-30 pointer-events-none" />
        <div className="absolute -top-3 -right-3 w-10 h-10 border-t border-r border-white/40 rounded-tr-xl z-30 pointer-events-none" />
        <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b border-l border-white/40 rounded-bl-xl z-30 pointer-events-none" />
        <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-white/40 rounded-br-xl z-30 pointer-events-none" />

        {/* Main Canvas Container with chamfered corners */}
        <div
          className="w-full h-full flex justify-center items-center overflow-hidden relative shadow-2xl bg-black group/canvas"
          style={{
            clipPath:
              "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
          }}
        >
          {/* Thin inner border frame */}
          <div
            className="absolute inset-[1px] border border-white/10 z-30 pointer-events-none"
            style={{
              clipPath:
                "polygon(19px 0, calc(100% - 19px) 0, 100% 19px, 100% calc(100% - 19px), calc(100% - 19px) 100%, 19px 100%, 0 calc(100% - 19px), 0 19px)",
            }}
          />

          {!hasEntered ? (
            /* Entry Screen */
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white bg-black">
              {/* Corner Decos on Entry Screen (inherit from parent) */}

              <FantasyButton onClick={() => setHasEntered(true)}>
                Enter Arena
              </FantasyButton>
            </div>
          ) : (
            <>
              {/* Intro Video Layer — slides up & fades when ended */}
              <div
                className="absolute inset-0 z-20"
                style={{
                  opacity: isVideoEnded ? 0 : 1,
                  transform: isVideoEnded
                    ? "translateY(-100%)"
                    : "translateY(0)",
                  transition:
                    "opacity 1.2s ease-in-out, transform 1.4s cubic-bezier(0.76, 0, 0.24, 1)",
                  pointerEvents: isVideoEnded ? "none" : "auto",
                }}
              >
                <video
                  src="/rebirth.mp4"
                  autoPlay
                  playsInline
                  onEnded={() => setIsVideoEnded(true)}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Portfolio Info Layer — slides in from below */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#06080a] via-[#000000] to-[#040406] text-white p-6 md:p-12 flex flex-col overflow-y-auto overflow-x-hidden no-scrollbar"
                style={{
                  opacity: isVideoEnded ? 1 : 0,
                  transform: isVideoEnded ? "translateY(0)" : "translateY(30%)",
                  transition:
                    "opacity 1s ease-in-out 0.4s, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.4s",
                  pointerEvents: isVideoEnded ? "auto" : "none",
                  zIndex: isVideoEnded ? 10 : 0,
                }}
              >
                {/* Header profile section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16 shrink-0">
                  {/* 3D Model Container */}
                  <div className="w-[300px] h-[300px] shrink-0">
                    <CastleModel />
                  </div>
                  {/* Profile Info */}
                  <div className="flex-1 mt-4 md:mt-10">
                    <div className="mb-4 -ml-8 scale-[0.8] origin-left">
                      <FantasyTitle title="Rizvy" subtitle="Web Developer" />
                    </div>
                    <p className="text-gray-300 text-base md:text-[1.1rem] leading-[1.8] tracking-[0.03em] mb-6 max-w-xl font-light">
                      I spend my time building powerful, scalable apps that
                      solve unique niche problems most people never talk about.
                      I dive deep into every project and love pushing
                      performance to the absolute edge through smart
                      architecture and relentless optimization.
                    </p>
                    <div>
                      <h3
                        style={{ fontFamily: "var(--font-cinzel)" }}
                        className="tracking-[0.15em] text-sm text-[#5a6266] mb-3 uppercase"
                      >
                        Latest Experience
                      </h3>
                      <p className="text-gray-200 text-sm mb-2">
                        Web Developer at{" "}
                        <span className="font-semibold text-white">
                          Mangrove IT
                        </span>{" "}
                        <br />
                        <span className="text-gray-500 text-xs">
                          October 2024 – October 2025
                        </span>
                      </p>
                      <p className="text-gray-300/90 text-[0.95rem] leading-[1.6] max-w-xl font-light italic">
                        Designed and developed the organization’s main public
                        website (mangrove.edu.bd), built robust CMS applications
                        and SaaS platforms, and contributed significantly to the
                        company’s core ERP system.
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

                  <FantasyCard
                    title="Selected Projects"
                    className="self-start w-full md:w-[70%]"
                  >
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <span
                          style={{ fontFamily: "var(--font-cinzel)" }}
                          className="text-white/40 mt-1"
                        >
                          01
                        </span>
                        <span>Next.js Portfolio Platform with 3D elements</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span
                          style={{ fontFamily: "var(--font-cinzel)" }}
                          className="text-white/40 mt-1"
                        >
                          02
                        </span>
                        <span>High-performance E-commerce Architecture</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span
                          style={{ fontFamily: "var(--font-cinzel)" }}
                          className="text-white/40 mt-1"
                        >
                          03
                        </span>
                        <span>Real-time Concurrent Chat Application</span>
                      </li>
                    </ul>
                  </FantasyCard>

                  <FantasyCard
                    title="Activities"
                    className="self-end w-full md:w-[70%]"
                  >
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <span className="text-white/20 text-xs">✦</span> Open
                        Source Contributor
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-white/20 text-xs">✦</span>{" "}
                        Technical Blog Writer
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-white/20 text-xs">✦</span> Local
                        Meetup Organizer
                      </li>
                    </ul>
                  </FantasyCard>

                  <FantasyCard
                    title="Achievements"
                    className="self-start w-full md:w-[70%]"
                  >
                    <p className="leading-loose">
                      Winner of the 2024 Annual Hackathon across 500+
                      participants. <br />
                      <br />
                      Organized and executed technical workshops locally,
                      impacting over 100+ upcoming student developers in the
                      region.
                    </p>
                  </FantasyCard>
                </div>

                {/* Replay button */}
                <div className="flex justify-center mt-auto shrink-0 pt-8">
                  <FantasyButton
                    onClick={() => {
                      setIsVideoEnded(false);
                      setHasEntered(false);
                    }}
                  >
                    Replay Experience
                  </FantasyButton>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
