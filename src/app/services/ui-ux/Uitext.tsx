import React from "react";
import Link from "next/link";

const Uitext = () => {
  return (
   <section
  className="relative md:py-28 py-9 px-6 md:px-16 md:bg-no-repeat md:bg-center md:bg-cover  max-w-7xl md:max-w-full mx-auto   "
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
     

      <div className="relative z-10 max-w-7xl mx-auto md:-mt-12">
        <h1 className="text-xl font-SemiBold md:text-xl mb-4 md:text-justify text-white  max-w-7xl mx-auto md:max-w-xl md:-ml-1">
        Why Is UI/UX so important?
        </h1>
        <p className="text-[9px] md:text-lg font-normal   text-gray1 max-w-7xl mx-auto md:max-w-xl md:-ml-1 mb-4">
    Effective UI/UX design enhances user satisfaction by facilitating easy navigation. It shapes brand identity and emotional connections with the audience. A pleasant user experience boosts retention and can significantly improve conversion rates by guiding users smoothly through their journey.
      </p>
       <p className="text-[9px] md:text-lg font-normal mb-4 md:max-w-xl text-gray1 max-w-7xl md:-ml-1 mx-auto">
   
     Our UI/X developers design user-friendly interfaces that increase efficiency and productivity. With our UI/UX design, you can distinguish your product and thus provide a competitive advantage. </p>
         </div>

         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start max-w-7xl mx-auto">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-2 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ">
             Get Started with a Free Consultation →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Uitext;
