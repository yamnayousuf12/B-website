// import React from "react";

// const StatsSection = () => {
//   return (
//    <section
//   className="relative bg-black md:py-20 py-9 px-6 md:px-16 bg-no-repeat bg-center bg-cover md:h-screen"
//   style={{
//     backgroundImage: "url('/Hstats.png')",
//   }}
// >
     

//       <div className="relative z-10 max-w-4xl mx-auto ml-6 ">
//         <h1 className="text-xl font-extrabold md:text-3xl mb-4 text-justify text-white ">
//          Our Journey at Bitsframe
//         </h1>
//         <p className="text-sm md:text-lg font-light mb-4 text-gray1">
//          In the innovative era of tech and AI, finding a one-step IT solution is challenging and risky. Trusting an organisation to assign complete responsibility for IT is like being on thin ice. Four years ago, Bitsframe was founded with one dream, to assist businesses in scaling with cutting-edge technology, all without straining their budget. With a passion for technology and a vision for intelligent business systems, Bitsframe was founded to deliver innovative <span className="text-white font-medium">managed IT solutions</span> that solve real problems.
//         </p>
//         <p className="text-sm md:text-lg font-light mb-4 text-gray1">From building a secure cloud system as our first project to working with international companies, we are always trusted and appreciated. Over these years, we have helped unlimited clients achieve their goals.</p>
//         <p className="text-sm md:text-lg font-light mb-2 text-gray1">We have had a real impact, from entrepreneurs seeking IT solutions for small businesses to international enterprises. We are trusted by 22+ brands internationally and within our beloved country, Pakistan.</p>
//          </div>
//           </section>
//   );
// };

// export default StatsSection;



// components/Timeline.tsx
// "use client";

// import React from "react";

// const Timeline = () => {
//   const years = [
//     "Beginning",
//     "2021",
//     "2022",
//     "2023",
//     "2024",
//     "Future Projection",
//   ];

//   const eventDescription = {
//     title: "The Dream Begins",
//     desc: "Bitsframe was born from a dream, to make innovative, high-quality IT services accessible and reliable for every business. We embarked on this journey to simplify the digital world for businesses of all sizes.",
//   };

//   return (
//     <section className="relative w-full bg-black text-white px-4 md:px-12 py-20 overflow-hidden border border-white/10 rounded-xl">
//       {/* Title */}
//       <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
//         Our Journey at <span className="text-Blue">Bitsframe</span>
//       </h2>

//       {/* Horizontal and Vertical Lines */}
//       <div className="relative grid grid-cols-7 gap-4 text-center text-sm md:text-base text-white/70">
//         {years.map((year, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <div className="h-[300px] w-px bg-Blue mb-2" />
//             <span
//               className={`${
//                 index === 0
//                   ? "text-Blue font-medium"
//                   : index === years.length - 1
//                   ? "text-white rotate-90 mt-4"
//                   : ""
//               }`}
//             >
//               {year}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Beginning Box */}
//       <div className="absolute top-[180px] left-[7%] md:left-[10%] w-[250px] md:w-[300px] border border-Blue rounded-md p-5 bg-black/60 text-left z-10">
//         <h3 className="text-lg font-semibold mb-2">{eventDescription.title}</h3>
//         <p className="text-sm text-white/80 leading-relaxed">
//           {eventDescription.desc}
//         </p>
//       </div>

//       {/* Flowing Lines */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
//         <svg
//           className="w-full h-full opacity-10"
//           preserveAspectRatio="none"
//           viewBox="0 0 1440 320"
//         >
//           <path
//             fill="none"
//             stroke="white"
//             strokeWidth="1"
//             strokeOpacity="0.2"
//             d="M0,160L80,154.7C160,149,320,139,480,128C640,117,800,107,960,122.7C1120,139,1280,181,1360,202.7L1440,224"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Timeline;

// "use client";
// import React from "react";

// const events = [
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
//   return (
//     <section className="relative bg-[#0f0f0f] text-white px-4 md:px-16 py-20 overflow-hidden rounded-md border border-white/10">
//       {/* Title */}
//       <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
//         Our Journey at <span className="text-[#2D72FA]">Bitsframe</span>
//       </h2>

//       {/* Grid Layout */}
//       <div className="relative grid grid-cols-7 gap-48p border-l border-Blue min-h-[500px] pl-16    ">
       
//  <div className="relative">
//   {/* Horizontal Lines + Year Labels */}
//   <div className="absolute top-0 right-16 w-full h-full ">
//     {events.map((event, idx) => (
//       <div
//         key={idx}
//         className="absolute flex items-center "
//         style={{ top: `${idx * 90}px` }}
//       >
//         <div className="w-10 border-t border-[#2D72FA] mr-2"></div>
//         <span
//           className={`text-sm ${
//             event.year === "Beginning" ? "text-[#2D72FA]" : "text-white"
//           }`}
//         >
//           {event.year}
//         </span>
//       </div>
//     ))}
//   </div>
// </div>

//        {events.map((event, idx) => (
//   <div key={idx} className="relative col-span-1  ">
//     {/* Vertical Line */}
//     <div
//       className="absolute -left-24 transform -translate-x-1/2 h-full border-l border-[#2D72FA] "
//     />

//     {/* Label at Top */}
//     <div className="absolute top-12 -left-20  text-sm text-Red rotate-90 md:rotate-10">
//       {event.year}
//     </div>

//     {/* Show Box only for 'Beginning' */}
//     {event.title && (
//       <div className="absolute top-20 left-0 border border-[#2D72FA] bg-[#0f0f0f] text-white w-52 p-4 rounded-md shadow-md text-sm">
//         <h3 className="font-bold text-sm mb-2">{event.title}</h3>
//         <p className="text-white text-[9px]">{event.description}</p>
//       </div>
//     )}
//   </div>
// ))}
//       </div>


//     </section>
//   );
// };

// export default Timeline;

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
//   // Extract the first event and the rest
//   const beginningEvent = events[0];
//   const remainingEvents = events.slice(1);

//   return (
//     <section
//       className="relative md:max-w-7xl mx-auto bg-[#0f0f0f] text-white px-4 md:px-16 py-20 overflow-hidden rounded-md border border-white/10"
//       style={{
//         backgroundImage: "url('/Hstats.png')", // ✅ your image path
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="absolute inset-10  border-Blue border"></div>
//       {/* Title */}
//       <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 ">
//         Our Journey at <span className="text-[#2D72FA]">Bitsframe</span>
//       </h2>

//       {/* Grid Layout */}
// <div className="relative grid grid-cols-7 gap-44 min-h-[500px] pl-16">
//   {/* Horizontal Lines + Year Labels */}
//   <div className="relative">
//     <div className="absolute top-0 right-20 w-full h-full">
//       {events.map((event, idx) => (
//         <div
//           key={idx}
//           className="absolute flex items-center"
//           style={{ top: `${idx * 90}px` }}
//         >
//           <div className="w-10 border-t border-[#2D72FA] mr-4"></div>
//           <span
//             className={`text-sm ${
//               event.year === "Beginning"
//                 ? "text-[#2D72FA]"
//                 : "text-white"
//             }`}
//           >
//             {event.year}
//           </span>
//         </div>
//       ))}
//     </div>
//   </div>
//   <div className="relative grid grid-cols-8 gap-44 min-h-[500px] pl-1">
//     {/* Vertical Lines & Content */}
//     <div className="relative grid grid-cols-8 gap-44 min-h-[500px] pl-1">
//       {/* Beginning Event */}
//       <div className="relative col-span-1">
//         {/* Vertical Line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#2D72FA] via-[#2D72FA]/60 to-transparent" />

//         {/* Vertical Rotated Year */}
//         <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -rotate-90 origin-left text-sm text-white tracking-wide">
//           {beginningEvent.year}
//         </div>

//         {/* Info Box */}
//         <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#2D72FA] bg-black/50 backdrop-blur-md p-4 rounded-md w-64 shadow-xl">
//           <h3 className="font-bold text-white text-base mb-2">
//             {beginningEvent.title}
//           </h3>
//           <p className="text-white text-xs">{beginningEvent.description}</p>
//         </div>
//       </div>
//       {remainingEvents.map((event: Event, idx: number) => (
//         <div key={idx} className="relative col-span-1">
//           {/* Vertical Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#2D72FA] via-[#2D72FA]/60 to-transparent" />

//           {/* Vertical Rotated Year */}
//           <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -rotate-90 origin-left text-sm text-white tracking-wide">
//             {event.year}
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
//     </section>
//   );
// };

// export default Timeline;


"use client";
import React from "react";

type Event = {
  year: string;
  title?: string;
  description?: string;
};

const events: Event[] = [
  {
    year: "Beginning",
    title: "The Dream Begins",
    description:
      "Bitsframe was born from a dream, to make innovative, high-quality IT services accessible and reliable for every business. We embarked on this journey to simplify the digital world for businesses of all sizes.",
  },
  { year: "2021" },
  { year: "2022" },
  { year: "2023" },
  { year: "2024" },
  { year: "Future Projection" },
];

const Timeline = () => {
  const beginningEvent = events[0];
  const remainingEvents = events.slice(1);

  return (
    <section
      className="relative md:max-w-7xl mx-auto bg-[#0f0f0f] text-white px-4 md:px-14 py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/Hstats.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional internal border */}
      <div className="absolute inset-12 border border-Blue pointer-events-none rounded-2xl"></div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 relative z-10 text-gradient">
        Our Journey at Bitsframe
      </h2>

      {/* Layout */}
      <div className="relative min-h-[500px]  -left-2">
        {/* Left side year + horizontal lines */}
        <div className="absolute top-0 left-0 flex flex-col gap-[70px] z-10 pl-0">
          {events.map((event, idx) => (
            <div key={idx} className="flex items-center">
              <div className="w-10 border-t border-[#2D72FA] mr-4"></div>
              <span
                className={`text-sm ${
                  event.year === "Beginning" ? "text-[#2D72FA]" : "text-white"
                }`}
              >
                {event.year}
              </span>
            </div>
          ))}
        </div>

        {/* Grid timeline lines */}
        <div className="relative grid grid-cols-[1fr_1.5fr_repeat(4,_1fr)] gap-8 pl-36 border-l border-[#2D72FA] h-[533px]">
          {/* Beginning column */}
          <div className="relative ">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full  to-transparent border-l border-[#2D72FA]" />

            {/* Vertical label */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -rotate-90 origin-left text-sm text-Blue tracking-wide">
              {beginningEvent.year}
            </div>

            {/* Info Box */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#2D72FA] bg-black/50 backdrop-blur-md p-4 rounded-md w-64 shadow-xl">
              <h3 className="font-bold text-white text-base mb-2">
                {beginningEvent.title}
              </h3>
              <p className="text-white text-xs">
                {beginningEvent.description}
              </p>
            </div>
          </div>

          {/* Remaining years */}
          {remainingEvents.map((event, idx) => (
            <div key={idx} className="relative left-14">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#2D72FA]  to-transparent" />

              {/* Vertical label */}
              <div className="absolute top-10 left-24 transform -translate-x-1/2 -rotate-90 origin-left text-sm text-white tracking-wide">
                {event.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
