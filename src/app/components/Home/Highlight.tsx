"use client";

import Image from "next/image";
import React from "react";

const Highlight: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center text-center mb-16"
    >
         {/* <div className="absolute -]inset-1 hue-rotate-15 -z-1 bg-cover bg-center bg-no-repeat h-full w-full"
       style={{
    backgroundImage: "url('public\Rectangle56.png')",
  }}/> */}
      {/* Top Badge */}
      <div className="mb-4 px-4 py-3 rounded-full bg-white/10 text-xs font-semibold text-white tracking-widest">
        OUR COMMUNITY
      </div>

      {/* Main Sentence */}
      <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-3xl">
        We make it easy for{" "}
        <span className="inline-flex items-center gap-2">
          <Image
            src="/Mask1.png"
            alt="Company user"
            width={32}
            height={32}
            className="rounded-full object-cover hover:scale-110 transition-transform duration-300"
          />
          <span>companies</span>
        </span>{" "}
        and their{" "}
        <span className="inline-flex items-center gap-2">
          <Image
            src="/Mask3.png"
            alt="Employee user"
            width={32}
            height={32}
            className="rounded-full object-cover hover:scale-110 transition-transform duration-300"
          />
          <span>employees</span>
        </span>{" "}
        to set-up, contribute and manage complex{" "}
        <span className="inline-flex items-center gap-2">
          <Image
            src="/Mask 2.png"
            alt="Benefits user"
            width={32}
            height={32}
            className="rounded-full object-cover hover:scale-110 transition-transform duration-300"
          />
          <span>benefits</span>
        </span>.
      </p>

      {/* Hint */}
      <p className="text-gray2 text-sm mt-3">
        Try hovering/clicking the images.
      </p>
    </div>
  );
};

export default Highlight;
