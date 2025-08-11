// "use client";
// import React from "react";

// type Event = {
//   year: string;
//   title?: string;
//   description?: string;
// };

// const events: Event[] = [
//   {
//     year: "Beginning",
//     title: "The Dream Begins",
//     description:
//       "Bitsframe was born from a dream, to make innovative, high-quality IT services accessible and reliable for every business. We embarked on this journey to simplify the digital world for businesses of all sizes.",
//   },
//   { year: "2021" },
//   { year: "2022" },
//   { year: "2023" },
//   { year: "2024" },
//   { year: "Future Projection" },
// ];

// const Timeline = () => {
//   const beginningEvent = events[0];
//   const remainingEvents = events.slice(1);

//   return (
//     <section
//       className="relative md:max-w-7xl mx-auto bg-[#0f0f0f] text-white px-4 md:px-14 py-20 overflow-hidden"
//       style={{
//         backgroundImage: "url('/Hstats.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Optional internal border */}
//       <div className="absolute inset-12 border border-Blue pointer-events-none rounded-2xl"></div>

//       {/* Title */}
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 relative z-10 text-gradient">
//         Our Journey at Bitsframe
//       </h2>

//       {/* Layout */}
//       <div className="relative min-h-[500px]  -left-2">
//         {/* Left side year + horizontal lines */}
//         <div className="absolute top-0 left-0 flex flex-col gap-[70px] z-10 pl-0">
//           {events.map((event, idx) => (
//             <div key={idx} className="flex items-center">
//               <div className="w-10 border-t border-[#2D72FA] mr-4"></div>
//               <span
//                 className={`text-sm ${
//                   event.year === "Beginning" ? "text-[#2D72FA]" : "text-white"
//                 }`}
//               >
//                 {event.year}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Grid timeline lines */}
//         <div className="relative grid grid-cols-[1fr_1.5fr_repeat(4,_1fr)] gap-8 pl-36 border-l border-[#2D72FA] h-[533px]">
//           {/* Beginning column */}
//           <div className="relative ">
//             {/* Vertical line */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full  to-transparent border-l border-[#2D72FA]" />

//             {/* Vertical label */}
//             <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -rotate-90 origin-left text-sm text-Blue tracking-wide">
//               {beginningEvent.year}
//             </div>

//             {/* Info Box */}
//             <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#2D72FA] bg-black/50 backdrop-blur-md p-4 rounded-md w-64 shadow-xl">
//               <h3 className="font-bold text-white text-base mb-2">
//                 {beginningEvent.title}
//               </h3>
//               <p className="text-white text-xs">
//                 {beginningEvent.description}
//               </p>
//             </div>
//           </div>

//           {/* Remaining years */}
//           {remainingEvents.map((event, idx) => (
//             <div key={idx} className="relative left-14">
//               {/* Vertical line */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#2D72FA]  to-transparent" />

//               {/* Vertical label */}
//               <div className="absolute top-10 left-24 transform -translate-x-1/2 -rotate-90 origin-left text-sm text-white tracking-wide">
//                 {event.year}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Timeline;


// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// type Event = {
//   year: string;
//   title?: string;
//   description?: string;
// };

// const events: Event[] = [
//   {
//     year: "Beginning",
//     title: "The Dream Begins",
//     description:
//       "Bitsframe was born from a dream, to make innovative, high-quality IT services accessible and reliable for every business. We embarked on this journey to simplify the digital world for businesses of all sizes.",
//   },
//   { year: "2021",
//      title: "The Dream Begins",
//     description:
//       "Bitsframe was born from a dream, to make innovative, high-quality IT services accessible and reliable for every business. We embarked on this journey to simplify the digital world for businesses of all sizes.",
//    },
//   { year: "2022", 
//     title: "The Dream Begins",
//     description:
//       "Bitsframe was born from a dream, to make innovative, high-quality IT services accessible and reliable for every business. We embarked on this journey to simplify the digital world for businesses of all sizes.", },
//   { year: "2023",
//      title: "The Dream Begins",
//     description:
//       "Bitsframe was born from a dream, to make innovative, high-quality IT services accessible and reliable for every business. We embarked on this journey to simplify the digital world for businesses of all sizes.",
//    },
//   { year: "2024",
//      title: "The Dream Begins",
//     description:
//       "Bitsframe was born from a dream, to make innovative, high-quality IT services accessible and reliable for every business. We embarked on this journey to simplify the digital world for businesses of all sizes.",
//    },
//   { year: "Future Projection",
//      title: "The Dream Begins",
//     description:
//       "Bitsframe was born from a dream, to make innovative, high-quality IT services accessible and reliable for every business. We embarked on this journey to simplify the digital world for businesses of all sizes.",
//    },
// ];

// const Timeline = () => {
//   const beginningEvent = events[0];
//   const remainingEvents = events.slice(1);

//   return (
//     <section
//       className="relative md:max-w-7xl mx-auto bg-[#0f0f0f] text-white px-4 md:px-14 py-20 overflow-hidden"
//       style={{
//         backgroundImage: "url('/Hstats.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Optional internal border */}
//       <div className="absolute inset-12 border border-Blue pointer-events-none rounded-2xl"></div>

//       {/* Title */}
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold text-center mb-20 relative z-10 text-gradient"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Our Journey at Bitsframe
//       </motion.h2>

//       {/* Layout */}
//       <div className="relative min-h-[500px] -left-2">
//         {/* Left side year + horizontal lines */}
//         <div className="absolute top-0 left-0 flex flex-col gap-[70px] z-10 pl-0">
//           {events.map((event, idx) => (
//             <motion.div
//               key={idx}
//               className="flex items-center"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.2 }}
//             >
//               <motion.div
//                 className="w-10 border-t border-[#2D72FA] mr-4"
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ duration: 0.5, delay: idx * 0.2 }}
//               ></motion.div>
//               <span
//                 className={`text-sm ${
//                   event.year === "Beginning" ? "text-[#2D72FA]" : "text-white"
//                 }`}
//               >
//                 {event.year}
//               </span>
//             </motion.div>
//           ))}
//         </div>

//         {/* Grid timeline lines */}
//         <div className="relative grid grid-cols-[1fr_1.5fr_repeat(4,_1fr)] gap-8 pl-36 border-l border-[#2D72FA] h-[533px]">
//           {/* Beginning column */}
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             {/* Vertical line */}
//             <motion.div
//               className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full border-l border-[#2D72FA]"
//               initial={{ scaleY: 0 }}
//               animate={{ scaleY: 1 }}
//               transition={{ duration: 0.6 }}
//             />

//             {/* Vertical label */}
//             <motion.div
//               className="absolute top-10 left-1/2 transform -translate-x-1/2 -rotate-90 origin-left text-sm text-Blue tracking-wide"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               {beginningEvent.year}
//             </motion.div>

//             {/* Info Box */}
//             <motion.div
//               className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#2D72FA] bg-black/50 backdrop-blur-md p-4 rounded-md w-64 shadow-xl"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//             >
//               <h3 className="font-bold text-white text-base mb-2">
//                 {beginningEvent.title}
//               </h3>
//               <p className="text-white text-xs">{beginningEvent.description}</p>
//             </motion.div>
//           </motion.div>

//           {/* Remaining years */}
//           {remainingEvents.map((event, idx) => (
//             <motion.div
//               key={idx}
//               className="relative left-14"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.3 + 0.6 }}
//             >
//               {/* Vertical line */}
//               <motion.div
//                 className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#2D72FA]"
//                 initial={{ scaleY: 0 }}
//                 animate={{ scaleY: 1 }}
//                 transition={{ duration: 0.6, delay: idx * 0.3 + 0.6 }}
//               />

//               {/* Vertical label */}
//               <motion.div
//                 className="absolute top-10 left-24 transform -translate-x-1/2 -rotate-90 origin-left text-sm text-white tracking-wide"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: idx * 0.3 + 0.8 }}
//               >
//                 {event.year}
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Timeline;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// type Event = {
//   year: string;
//   title?: string;
//   description?: string;
// };

// const events: Event[] = [
//   {
//     year: "Beginning",
//     title: "The Dream Begins",
//     description:
//       "Bitsframe was born from a dream, to make innovative, high-quality IT services accessible and reliable for every business. We embarked on this journey to simplify the digital world for businesses of all sizes.",
//   },
//   {
//     year: "2021",
//     title: "Laying the Foundation",
//     description:
//       "Kicked off with a small, dedicated team committed to excellence and cutting-edge technology. Started from working with small businesses providing them cost-effective web services and IT solutions.",
//   },
//   {
//     year: "2022",
//     title: "Growth and Expansion",
//     description:
//       "Expanded the client base and enhanced our service portfolio with new IT solutions and digital marketing strategies to cater to larger enterprises.",
//   },
//   {
//     year: "2023",
//     title: "Innovation and Partnerships",
//     description:
//       "Formed strategic partnerships and introduced innovative tech products to the market, strengthening our position in the IT services sector.",
//   },
//   {
//     year: "2024",
//     title: "Scaling New Heights",
//     description:
//       "Scaled operations internationally, building a diverse and global client network, and investing in cutting-edge technology.",
//   },
//   {
//     year: "Future Projection",
//     title: "Vision Ahead",
//     description:
//       "Aiming to be the global leader in IT services with continuous innovation, customer-centric solutions, and sustainable growth.",
//   },
// ];

// const Timeline = () => {
//   // const remainingEvents = events.slice(1);

//   return (
//     <section
//       className="relative md:max-w-7xl mx-auto bg-[#0f0f0f] text-white px-4 md:px-14 py-20 overflow-hidden"
//       style={{
//         backgroundImage: "url('/Hstats.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Optional internal border */}
//       <div className="absolute inset-5 border border-Red  pointer-events-none rounded-2xl" ></div>

//       {/* Title */}
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold text-center mb-20 relative z-10 text-gradient"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Our Journey at Bitsframe
//       </motion.h2>

//       {/* Layout */}
//       <div className="relative min-h-[500px] -left-9">
//         {/* Left side year + horizontal lines */}
//         <div className="absolute top-0 left-0 flex flex-col gap-[70px] z-10 pl-0 ">
//           {events.map((event, idx) => (
//             <motion.div
//               key={idx}
//               className="flex items-center"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.2 }}
//             >
//               <motion.div
//                 className="w-8 border-t border-[#2D72FA]  "
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ duration: 0.5, delay: idx * 0.2 }}
//               ></motion.div>
//               <span
//                 className={`text-sm ${
//                   event.year === "Beginning" ? "text-[#2D72FA]" : "text-white"
//                 }`}
//               >
//                 {event.year}
//               </span>
//             </motion.div>
//           ))}
//         </div>

//         {/* Grid timeline lines and columns */}
//         <div className="relative grid grid-cols-[1fr_1.5fr_repeat(4,_1fr)] gap-8 pl-36 border-l border-[#2D72FA] h-[533px]">
//           {/* Map all events including "Beginning" for consistent columns */}
//           {events.map((event, idx) => (
//             <motion.div
//               key={idx}
//               className={`relative ${idx === 0 ? "" : "left-14"}`}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.3 + 0.2 }}
//             >
//               {/* Vertical line */}
//               <motion.div
//                 className="absolute left-2 transform -translate-x-1/2 w-[2px] h-[585px] border-l border-[#2D72FA]"
//                 initial={{ scaleY: 0 }}
//                 animate={{ scaleY: 1 }}
//                 transition={{ duration: 0.6, delay: idx * 0.3 + 0.2 }}
//               />

//               {/* Vertical label rotated */}
//               <motion.div
//                 className={`absolute -top-6 ${
//                   idx === 0 ? "left-1/2 transform -translate-x-1/2" : "left-5"
//                 } -rotate-90 origin-left text-sm ${
//                   idx === 0 ? "text-Blue" : "text-white"
//                 } tracking-wide`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: idx * 0.3 + 0.4 }}
//               >
//                 {event.year}
//               </motion.div>

//               {/* Info Box */}
//               <motion.div
//                 className={`absolute top-20  ${
//                   idx === 0 ? "left-3 transform -translate-x-1/2 -translate-y-1/2" : ""
//                 } border border-[#2D72FA] bg-black/50 backdrop-blur-md p-4 rounded-md w-52 shadow-xl`}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: idx * 0.3 + 0.5 }}
//               >
//                 <h3 className="font-bold text-white text-base mb-2">{event.title}</h3>
//                 <p className="text-white text-xs">{event.description}</p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Timeline;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type Event = {
  year: string;
  title?: string;
  description?: string;
};

const events: Event[] = [
  {
    year: "Beginning",
    title: " The Dream Begins",
    description:
      "Bitsframe was born from a dream, to make innovative, high-quality IT services accessible and reliable for every business. We embarked on this journey to simplify the digital world for businesses of all sizes.",
  },
  {
    year: "2021",
    title: "Laying the Foundation",
    description:
      "Kicked off with a small, dedicated team committed to excellence and cutting-edge technology. Started from working with small businesses providing them cost-effective web services and IT consultation.",
  },
  {
    year: "2022",
    title: "Expanding Horizons",
    description:
      "Completed 30+ projects, internationally showcasing our versatility and capacity to handle a range of IT solutions. 	Solidified our expertise in the cloud space, enabling us to deliver scalable solutions to clients across diverse industries.",
  },
  {
    year: "2023",
    title: "Delivering Excellence",
    description:
      "Bitsframe became a trusted name in IT solutions. With more than 50+  projects completed and a growing portfolio of satisfied clients, we pushed the boundaries of technology.",
  },
  {
    year: "2024",
    title: "A Year of Recognition",
    description:
      "With AWS certifications under our belt and a portfolio that includes 22+ brands across various industries, we are proud of the partnerships and milestones we have achieved.",
  },
  {
    year: "Future Projection",
    title: "The Road Ahead",
    description:
      "Looking ahead, we will continue to evolve as a leader in IT solutions. Our goal remains clear:\n to make cutting-edge IT accessible, affordable, and reliable for every business, large and small.",
  },
];

const Timeline = () => {
  // Track which event box is open; null = none open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section
      className="relative max-w-7xl md:max-w-full lg:max-w-full mx-auto bg-[#0f0f0f] text-white px-10 md:px-14 py-14 md:py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/Hstats.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute md:inset-5 inset-2 border border-Blue pointer-events-none rounded-2xl"></div>

      <motion.h2
        className="text-2xl md:text-4xl font-bold text-center md:mb-28 mb-20 relative z-10 text-gradient"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Journey at Bitsframe
      </motion.h2>

      <div className="relative md:min-h-[500px] md:-left-9 -left-8 ">
        {/* Left side year + horizontal lines */}
        <div className="absolute top-0 left-0 flex flex-col gap-[70px]  z-10 pl-0">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              className="flex items-center cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              onClick={() => toggleOpen(idx)}
            >
              <motion.div
                className="md:w-8 w-3 border-t border-[#2D72FA]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              />
              <span
                className={`md:text-sm text-[6px] ${
                  event.year === "Beginning" ? "text-[#2D72FA]" : "text-white"
                }`}
              >
                {event.year}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Grid timeline lines and columns */}
        <div className="relative grid grid-cols-[1fr_1.5fr_repeat(4,_1fr)] gap-4 md:pl-36 pl-16 border-l border-[#2D72FA] md:h-[533px] h-[370px]">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              className={`relative ${idx === 0 ? "" : "md:left-16 left-3"}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.3 + 0.2 }}
            >
              {/* Vertical line */}
              <motion.div
                className="absolute left-2 transform -translate-x-1/2 w-[2px] md:h-[585px] h-[415px] border-l border-[#2D72FA]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.3 + 0.2 }}
              />

              {/* Vertical label rotated */}
              <motion.div
                className={`absolute top-1 ${
                  idx === 0
                    ? "left-1/2 transform -translate-x-1/2"
                    : "left-7 cursor-pointer"
                } -rotate-90 origin-left md:text-sm text-[8px] ${
                  idx === 0 ? "text-Blue" : "text-white"
                } tracking-wide`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.3 + 0.4 }}
                onClick={() => toggleOpen(idx)}
              >
                {event.year}
              </motion.div>

              {/* Info Box - Only show if open */}
              {openIndex === idx && (
                // <motion.div
                //   className={`absolute top-20 ${
                //     idx === 0
                //       ? "md:left-8 left-3 transform -translate-x-1/2 -translate-y-1/2"
                //       : ""
                //   } border border-[#2D72FA] bg-black backdrop-blur-md p-2 rounded-md md:w-40 w-20 shadow-xl`}
                //   initial={{ opacity: 0, scale: 0.8 }}
                //   animate={{ opacity: 1, scale: 1 }}
                //   exit={{ opacity: 0, scale: 0.8 }}
                //   transition={{ duration: 0.5, delay: idx * 0.3 + 0.5 }}
                // >
                <motion.div
    className="border border-[#2D72FA] bg-black backdrop-blur-md p-4 rounded-md w-32 h-32 md:w-44 shadow-xl mt-20"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
                  <h3 className="font-normal text-white md:text-sm text-[10px] mb-2 -mt-3">
                    {event.title}
                  </h3>
                  <p className="text-white md:text-[9px] text-[6px] text-start ">{event.description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
