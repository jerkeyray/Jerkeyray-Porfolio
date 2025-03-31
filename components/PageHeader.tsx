import DottedPattern from "./DottedPattern";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="relative w-full bg-[#0F0F0F] text-white py-4 md:py-8 overflow-hidden">
      <DottedPattern />
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;
