// components/TechSkills.tsx
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Firebase", icon: SiFirebase },
  { name: "Vercel", icon: SiVercel },
  { name: "GitHub", icon: FaGithub },
  { name: "Python", icon: FaPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Supabase", icon: SiSupabase },
  { name: "MongoDB", icon: SiMongodb },
  { name: "React", icon: FaReact },
  { name: "Express", icon: SiExpress },
];

export default function TechSkills() {
  return (
    <section className="py-12 bg-[#0F0F0F] flex flex-col items-center">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
        Tech I have worked with
      </h2>
      {/* Moving Rows */}
      <div className="flex flex-col gap-8 overflow-hidden w-screen">
        {/* First Row */}
        <div className="flex gap-6 animate-[marquee_20s_linear_infinite]">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center p-2 md:p-4 bg-[#1A1A1A] border-2 border-[#333333] rounded-md shadow-[6px_6px_0_#333333] w-28 md:w-48"
            >
              <skill.icon className="w-5 h-5 md:w-8 md:h-8 mr-2 md:mr-4 text-white" />
              <span className="text-[10px] md:text-sm font-medium text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        {/* Second Row (Reverse Direction) */}
        <div className="flex gap-6 animate-[marquee-reverse_20s_linear_infinite]">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center p-2 md:p-4 bg-[#1A1A1A] border-2 border-[#333333] rounded-md shadow-[-6px_-6px_0_#333333] w-28 md:w-48"
            >
              <skill.icon className="w-5 h-5 md:w-8 md:h-8 mr-2 md:mr-4 text-white" />
              <span className="text-[10px] md:text-sm font-medium text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
