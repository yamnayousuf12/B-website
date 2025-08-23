// components/Hero.tsx

import React from "react";

const Hero = () => {
  return (
    <section className="bg-black text-white md:px-6 md:py-20 px-3 py-10 text-center md:text-left relative md:h-[500px] overflow-hidden bg-cover bg-center bg-no-repeat md:max-w-full mx-auto "
    style={{
        backgroundImage: "url('/about.png')", // Optional background wave
      }} >

    

      <div className="max-w-5xl mx-auto mt-20">
        <div className="mb-8 flex justify-center md:justify-start">
       <div className=" inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-Blue text-white text-sm font-normal shadow-sm md:ml-10">
      
    Contact 
    </div>
    </div>
<h1 className="text-lg md:text-4xl md:mr-44 fount-semibold md-text-justify text-center text-gray1">
Lets Create Something Extraordinary with Us</h1>
        <p className="text-gray1 text-[10px] md:text-lg mb-8 md:ml-10">
          Ready to transform your business? Reach out, we are here to help
        </p>
      </div>
    </section>
  );
};

export default Hero;