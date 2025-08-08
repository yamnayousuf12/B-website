// 'use client';
// import React from "react";

// interface Step {
//   number: string;
//   title: string;
//   description: string;
// }

// const steps: Step[] = [
//   {
//     number: "",
//     title: "Tailored Features",
//     description:
//       "Designed specifically for your business workflow and users.",
//   },
//   {
//     number: "",
//     title: "Cross-Platform Support",
//     description:
//       "Runs smoothly on android, iOS, and web.",
//   },
//   {
//     number: "",
//     title: "Smooth Performance",
//     description:
//       "Fast loading times, seamless navigation, and a consistent experience.",
//   },
//   {
//     number: "",
//     title: "Through Testing",
//     description:
//       "Through Testing",
//   },
// ];

// const Uiserv: React.FC = () => {
//   return (
    
//        <section
//       className="relative text-white md:py-24 px-6 md:px-16 bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/process.png')", // Optional background wave
//       }}
//     >
     
    
     

//       <div className="relative z-10 max-w-7xl mx-auto text-center ">
//          <div className=" inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-Blue text-white text-sm font-medium shadow-sm mb-6">
//    Features
//     </div>
        
//         <h2 className="text-2xl md:text-4xl font-bold mb-4">
//         Smart Mobile Application
//  Development Services
//         </h2>
       

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="bg-[#0b0b0b] bg-opacity-90 p-6 rounded-lg shadow-md transition hover:shadow-Blue text-left"
//             >
//               <div className="w-10 h-10 mb-4 rounded-full bg-white/5 flex items-center justify-center text-sm font-semibold text-white">
//                 {step.number}
//               </div>
//               <h3 className="md:text-xl text-sm font-semibold mb-2">{step.title}</h3>
//               <p className="text-gray2 md:text-sm text-xs">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Uiserv;
"use client";

import Image from "next/image";

const features = [
  {
    img: "/icons/m1.png",
    title: "Tailored Features",
    description:
      "Designed specifically for your business workflow and users.",
  },
  {
    img: "/icons/m2.png",
    title: "Cross-Platform Support",
    description:
      "Runs smoothly on android, iOS, and web.",
  },
  {
    img: "/icons/m3.png",
    title: "Smooth Performance",
    description:
      "Fast loading times, seamless navigation, and a consistent experience.",
  },
  {
    img: "/icons/m4.png",
    title: "Through Testing",
    description:
      "Ensure bug -free launch and meet industry compliance standards.",
  },
];

const Aserv = () => {
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

export default Aserv;
