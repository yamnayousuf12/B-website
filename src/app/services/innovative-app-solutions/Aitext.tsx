import React from "react";
import Link from "next/link";

const Aitext = () => {
  return (
   <section
  className="relative md:py-28 py-9 px-6 md:px-16 md:bg-no-repeat md:bg-center md:bg-cover max-w-7xl md:max-w-full mx-auto"
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
      <div className="relative z-10 max-w-7xl mx-auto    ">
        <h1 className="text-xl font-SemiBold md:text-xl mb-4 md:text-justify text-white max-w-7xl mx-auto md:max-w-7xl ">
       Importance of Artificial Intelligence
        </h1>
        <p className="text-[9px] md:text-lg font-normal text-gray1 max-w-7xl mx-auto md:max-w-xl md:-ml-1 mb-4 ">
     AI models automate tasks and improve decision-making by utilising advanced algorithms.  Companies leveraging AI gain a competitive edge through personalised customer interactions and real-time insights.  Our team of IT engineers develops tailored AI solutions to meet unique business challenges, promoting innovation and sustainable growth.  </p>
         </div>

         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start max-w-7xl mx-auto">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-2 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ">
            Request a Free Consultation →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Aitext;
