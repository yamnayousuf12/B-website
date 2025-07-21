// 'use client';
// import React from "react";



// const ProcessSteps: React.FC = () => {
//   return (
//      <section
//   className="relative text-white py-3 px-4 md:px-16 bg-no-repeat md:bg-center md:bg-cover rounded-md Shadow-md">
//      <div
//         className="absolute inset-1 md:bg-cover md:bg-center z-0 opacity-60 md:border-b-customBlue md:rounded-3xl "
//   style={{
//     backgroundImage: "url('/hf.svg')",
//    }}>
//           <h3 className="text-xl md:text-2xl font-Bold mb-2 twxt-center text-white">
//             Struggling with IT  Challenges?
//           </h3>
//           <p className="text-white mb-1 text-sm md:text-base text-center max-w-2xl md:ml-20">
//            Our expert delivers AI, custom apps, and cybersecurity solutions that derive results

//           </p>
//            <p className="text-white mb-4 text-sm md:text-base text-center max-w-2xl md:ml-20">
//            get  your free IT consulting session with our experts
//           </p>
//           <button className="text-sm px-2 py-1 bg-white text-black font-medium md:px-6 md:py-2 rounded-md hover:bg-Blue transition">
//             Book Now →
//           </button>
//           </div>
//           </section>
      
//   );
// };

// export default ProcessSteps;


'use client';
import React from 'react';

const ProcessSteps: React.FC = () => {
  return (
    <section className="relative rounded-xl overflow-hidden text-white px-4 py-8 md:py-12 md:px-10 max-w-6xl mx-auto my-10">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hf.svg')" }} // use your background image path
      ></div>

      {/* Overlay content */}
      <div className="relative z-10 text-center space-y-2">
        <h3 className="text-xs md:text-3xl font-Medium">
          Struggling with IT Challenges?
        </h3>
        <p className="text-[10px] max-w-52 md:text-base ml-14">
          Our expert delivers AI, custom apps, and cybersecurity solutions that derive results
        </p>
        <p className="text-sm md:text-base">
          Get your free IT consulting session with our experts
        </p>

        <button className="mt-4 bg-white text-black text-sm md:text-base font-medium px-5 py-2 rounded-md shadow hover:bg-Blue hover:text-white transition duration-300">
          Book Now →
        </button>
      </div>

      {/* Dark gradient or fade effect if needed */}
      
    </section>
  );
};

export default ProcessSteps;
