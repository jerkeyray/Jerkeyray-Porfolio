const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[200px]">
      <div className="relative w-20 h-20">
        {/* Outer ring */}
        <div className="absolute w-full h-full border-8 border-t-[#FFFFFF] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
        {/* Inner ring */}
        <div className="absolute w-14 h-14 m-3 border-8 border-l-[#FFFFFF] border-t-transparent border-r-transparent border-b-transparent rounded-full animate-spin-reverse" />
        {/* Center dot */}
        <div className="absolute w-4 h-4 m-8 bg-[#FFFFFF] rounded-full" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
