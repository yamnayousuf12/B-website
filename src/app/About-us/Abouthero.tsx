// components/Hero.tsx
import React from "react";

const Hero = () => {
  return (
    <section className="bg-black text-white md:px-6 md:py-20 px-3 py-10 text-center md:text-left relative md:h-[500px]  overflow-hidden bg-cover bg-center bg-no-repeat md:max-w-7xl mx-auto"
    style={{
        backgroundImage: "url('/about.svg')", // Optional background wave
      }} >

    

      <div className="max-w-5xl mx-auto mt-20">
        <div className="mb-8 flex justify-center md:justify-start">
       <div className=" inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-Blue text-white text-xs font-medium shadow-sm md:ml-8">
      
    Who We Are 
    </div>
    </div>
<h1 className="text-sm md:text-3xl md:font-Medium font-semibold md-text-justify text-center text-gray1">
 We are Bitsframe — Your Tech Ally & Strategic IT Services Provider</h1>
        <p className="text-gray1 text-[10px] md:text-lg mb-8 md:ml-9">
          Turning complex challenges into simple, powerful solutions
        </p>

       
      </div>
    </section>
  );
};

export default Hero;