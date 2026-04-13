import FantasyTitle from "./FantasyTitle";

export default function ProjectsTimeline() {
  return (
    <div className="self-start w-full md:w-[80%] flex flex-col gap-8 z-10">
      <div className="-ml-8 scale-[0.8] origin-left mb-2">
        <FantasyTitle title="Selected Projects" />
      </div>

      {/* Project 1: Glimmer */}
      <div className="flex flex-col gap-3 relative pl-6 md:pl-8 border-l border-white/20 hover:border-white/40 transition-colors duration-500 group">
        {/* Decorative diamond on border */}
        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 border border-white/40 rotate-45 group-hover:bg-white/40 transition-colors duration-500" />

        <h4
          style={{ fontFamily: "var(--font-cinzel)" }}
          className="text-2xl text-[#e0dfd5] tracking-widest uppercase relative inline-block w-fit"
        >
          Glimmer
          {/* Underline flourish */}
          <div className="absolute -bottom-1 left-0 w-1/2 h-[1px] bg-gradient-to-r from-white/40 to-transparent" />
        </h4>

        <p className="text-gray-300 text-[1.05rem] leading-[1.8] font-light mt-2 max-w-2xl">
          A real-time collaborative study platform for students with virtual
          classrooms, messaging, collaborative notes, and AI summaries in a
          calm UI.
        </p>

        <div className="mt-2 text-sm text-gray-400 font-light">
          <span
            style={{ fontFamily: "var(--font-cinzel)" }}
            className="text-[#5a6266] tracking-[0.15em] uppercase mr-3"
          >
            Tech Stack:
          </span>
          React 19 + TypeScript, shadcn/ui, TanStack Query, Socket.IO, Express, MongoDB
        </div>
      </div>
    </div>
  );
}
