const DottedPattern = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
        }}
      />
    </div>
  );
};

export default DottedPattern;
