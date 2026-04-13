import FantasyCard from "./FantasyCard";
import { 
  SiNextdotjs, SiReact, SiTailwindcss, SiRedux, SiTypescript, 
  SiJavascript, SiGraphql, SiExpress, SiMongodb, SiPostgresql, 
  SiBun, SiJest, SiGit, SiDocker, SiGnubash, SiArchlinux 
} from "react-icons/si";

const TECH_STACK = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Redux", Icon: SiRedux },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Express", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Bun", Icon: SiBun },
  { name: "Jest", Icon: SiJest },
  { name: "Git", Icon: SiGit },
  { name: "Docker", Icon: SiDocker },
  { name: "Bash", Icon: SiGnubash },
  { name: "Arch Linux", Icon: SiArchlinux },
];

export default function Activities() {
  return (
    <FantasyCard title="Development Arsenal" className="self-end w-full md:w-[70%]">
      <div className="flex flex-wrap gap-2 md:gap-3">
        {TECH_STACK.map(({ name, Icon }) => (
          <div 
            key={name}
            className="group flex items-center px-4 py-2 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 text-xs md:text-[0.8rem] font-light text-gray-300 tracking-widest cursor-default" 
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            <Icon className="w-[13px] h-[13px] mr-2 opacity-50 text-[#e0dfd5] group-hover:opacity-100 group-hover:text-white transition-opacity" />
            <span className="mt-[2px]">{name}</span>
          </div>
        ))}
      </div>
    </FantasyCard>
  );
}
