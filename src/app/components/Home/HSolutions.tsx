"use client";

import { ArrowRight } from "lucide-react";

const solutions = [
  {
    id: "01",
    title: "Custom Web Development",
    desc: "Launch stunning, high-performance websites designed to your specifications by our expert development team.",
  },
  {
    id: "02",
    title: "UI/UX",
    desc: "Craft intuitive, beautiful interfaces that delight users and keep them coming back for more.",
  },
  {
    id: "03",
    title: "Innovative App Solution",
    desc: "Transform your business ideas into intuitive applications with expert design and deployment.",
  },
  {
    id: "04",
    title: "Staff Augmentation",
    desc: "Scale your team with our skilled developers and designers, seamlessly integrated to accelerate your projects.",
  },
  {
    id: "05",
    title: "Cybersecurity Solutions",
    desc: "Protect your data with Bitsframe as a trusted IT services provider and streamlines your operations effectively.",
  },
  {
    id: "06",
    title: "AI Chatbots",
    desc: "Engage your customer 24/7 with AI-powered chatbots tailored to your brand, enhancing customer experience and technical support.",
  },
  {
    id: "07",
    title: "AI Automation Solutions",
    desc: "Harness to AI solutions to transform your business, from predictive analytics to intelligent automation, tailored to your goals.",
  },
  {
    id: "08",
    title: "Cloud Architecture",
    desc: "With our managed IT solutions, you can build scalable, secure cloud systems, keeping your organization agile and ready for the future.",
  },
];

const Solutions = () => {
  return (
    <section className="bg-[#0D0D0D] text-white px-6 md:px-12  md:py-9 py-1 rounded-xl max-w-6xl mx-auto shadow-lg">
      <div className="mb-12">
        <h2 className="text-lg md:text-4xl font-Medium mb-3 text-white">
          Our Dedicated Managed IT Solutions
        </h2>
        <p className="text-gray text-[10px] md:text-base">
          Explore our full range of services crafted to meet your business goals and fuel growth
        </p>
      </div>

      <div className="space-y-6">
  {solutions.map((solution) => (
    <div
      key={solution.id}
      className="flex items-center justify-between border-b border-white/10 pb-5"
    >
      {/* Left section: ID + Title */}
      <div className="flex items-center gap-2 md:gap-4 md:min-w-[30%] min-w-[20%]">
        <span className="md:w-6 font-Medium text-white text-[10px]">{solution.id}</span>
        <h3 className="text-white font-Medium text-[10px] md:text-lg md:whitespace-nowrap">
          {solution.title}
        </h3>
      </div>

      {/* Center: Description */}
      <p className="text-gray1 text-[8px] md:max-w-lg text-balance max-w-xs md:text-sm md:flex-1 md:ml-8 ml-16">{solution.desc}</p>

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
