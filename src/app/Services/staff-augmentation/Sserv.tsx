'use client';
import React from "react";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "",
    title: "Vetted Experts",
    description:
      "Extend your team with top-tier designers and developers.",
  },
  {
    number: "",
    title: "Cost-Efficient",
    description:
      "Get the right talent to deliver value without overspending..",
  },
  {
    number: "",
    title: "Flexible Scaling",
    description:
      "Adjust talent where required and boost growth.",
  },
  {
    number: "",
    title: "Fast Onboarding",
    description:
      "Deploy talent within days, not weeks.",
  },
];

const Uiserv: React.FC = () => {
  return (
    
       <section
      className="relative text-white md:py-24 px-6 md:px-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('/process.png')", // Optional background wave
      }}
    >
     
    
     

      <div className="relative z-10 max-w-7xl mx-auto text-center ">
         <div className=" inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-Blue text-white text-sm font-medium shadow-sm mb-6">
   Features
    </div>
        
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
         Top Augmentation Perks
        </h2>
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#0b0b0b] bg-opacity-90 p-6 rounded-lg shadow-md transition hover:shadow-Blue text-left"
            >
              <div className="w-10 h-10 mb-4 rounded-full bg-white/5 flex items-center justify-center text-sm font-semibold text-white">
                {step.number}
              </div>
              <h3 className="md:text-xl text-sm font-semibold mb-2">{step.title}</h3>
              <p className="text-gray2 md:text-sm text-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Uiserv;
