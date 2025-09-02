"use client";

import Image from "next/image";

const features = [
  {
    img: "/icons/ui.png",
    title: "Intuitive Navigation",
    description:
      "Easy layouts build user confidence and satisfaction.",
  },
  {
    img: "/icons/ui2.png",
    title: "Stunning Visuals",
    description:
      "Grabs attention instantly and enhances user engagement.",
  },
  {
    img: "/icons/ui3.png",
    title: "User Testing",
    description:
      "Tailored to meet user requirements and an improved functionality.",
  },
  {
    img: "/icons/ui4.png",
    title: "Brand Consistency",
    description:
      "Reflect your unique identity, build trust and emotional connection with users.",
  },
];

const Uiserv = () => {
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

export default Uiserv;
