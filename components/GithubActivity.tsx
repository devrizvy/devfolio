"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import FantasyCard from "./FantasyCard";

export default function GithubActivity() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fantasyTheme = {
    light: ["#161b22", "#b08d5733", "#b08d57", "#d4af37", "#ffffff"],
    dark: ["#161b22", "#b08d5733", "#b08d57", "#d4af37", "#ffffff"],
  };

  return (
    <FantasyCard title="Chronicle of Contributions" className="w-full">
      <div className="flex flex-col gap-4">
        <div className="w-full overflow-x-auto chronicle-scroll pb-2">
          <div className="min-w-max p-2 rounded-lg bg-black/20 border border-white/5">
            {mounted ? (
              <GitHubCalendar
                username="devrizvy"
                theme={fantasyTheme}
                fontSize={12}
                blockSize={11}
                blockMargin={4}
                loading={false}
                labels={{
                  totalCount: "{{count}} incantations cast in the last cycle",
                }}
              />
            ) : (
              /* Skeleton placeholder while waiting for client mount */
              <div className="h-[112px] w-full animate-pulse rounded bg-white/5" />
            )}
          </div>
        </div>

        <style jsx global>{`
          .react-github-calendar__title {
             display: none !important;
          }
          .react-github-calendar__chart {
            font-family: var(--font-garamond) !important;
            color: #9ca3af !important;
          }
          .react-github-calendar__meta {
            font-family: var(--font-garamond) !important;
            color: #9ca3af !important;
            font-style: italic;
            letter-spacing: 0.1em;
            margin-top: 1rem;
          }
          .react-github-calendar__legend {
            font-family: var(--font-cinzel) !important;
            font-size: 10px !important;
            letter-spacing: 0.2em !important;
            text-transform: uppercase !important;
            opacity: 0.6;
          }
          
          /* Glow effects for high-level contributions */
          .react-github-calendar__chart rect[data-level="3"] {
            filter: drop-shadow(0 0 3px rgba(212, 175, 55, 0.4));
          }
          .react-github-calendar__chart rect[data-level="4"] {
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.6));
          }
          
          /* Interactive hover glow */
          .react-github-calendar__chart rect {
            transition: all 0.3s ease;
            rx: 1px;
            ry: 1px;
          }
          .react-github-calendar__chart rect:hover {
            filter: brightness(1.5) drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)) !important;
          }

          /* Fantasy horizontal scrollbar for Chronicle */
          .chronicle-scroll {
            scrollbar-width: thin;
            scrollbar-color: #b08d57 #1a1a1a;
          }
          .chronicle-scroll::-webkit-scrollbar {
            height: 4px;
          }
          .chronicle-scroll::-webkit-scrollbar-track {
            background: #0d0d0d;
            border-radius: 2px;
          }
          .chronicle-scroll::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #6b5323, #b08d57, #d4af37, #b08d57, #6b5323);
            border-radius: 2px;
            box-shadow: 0 0 6px rgba(176, 141, 87, 0.5);
          }
          .chronicle-scroll::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(90deg, #b08d57, #d4af37, #ffffff, #d4af37, #b08d57);
            box-shadow: 0 0 10px rgba(212, 175, 55, 0.8);
          }
        `}</style>
      </div>
    </FantasyCard>
  );
}
