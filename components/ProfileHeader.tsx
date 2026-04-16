import dynamic from "next/dynamic";
import FantasyTitle from "./FantasyTitle";

const CastleModel = dynamic(() => import("./CastleModel"), {
  ssr: false,
});

export default function ProfileHeader({ onModelLoad }: { onModelLoad?: () => void }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-10 shrink-0">
      {/* 3D Model Container */}
      <div className="w-full md:w-[300px] h-[250px] md:h-[300px] shrink-0 mt-8 md:mt-0 flex justify-center -ml-4 md:-ml-0">
        <CastleModel onLoaded={onModelLoad} />
      </div>
      {/* Profile Info */}
      <div className="flex-1 mt-0 md:mt-10 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="mb-4 md:-ml-6 scale-[0.65] sm:scale-[0.7] md:scale-[0.72] origin-center md:origin-left">
          <FantasyTitle title="Hi I'm Rizvy" subtitle="Web Developer" />
        </div>
        <p className="text-gray-300 text-base md:text-[1.1rem] leading-[1.6] tracking-[0.03em] mb-8 max-w-xl font-light">
          I spend my time building powerful, scalable apps that solve unique
          niche problems most people never talk about. I dive deep into every
          project and love pushing performance to the absolute edge through
          smart architecture and relentless optimization.
        </p>
        <div className="w-full">
          <h3
            style={{ fontFamily: "var(--font-cinzel)" }}
            className="tracking-[0.15em] text-sm text-[#5a6266] mb-4 uppercase"
          >
            Experiences
          </h3>
          
          <div className="space-y-6">
            <div className="relative pl-4 border-l border-white/10 text-left">
              <p className="text-gray-200 text-sm mb-1 font-medium">
                Web Development Intern at{" "}
                <span className="font-semibold text-white">City IT Park</span>
              </p>
              <p className="text-gray-500 text-xs mb-3 uppercase tracking-widest">
                September 2025 – December 2025 <span className="mx-2 opacity-30">|</span> 12 Weeks
              </p>
              <p className="text-gray-300/90 text-[1rem] leading-[1.6] max-w-xl font-light">
                Intensive training in modern web architectures, focusing on scalable full-stack applications and high-performance frontend optimization.
              </p>
            </div>

            <div className="relative pl-4 border-l border-white/10 text-left">
              <p className="text-gray-200 text-sm mb-1 font-medium">
                Web Developer at{" "}
                <span className="font-semibold text-white">Mangrove IT</span>
              </p>
              <p className="text-gray-500 text-xs mb-3 uppercase tracking-widest">
                October 2024 – October 2025
              </p>
              <p className="text-gray-300/90 text-[1rem] leading-[1.6] max-w-xl font-light">
                Designed and developed the organization’s main public website
                (mangrove.edu.bd), built robust CMS applications and SaaS
                platforms, and contributed significantly to the company’s core ERP
                system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
