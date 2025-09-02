
// import Image from "next/image";

// const services = [
//   {
//     imgSrc: "/icons/ai2.png",
//     title: "Predictive Analysis",
//     description: "Forecasts trends to stay ahead and optimise strategic planning.",
//   },
//   {
//     imgSrc: "/Vector.svg",
//     title: "Smart Automation",
//     description: "Stramline tasks with AI workflows.",
//   },
//   {
//     imgSrc: "/icons/ai4.png",
//     title: "Custom Models",
//     description: "Fine-tuned specifically for your data, tasks and business goals.",
//   },
//   {
//     imgSrc: "/icons/ai3.png",
//     title: "Seamless Integration",
//     description: "Faster implementation of the existing system without disruption.",
//   },
// ];

// const AIServiceSection = () => {
//   return (
//     <section className="bg-black text-white py-20 px-4 md:px-16 text-center">
//       <div className="mb-6">
//         <button className="bg-Blue px-4 py-1 rounded-full text-sm font-medium">
//           Features
//         </button>
//       </div>
//       <h2 className="text-3xl md:text-4xl font-bold mb-12">Our AI Driven Services</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-[#0f0f0f] rounded-lg p-6 flex flex-col items-start hover:shadow-xl transition"
//           >
//             <div className="mb-2">
//               <div className="w-12 h-12 bg-Blue rounded-full flex items-center justify-center">
//                 <Image src={service.imgSrc} alt={service.title} width={30} height={30} />
//               </div>
//             </div>
//             <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
//             <p className="text-sm text-gray">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AIServiceSection;

"use client";

import Image from "next/image";

const features = [
  {
     img: "/icons/ai2.png",
     title: "Predictive Analysis",
     description: "Forecasts trends to stay ahead and optimise strategic planning.",
  },
  {
     img: "/icons/ai.png",
     title: "Smart Automation",
     description: "Stramline tasks with AI workflows.",
  },
  {
     img: "/icons/ai4.png",
     title: "Custom Models",
     description: "Fine-tuned specifically for your data, tasks and business goals.",
  },
  {
     img: "/icons/ai3.png",
     title: "Seamless Integration",
     description: "Faster implementation of the existing system without disruption.",
  },
];

const Aiserv = () => {
  return (
    <section className="relative text-white md:py-24 px-6 md:px-16 bg-cover bg-center ">
      <div className="max-w-7xl relative mx-auto text-center border -mt-1 border-white/10 shadow-lg md:py-24 px-6 md:px-16 rounded-lg md:-mt-24 py-4 border-b-black bg-[#0D0D0D]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-Blue text-white text-sm font-medium shadow-sm mb-6 mt-3 md:mt-0">
          Features
        </div>
        <h2 className="text-lg md:text-4xl font-bold mb-12">
         Our AI Driven Services
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

export default Aiserv;
