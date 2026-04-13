import dynamic from "next/dynamic";
import FantasyTitle from "./FantasyTitle";

const CastleModel = dynamic(() => import("./CastleModel"), {
  ssr: false,
});

export default function ProfileHeader() {
  return (
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
          I spend my time building powerful, scalable apps that solve unique
          niche problems most people never talk about. I dive deep into every
          project and love pushing performance to the absolute edge through
          smart architecture and relentless optimization.
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
            <span className="font-semibold text-white">Mangrove IT</span> <br />
            <span className="text-gray-500 text-xs">
              October 2024 – October 2025
            </span>
          </p>
          <p className="text-gray-300/90 text-[0.95rem] leading-[1.6] max-w-xl font-light italic">
            Designed and developed the organization’s main public website
            (mangrove.edu.bd), built robust CMS applications and SaaS
            platforms, and contributed significantly to the company’s core ERP
            system.
          </p>
        </div>
      </div>
    </div>
  );
}
