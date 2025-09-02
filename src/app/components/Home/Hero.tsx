"use client";
import React from "react";
import Link from "next/link";
import { Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[550px] sm:h-[600px] md:h-[700px] lg:h-[750px] xl:h-[800px] 2xl:h-[850px] text-white px-3 sm:px-4 md:px-6 xl:px-10 py-10 sm:py-14 md:py-20 text-center md:text-left overflow-hidden max-w-full lg:max-w-full mx-auto">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-20"
      >
        <source src="/Untitled design.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 md:max-w-3xl lg:max-w-4xl  mx-auto ">
        <div className="mb-5 sm:mb-7 md:mb-9 flex justify-center md:justify-start mt-20 sm:mt-14 md:mt-20 ">
          <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-Blue text-white1 text-xs sm:text-sm font-medium shadow-sm">
            <Award className="w-4 h-4" />
            Trusted by 22+ brands
          </div>
        </div>

        <h1 className="text-gray1 text-lg sm:text-xl md:text-4xl lg:text-5xl font-medium mb-1 sm:mb-2 md:mb-2 text-pretty">
          Dominate Your Market with
        </h1>
        <h1 className="text-gray1 text-lg sm:text-xl md:text-4xl lg:text-5xl font-medium mb-2 sm:mb-3 md:mb-4 text-pretty">
          Scalable Managed IT Solutions
        </h1>
        <p className="text-gray1 text-xs sm:text-sm md:text-base lg:text-lg mb-5 sm:mb-6">
          Your dedicated IT services provider, delivering managed IT solutions from AI to custom web development
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <Link href="/Consultation">
            <button className="bg-Blue text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium hover:bg-black text-xs sm:text-sm md:text-base">
              Book a free consultation →
            </button>
          </Link>
          <Link href="#HSolutions" scroll={true}>
  <button className="bg-white border border-gray text-black px-2 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium hover:bg-Blue text-xs sm:text-sm md:text-base">
    Explore our services →
  </button>
</Link>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
