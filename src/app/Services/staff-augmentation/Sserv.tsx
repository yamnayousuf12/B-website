"use client";

import Image from "next/image";

const features = [
  {
    img: "/icons/s2.png",
    title: "Vetted Experts",
    description:
      "Extend your team with top-tier designers and developers.",
  },
  {
    img: "/icons/s1.png",
    title:  "Cost-Efficient",
    description:
       "Get the right talent to deliver value without overspending.",
  },
  {
    img: "/icons/s3.png",
    title: "Flexible Scaling",
    description:
      "Adjust talent where required and boost growth.",
  },
  {
    img: "/icons/s4.png",
    title: "Fast Onboarding",
    description:
      "Deploy talent within days, not weeks.",
  },
];

const Sserv = () => {
  return (
    <section className="relative text-white md:py-24 px-6 md:px-16 bg-cover bg-center ">
      <div className="max-w-7xl relative mx-auto text-center border -mt-1 border-white/10 shadow-lg md:py-24 px-6 md:px-16 rounded-lg md:-mt-24 py-4 border-b-black bg-[#0D0D0D]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-Blue text-white text-sm font-medium shadow-sm mb-6 mt-3 md:mt-0">
          Features
        </div>
        <h2 className="text-lg md:text-4xl font-bold mb-12">
          Our Custom Web Development Solutions
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#121212] p-6 rounded-xl text-left hover:bg-[#1a1a1a] transition duration-300  border border-white/10 shadow-lg border-b-black"
            >
              <div className="mb-4 rounded-full bg-Blue w-9 h-9 flex items-center justify-center">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={16}
                  height={16}
                  className="object-contain "
                />
              </div>
              <h3 className="md:text-lg  text-xs font-normal mb-2">{feature.title}</h3>
              <p className="md:text-sm text-[9px] text-gray2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sserv;
