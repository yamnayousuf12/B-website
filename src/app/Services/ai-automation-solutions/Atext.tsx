import React from "react";
import Link from "next/link";

const Atext = () => {
  return (
   <section
  className="relative md:py-28 py-9 px-6 md:px-16 md:bg-no-repeat md:bg-center md:bg-cover max-w-7xl md:max-w-full mx-auto"
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
  <div className="relative z-10 max-w-7xl mx-auto md:-mt-12">
        <h1 className="text-xl font-SemiBold md:text-xl mb-4 md:text-justify text-white max-w-xl mx-auto md:max-w-7xl">
        Why are mobile applications important?
        </h1>
        <p className="text-[9px] md:text-lg font-normal text-gray1 max-w-7xl mx-auto md:max-w-xl md:-ml-1 ">
    A custom mobile app enhances efficiency and productivity by automating repetitive tasks and minimising human mistakes.</p>
       <p className="text-[9px] md:text-lg font-normal mb-4 md:max-w-xl text-gray1 max-w-7xl mx-auto md:-ml-1">
   
     They are reliable and designed to adapt to industry trends for growth and scalability. Seamless integration and customised designs improve user experience and provide a competitive advantage. We create high-quality apps for various platforms, like iOS and android.</p>
         </div>

         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start max-w-7xl mx-auto">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-2 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ">
           Get a free consultation today →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Atext;
