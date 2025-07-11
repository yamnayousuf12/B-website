"use client";

// import Image from "next/image";
import React from "react";

const Highlight: React.FC = () => {
  return (
    <div className="md:w-full flex flex-col items-center text-center mb-1 bg-black"
    >
      <div className="mb-4 md:px-4 md:py-3 px-2 py-2 rounded-full bg-white/10 md:text-xs text-xs font-semibold text-white tracking-widest">
        OUR COMMUNITY
      </div>

      {/* Main Sentence */}
      <p className="text-xs md:text-2xl text-white font-medium leading-relaxed md:max-w-sm max-w-xs ">companies and their employees to set-up, contribute and manage complex benefits
       
      </p>

    
    </div>
  );
};

export default Highlight;
