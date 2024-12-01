"use client";
import React from "react";

interface TooltipProps {
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  className,
}) => {
  return (
    <div
      className={`absolute ${className} ${
        position === "top" ? "bottom-full mb-2" : ""
      } ${position === "bottom" ? "top-full mt-2" : ""}`}
      style={{ backgroundColor: "#E9F7EF" }}
    >
      <div className="text-black text-xs rounded py-1 px-4 relative">
        {content}
        {position === "top" && (
          <svg
            className="absolute text-[#E9F7EF] h-2 w-full left-0 top-full"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
