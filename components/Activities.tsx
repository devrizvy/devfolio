import FantasyCard from "./FantasyCard";

export default function Activities() {
  return (
    <FantasyCard title="Activities" className="self-end w-full md:w-[70%]">
      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <span className="text-white/20 text-xs">✦</span> Open Source Contributor
        </li>
        <li className="flex items-center gap-3">
          <span className="text-white/20 text-xs">✦</span> Technical Blog Writer
        </li>
        <li className="flex items-center gap-3">
          <span className="text-white/20 text-xs">✦</span> Local Meetup Organizer
        </li>
      </ul>
    </FantasyCard>
  );
}
