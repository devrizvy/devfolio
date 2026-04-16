"use client";

import { useRef, useState, useEffect } from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProjectsTimeline from "../components/ProjectsTimeline";
import Activities from "../components/Activities";
import SwordScrollbar from "../components/SwordScrollbar";
import GithubActivity from "../components/GithubActivity";
import GlobalLoader from "../components/GlobalLoader";
import { SiGithub, SiInstagram, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isSiteReady, setIsSiteReady] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // When model is ready, trigger the fade transition
  useEffect(() => {
    if (isSiteReady) {
      // Small delay before following through with content fade-in
      const timer = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isSiteReady]);

  return (
    <main className="flex-1 flex items-center justify-center min-h-dvh w-full bg-[#030303] p-4 sm:p-12 relative overflow-hidden">
      {/* Global Loading Overlay */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-1000 ease-in-out pointer-events-none  ${
          showContent ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        <GlobalLoader />
      </div>

      {/* Main Portfolio Content */}
      <div 
        className={`relative w-full max-w-[800px] h-[90dvh] max-h-[1400px] transition-all duration-1000 ease-out transform ${
          showContent ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        
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

          {/* Portfolio Info Layer */}
          <div
            ref={scrollRef}
            className="absolute inset-0 bg-[#030303] text-white p-6 md:p-12 pl-8 pr-4 flex flex-col overflow-y-auto overflow-x-hidden no-scrollbar touch-pan-y overscroll-contain"
            style={{
              zIndex: 10,
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* iOS Scroll Force Wrapper */}
            <div className="min-h-[101%] flex flex-col w-full relative">
              <ProfileHeader onModelLoad={() => setIsSiteReady(true)} />

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
          </div>

          {/* The Interactive SVG Sword Tracker — rendered above scroll layer */}
          <SwordScrollbar targetRef={scrollRef} isVisible={showContent} />
        </div>
      </div>
    </main>
  );
}
