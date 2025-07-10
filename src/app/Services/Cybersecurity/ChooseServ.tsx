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
    title: "Real-Time Threat Detection",
    description:
      "Catch and stop attacks before they strike.",
  },
  {
    number: "",
    title: "Compliance Made Easy",
    description:
      "Meet ISO 27001 and GDPR with confidence.",
  },
  {
    number: "",
    title: "Secure App Protection",
    description:
      "Safeguard your apps from vulnerabilities.",
  },
  {
    number: "",
    title: "24/7 Monitoring",
    description:
      "Constant vigilance to keep your systems safe.",
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
         <div className=" inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-Blue text-white text-sm font-medium shadow-sm mb-6">
      
   . Our Service .
    </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Our Cybersecurity Strengths
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
