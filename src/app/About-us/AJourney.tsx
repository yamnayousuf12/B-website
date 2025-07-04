import React from "react";

const StatsSection = () => {
  return (
   <section
  className="relative py-20 px-6 md:px-16 bg-no-repeat bg-center bg-cover h-screen"
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
     

      <div className="relative z-10 max-w-4xl mx-auto ml-6 ">
        <h1 className="text-7xl font-extrabold md:text-xl mb-4 text-justify text-white ">
         Our Journey at Bitsframe
        </h1>
        <p className="text-base md:text-lg font-light mb-4 text-white/80">
         In the innovative era of tech and AI, finding a one-step IT solution is challenging and risky. Trusting an organisation to assign complete responsibility for IT is like being on thin ice. Four years ago, Bitsframe was founded with one dream: to assist businesses in scaling with cutting-edge technology, all without straining their budget. With a passion for technology and a vision for intelligent business systems, Bitsframe was founded to deliver innovative managed IT solutions that solve real problems.
        </p>
        <p className="text-base md:text-lg font-light mb-4 text-white/80">From building a secure cloud system as our first project to working with international companies, we are always trusted and appreciated. Over these years, we have helped unlimited clients achieve their goals.</p>
        <p className="text-base md:text-lg font-light mb-2 text-white/80">We have had a real impact, from small entrepreneurs seeking IT solutions for small businesses to international enterprises. We are trusted by 22+ brands internationally and within our beloved country, Pakistan.</p>
         </div>
          </section>
  );
};

export default StatsSection;
