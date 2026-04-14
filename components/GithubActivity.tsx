"use client";

import GitHubCalendar from "react-github-calendar";
import FantasyCard from "./FantasyCard";

export default function GithubActivity() {
  const fantasyTheme = {
    light: ["#161b22", "#b08d5733", "#b08d57", "#d4af37", "#ffffff"],
    dark: ["#161b22", "#b08d5733", "#b08d57", "#d4af37", "#ffffff"],
  };

  return (
    <FantasyCard title="Chronicle of Contributions" className="w-full">
      <div className="flex flex-col gap-4">
        <div className="w-full overflow-x-auto no-scrollbar pb-2">
          <div className="min-w-max p-2 rounded-lg bg-black/20 border border-white/5">
            <GitHubCalendar
              username="devrizvy"
              theme={fantasyTheme}
              fontSize={12}
              blockSize={11}
              blockMargin={4}
              loading={false}
              renderBlock={(block, activity) => (
                <div 
                  {...block.props}
                  className={`rounded-[1px] transition-all duration-700 hover:scale-150 hover:z-20 cursor-crosshair shadow-[0_0_10px_rgba(212,175,55,0.1)]`}
                  style={{
                    backgroundColor: block.props.style?.backgroundColor,
                    boxShadow: activity.level > 2 ? `0 0 15px ${block.props.style?.backgroundColor}` : 'none'
                  }}
                />
              )}
              labels={{
                totalCount: "{{count}} incantations cast in the last cycle",
              }}
            />
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
        `}</style>
      </div>
    </FantasyCard>
  );
}
