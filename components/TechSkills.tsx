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
    <section className="py-12 bg-[#FFFFFF] flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-[#0F0F0F] mb-6">
        Tech I have worked with
      </h2>
      {/* Moving Rows */}
      <div className="marquee-wrapper">
        {/* First Row */}
        <div className="marquee-container">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center p-4 bg-[#FFFFFF] border-2 border-[#0F0F0F] rounded-md shadow-[4px_4px_0_#0F0F0F] w-48"
            >
              <skill.icon className="w-8 h-8 mr-4" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
        {/* Second Row (Reverse Direction) */}
        <div className="marquee-container-reverse">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center p-4 bg-[#FFFFFF] border-2 border-[#0F0F0F] rounded-md shadow-[4px_4px_0_#0F0F0F] w-48"
            >
              <skill.icon className="w-8 h-8 mr-4" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
