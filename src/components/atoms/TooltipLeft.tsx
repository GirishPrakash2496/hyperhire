import React from "react";

const TooltipLeft = () => {
  return (
    <div className="bg-blue-500 md:bg-white lg:bg-white text-black text-xs rounded py-1 px-4 absolute bottom-full left-0 mb-2 tooltipLeft-fade-in">
      <span className="text-white lg:text-[#40E2E8] md:text-[#40E2E8] font-black text-lg">
        풀타임, 파트타임 {/* Static text */}
      </span>
      <svg
        className="absolute text-blue-500 md:text-white lg:text-white h-2 left-0 ml-3 top-full tooltip-Leftarrow-fade-in"
        viewBox="0 0 255 255"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
    </div>
  );
};

export default TooltipLeft;
