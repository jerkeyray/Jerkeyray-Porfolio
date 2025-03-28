// components/TechSkills.tsx
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
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
  // Add more skills here as needed
];

export default function TechSkills() {
  return (
    <section className="py-12 bg-[#FFFFFF] flex flex-col items-center">
      {" "}
      {/* Changed to #FFFFFF */}
      {/* Title */}
      <div className="relative w-full max-w-2xl mx-4 p-8 bg-[#FFFFFF] text-[#0F0F0F] border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] transform rotate-2 overflow-hidden mb-8">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0F0F0F 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        <h2 className="relative text-4xl md:text-5xl font-bold text-center z-10">
          Tech & Skills
        </h2>
      </div>
      {/* Skills Grid */}
      <div className="max-w-6xl w-full px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-[#FFFFFF] border-2 border-[#0F0F0F] rounded-md shadow-[4px_4px_0_#0F0F0F] hover:bg-[#0077FF] hover:text-[#FFFFFF] hover:shadow-[4px_4px_0_#FFFFFF] transition-all"
            >
              <skill.icon className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
