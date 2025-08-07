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
//     title: "Tailored Functionality",
//     description:
//       "Adapted to unique functionalities including effortless integration, user interface and dashboards.",
//   },
//   {
//     number: "",
//     title: "SEO & Performance Optimisation",
//     description:
//       "Custom code and structure, faster load times and better search rankings.",
//   },
//   {
//     number: "",
//     title: "Security & Control",
//     description:
//       "Secure configurations with an absolute control over website behaviour and backend.",
//   },
//   {
//     number: "",
//     title: "Better UX/UI for Conversions",
//     description:
//       "Custom UX strategy improves users' navigation, boosting engagement and conversion rates.",
//   },
// ];

// const  Customserv: React.FC = () => {
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
//           Our Custom Web Development Solutions
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

// export default Customserv;

// "use client";

// import { ShieldUser, Sliders, Newspaper, LineChart  } from "lucide-react";


// const features = [
//   {
//     icon: <Sliders size={28} className="text-Blue" />,
//     title: "Tailored Functionality",
//     description:
//       "Adapted to unique functional ideas including effortless integration, user interfaces and dashboards.",
//   },
//   {
//     icon: <LineChart size={28} className="text-Blue" />,
//     title: "SEO & Performance Optimisation",
//     description:
//       "Custom code and structure, faster load times and better search rankings.",
//   },
//   {
//     icon: <ShieldUser size={28} className="text-Blue" />,
//     title: "Security & Control",
//     description:
//       "Secure configurations with an absolute control over website behaviour and backend.",
//   },
//   {
//     icon: <Newspaper size={28} className="text-Blue" />,
//     title: "Better UX/UI for Conversions",
//     description:
//       "Custom UX strategy improves user navigation, boosting engagement and conversion rates.",
//   },
// ];

// const Customserv = () => {
//   return (
//     <section className="relative text-white md:py-24 px-6 md:px-16 bg-cover bg-center ">
//       <div className="max-w-7xl relative mx-auto text-center border border-white/10 shadow-lg md:py-24 px-6 md:px-16 rounded-lg md:-mt-24 border-b-black">
       
//          <div className=" inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-Blue text-white text-sm font-medium shadow-sm mb-6">
//           Features
//         </div>
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Our Custom Web Development Solutions
//         </h2>
//         <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-[#111] p-6 rounded-xl text-left hover:bg-[#1a1a1a] transition duration-300 shadow-lg"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
//               <p className="text-sm text-gray">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Customserv;


"use client";

import Image from "next/image";

const features = [
  {
    img: "/icons/custom1.png",
    title: "Tailored Functionality",
    description:
      "Adapted to unique functional ideas including effortless integration, user interfaces and dashboards.",
  },
  {
    img: "/icons/custom2.png",
    title: "SEO & Performance Optimisation",
    description:
      "Custom code and structure, faster load times and better search rankings.",
  },
  {
    img: "/icons/custom3.png",
    title: "Security & Control",
    description:
      "Secure configurations with an absolute control over website behaviour and backend.",
  },
  {
    img: "/icons/custom4.png",
    title: "Better UX/UI for Conversions",
    description:
      "Custom UX strategy improves user navigation, boosting engagement and conversion rates.",
  },
];

const Customserv = () => {
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

export default Customserv;
