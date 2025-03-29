// components/ContactMe.tsx
import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function ContactMe() {
  const contactInfo = [
    {
      name: "Email",
      icon: FaEnvelope,
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      value: "yourusername",
      href: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      value: "yourname",
      href: "https://linkedin.com/in/yourname",
    },
  ];

  return (
    <section className="py-12 flex flex-col md:flex-row items-center justify-center">
      {/* Left Section: Title */}
      <div className="relative w-full md:w-1/2 max-w-2xl mx-4 p-8 bg-[#FFFFFF] text-[#0F0F0F] border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] overflow-hidden mb-8 md:mb-0">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0F0F0F 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        <h2 className="relative text-4xl md:text-5xl font-bold text-center md:text-left z-10">
          Contact Me
        </h2>
      </div>

      {/* Right Section: Contact Info */}
      <div className="max-w-6xl w-full md:w-1/2 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
          {contactInfo.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center p-6 bg-[#FFFFFF] border-2 border-[#0F0F0F] rounded-md shadow-[4px_4px_0_#0F0F0F]">
                <item.icon className="w-8 h-8 mr-4" />
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs">{item.value}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
