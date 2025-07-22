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
    title: "Intuitive Navigation",
    description:
      "Easy layouts build user confidence and satisfaction.",
  },
  {
    number: "",
    title: "Stunning Visuals",
    description:
      "Grabs attention instantly and enhances user engagement.",
  },
  {
    number: "",
    title: "User Testing",
    description:
      "Tailored to meet user requirements and an improved functionality.",
  },
  {
    number: "",
    title: "Brand Consistency",
    description:
      "Reflect your unique identity, build trust and emotional connection with users.",
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
         Why Choose Our UI UX Development Services?
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
