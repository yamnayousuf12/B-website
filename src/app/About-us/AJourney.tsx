


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
