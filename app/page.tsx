"use client";

import { useState, useRef } from "react";
import FantasyButton from "../components/FantasyButton";
import ProfileHeader from "../components/ProfileHeader";
import ProjectsTimeline from "../components/ProjectsTimeline";
import Activities from "../components/Activities";
import SwordScrollbar from "../components/SwordScrollbar";
import VideoLoader from "../components/VideoLoader";
import GithubActivity from "../components/GithubActivity";
import { SiGithub, SiInstagram, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
                    ? "scale(1.2)"
                    : "scale(1)",
                  filter: isVideoEnded ? "brightness(2) blur(10px)" : "brightness(1) blur(0px)",
                  transition:
                    "opacity 2s ease-in, transform 2.5s cubic-bezier(0.2, 0.8, 0.2, 1), filter 1.5s ease-in",
                  pointerEvents: isVideoEnded ? "none" : "auto",
                }}
              >
                {!isVideoReady && <VideoLoader />}
                <video
                  src="/rebirth.mp4"
                  autoPlay
                  playsInline
                  onCanPlayThrough={() => setIsVideoReady(true)}
                  onEnded={() => setIsVideoEnded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
                />
              </div>

              {/* The Interactive SVG Sword Tracker */}
              <SwordScrollbar targetRef={scrollRef} isVisible={isVideoEnded} />

              {/* Portfolio Info Layer — slides in from below */}
              <div
                ref={scrollRef}
                className="absolute inset-0 bg-gradient-to-b from-[#06080a] via-[#000000] to-[#040406] text-white p-6 md:p-12 pl-8 pr-4 flex flex-col overflow-y-auto overflow-x-hidden no-scrollbar touch-pan-y overscroll-contain"
                style={{
                  opacity: isVideoEnded ? 1 : 0,
                  transform: isVideoEnded ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
                  transition:
                    "opacity 1.5s ease-in-out 0.8s, transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) 0.8s",
                  pointerEvents: isVideoEnded ? "auto" : "none",
                  zIndex: isVideoEnded ? 10 : 0,
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {/* Header profile section */}
                <ProfileHeader />

                {/* Staggered Sections under header */}
                <div className="flex flex-col gap-16 md:gap-24 mt-12 w-full relative max-w-4xl mx-auto shrink-0 pb-16">
                  {/* Decorative background arc rings */}
                  <div className="absolute top-[10%] left-[-20%] w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none mix-blend-screen" />
                  <div className="absolute top-[30%] right-[-30%] w-[800px] h-[800px] border border-white/[0.03] rounded-full pointer-events-none mix-blend-screen" />
                  <div className="absolute top-[50%] left-[-10%] w-[400px] h-[400px] border border-white/[0.02] rounded-full pointer-events-none mix-blend-screen" />

                  <ProjectsTimeline />
                  <Activities />
                  <div className="w-full mt-8">
                    <GithubActivity />
                  </div>
                </div>

                {/* Replay button */}
                {/* <div className="flex justify-center mt-auto shrink-0 pt-8">
                  <FantasyButton
                    onClick={() => {
                      setIsVideoEnded(false);
                      setHasEntered(false);
                    }}
                  >
                    Replay Experience
                  </FantasyButton>
                </div> */}

                {/* Footer */}
                <footer className="mt-16 pb-8 pt-10 border-t border-white/5 flex flex-col items-center shrink-0 w-full">
                  <div className="w-12 h-[1px] bg-[#b08d57]/30 mb-8" />

                  {/* Social Links */}
                  <div className="flex gap-8 mb-8">
                    <a
                      href="https://github.com/devrizvy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#b08d57] transition-colors"
                    >
                      <SiGithub size={16} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/devrizvy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#b08d57] transition-colors"
                    >
                      <FaLinkedin size={16} />
                    </a>
                    <a
                      href="https://www.instagram.com/rizvy.noct/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#b08d57] transition-colors"
                    >
                      <SiInstagram size={16} />
                    </a>
                    <a
                      href="mailto:rizvyhq1@gmail.com"
                      className="text-gray-500 hover:text-[#b08d57] transition-colors"
                    >
                      <SiGmail size={16} />
                    </a>
                  </div>
                  <p className="text-gray-500 text-[10px] mt-2 md:mt-3 tracking-widest font-light italic">
                    © {new Date().getFullYear()} All Rights Reserved.
                  </p>
                </footer>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
