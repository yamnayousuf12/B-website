'use client';
import React from "react";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We dive deep into your goals, challenges, and vision to create a tailored plan that sets the foundation for success.",
  },
  {
    number: "02",
    title: "Design & Develop",
    description:
      "Our experts craft innovative solutions—whether it’s a custom app, AI system, or Shopify store—built to perform and scale.",
  },
  {
    number: "03",
    title: "Test & Refine",
    description:
      "We rigorously test every solution, from cybersecurity to UI/UX, ensuring it's flawless and ready for your users.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Go live with confidence. We provide ongoing support to keep your tech running smoothly and evolving with your needs.",
  },
];

const ProcessSteps: React.FC = () => {
  return (
    
       <section
      className="relative  text-white py-24 px-6 md:px-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('/process.png')", // Optional background wave
      }}
    >
     
    
     

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Our Proven Process for Your Success
        </h2>
        <p className="text-gray2 text-base md:text-lg mb-16">
          We make complex projects feel simple with a clear, collaborative approach.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#0b0b0b] bg-opacity-90 p-6 rounded-lg shadow-md transition hover:shadow-Blue text-left"
            >
              <div className="w-10 h-10 mb-4 rounded-full bg-black flex items-center justify-center text-sm font-semibold text-white">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray2 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
