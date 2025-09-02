"use client";

// import Image from "next/image";
import React from "react";

const Highlight: React.FC = () => {
  return (
    <div className="md:w-full flex flex-col items-center text-center mb-1 bg-black"
    >
      <div className="mb-4 md:px-4 md:py-3 px-2 py-2 rounded-full bg-white/10 md:text-xs text-xs font-semibold text-white tracking-widest">
       Testimonials/Reviews
      </div>

      {/* Main Sentence */}
      <h2 className="text-[12px] md:text-2xl text-gradient font-medium leading-relaxed md:max-w-3xl max-w-64 mb-2 ">We make it easy for companies and their employees to setup, contribute to and manage complex benefits
       
      </h2>
      <p className="md:text-sm text-[12px] text-gray md:max-w-4xl max-w-80 md:mb-9">Hear from businesses who turned their visions into reality with Bitsframe</p>

    
    </div>
  );
};

export default Highlight;
