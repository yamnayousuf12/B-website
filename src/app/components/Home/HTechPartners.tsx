"use client";
import React from "react";

const brands = [
  "Turok Makto",
  "UCBC",
  "MCM",
  "Clinca San Maguel",
  "Sckivar",
  "AgriFM",
  "Innox",
  "Six Strings Record",
  "Jazz",
  "Gym Armour",
  "PrimeFit",
];

const TechDrivenPartnerships: React.FC = () => {
  return (
    <section className="text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Headings */}
        <h2 className="text-xl md:text-5xl font-semibold mb-4">
          Tech-Driven Partnerships
        </h2>
        <p className="text-white/85 mb-1 md:text-base text-sm">
          We deliver innovative IT solutions for your success
        </p>
        <p className="text-gray2 mb-12 md:text-xs text-xs">Trusted by 22+ brands</p>

        {/* Brand Cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="w-[100px] h-[50px] md:w-[180px] md:h-[70px] flex items-center justify-center text-xs md:text-base font-light text-white rounded-md bg-[#0f0f0f] border border-[#1a1a1a] shadow-[0_0_30px_rgba(255,255,255,0.03)] hover:bg-[#1c1c1c] transition-all duration-300"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechDrivenPartnerships;
