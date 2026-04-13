import FantasyCard from "./FantasyCard";

export default function Achievements() {
  return (
    <FantasyCard title="Achievements" className="self-start w-full md:w-[70%]">
      <p className="leading-loose">
        Winner of the 2024 Annual Hackathon across 500+ participants. <br />
        <br />
        Organized and executed technical workshops locally, impacting over
        100+ upcoming student developers in the region.
      </p>
    </FantasyCard>
  );
}
