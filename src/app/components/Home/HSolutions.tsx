"use client";

import { ArrowRight } from "lucide-react";

const solutions = [
  {
    id: "01",
    title: "Cybersecurity Solutions",
    desc: "Protects your data with Bitsframe as a trusted IT services provider and streamlines your operations effectively.",
  },
  {
    id: "02",
    title: "AI Chatbots",
    desc: "Engage your customer 24/7 with AI-powered chatbots tailored to your brand, enhancing customer experience and technical support.",
  },
  {
    id: "03",
    title: "Custom Web Development",
    desc: "Launch stunning, high-performance websites designed to your specifications by our expert development team.",
  },
  {
    id: "04",
    title: "Innovative App Solution",
    desc: "Transform your business ideas into intuitive applications with expert design and deployment.",
  },
  {
    id: "05",
    title: "Cloud Architect",
    desc: "With our creative IT solutions, you can build secure cloud systems, keeping your organisation agile and ready for the future.",
  },
  {
    id: "06",
    title: "Cloud Architecture",
    desc: "With our ManagedIT solutions, you can build scalable, secure cloud systems, keeping your organisation agile and ready for the future.",
  },
  {
    id: "07",
    title: "Staff Augmentation",
    desc: "Scale your team with our skilled developers and designers, seamlessly integrated to accelerate your projects.",
  },
  {
    id: "08",
    title: "UI/UX",
    desc: "Craft intuitive, beautiful interfaces that delight users and keep them coming back for more.",
  },
];

const Solutions = () => {
  return (
    <section className="bg-[#0c0c0c] text-white px-6 md:px-12 py-16 rounded-2xl max-w-6xl mx-auto shadow-lg">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Our Dedicated Managed IT Solutions
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Explore our full range of services crafted to meet your business goals and fuel growth.
        </p>
      </div>

      <div className="space-y-6">
  {solutions.map((solution) => (
    <div
      key={solution.id}
      className="flex items-center justify-between border-b border-white/10 pb-5"
    >
      {/* Left section: ID + Title */}
      <div className="flex items-center gap-4 min-w-[30%]">
        <span className="w-6 font-semibold text-white">{solution.id}</span>
        <h3 className="text-white font-semibold text-base md:text-lg whitespace-nowrap">
          {solution.title}
        </h3>
      </div>

      {/* Center: Description */}
      <p className="text-gray2 max-w-sm text-sm flex-1 ml-8">{solution.desc}</p>

      {/* Right: Arrow Button */}
      <div className="ml-4">
        <button className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default Solutions;
