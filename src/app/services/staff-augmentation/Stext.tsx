import React from "react";
import Link from "next/link";

const Stext = () => {
  return (
   <section
  className="relative md:py-28 py-9 px-6 md:px-16 md:bg-no-repeat md:bg-center md:bg-cover max-w-7xl md:max-w-full mx-auto"
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
  <div className="relative z-10 max-w-7xl mx-auto md:-mt-12">
        <h1 className="text-xl font-SemiBold md:text-xl mb-4 md:text-justify text-white max-w-xl mx-auto md:max-w-7xl">
      How can staff augmentation help your business?
        </h1>
        <p className="text-[9px] md:text-lg font-normal text-gray1 max-w-7xl mx-auto md:max-w-2xl md:-ml-1 ">
     Augmenting staff offers a budget-friendly and effective way to integrate specialists into the organisation. The external professionals link with the internal team to maximise scaling capacity on a contractual basis. This enables rapid market growth in a short period.
      </p>
       <p className="text-[9px] md:text-lg font-normal mb-4 md:max-w-2xl text-gray1 max-w-7xl mx-auto md:-ml-1">
        Bitsframe, through its outsourcing model, provides high-end expertise for rapid scaling. Our dedicated team brings tech talent with quick execution to meet business goals. </p>
         </div>

         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start max-w-7xl mx-auto">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-2 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ">
            Hire Talent Now →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Stext;
