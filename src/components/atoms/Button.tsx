import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = "" }) => (
  <button
    className={`block w-28 rounded-lg px-3 py-2.5 shadow-lg text-xl text-blue-700 font-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 ${className}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
