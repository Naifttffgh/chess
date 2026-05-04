import React from 'react';

export const Button = ({ onClick, label, variant = 'primary', icon }) => {
  const baseStyles = "px-6 py-2.5 rounded-md font-bold text-sm transition-all duration-150 active:scale-95 flex items-center gap-2 justify-center";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20",
    secondary: "bg-[#312e2b] hover:bg-[#3d3a37] text-[#bababa] border border-white/5",
    danger: "bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white border border-red-600/30"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};