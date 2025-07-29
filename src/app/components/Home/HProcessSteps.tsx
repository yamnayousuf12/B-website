'use client';
import React from 'react';

const ProcessSteps: React.FC = () => {
  return (
    <section className="relative md:rounded-xl  overflow-hidden text-white px-4 py-8 md:py-12 md:px-10 max-w-6xl mx-auto my-10">
      {/* Background image */}
      <div
        className="absolute inset-0 md:bg-cover md:bg-center"
        style={{ backgroundImage: "url('/hf.svg')" }} // use your background image path
      ></div>

      {/* Overlay content */}
      <div className="relative z-10 text-center space-y-1">
        <h3 className="text-sm md:text-3xl font-Medium">
          Struggling with IT Challenges?
        </h3>
        <p className="text-[10px] max-w-52 md:max-w-2xl md:text-base ml-14 md:ml-52 ">
          Our expert delivers AI, custom apps, and cybersecurity solutions that derive results
        </p>
        <p className="text-[10px] md:text-base">
          Get your free IT consulting session with our experts
        </p>

        <button className="mt-4 bg-white text-black text-sm md:text-base font-medium px-5 py-2 rounded-md shadow hover:bg-Blue hover:text-white transition duration-300">
          Book Now →
        </button>
      </div>

      {/* Dark gradient or fade effect if needed */}
      
    </section>
  );
};

export default ProcessSteps;
