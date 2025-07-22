import React from "react";
import Link from "next/link";

const Uitext = () => {
  return (
   <section
  className="relative md:py-20 py-9 px-6 md:px-16 md:bg-no-repeat md:bg-center md:bg-cover md:h-screen "
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
     

      <div className="relative z-10 max-w-3xl mx-auto ml-6  ">
        <h1 className="text-2xl font-extrabold md:text-xl mb-4 md:text-justify text-white text-center ">
      How can staff augmentation help your business?
        </h1>
        <p className="text-xs md:text-lg font-light mb-4 text-white/80">
    Augmenting staff offers a budget-friendly and effective way to integrate specialists into the organisation. The external professionals link with the internal team to maximise scaling capacity on a contractual basis. This enables rapid market growth in a short period. </p>
     <p className="text-xs md:text-lg font-light mb-4 text-white/80">
   Bitsframe, through its outsourcing model, provides high-end expertise for rapid scaling. Our dedicated team brings tech talent with quick execution to meet business goals.  </p>
         </div>
         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-1 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ml-16">
          Get Started with a Free Consultation →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Uitext;
