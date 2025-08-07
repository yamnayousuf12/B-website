import React from "react";
import Link from "next/link";

const Customtext = () => {
  return (
   <section
  className="relative md:py-28 py-9 px-6 md:px-16 md:bg-no-repeat md:bg-center md:bg-cover max-w-7xl md:max-w-full mx-auto"
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
     

      <div className="relative z-10 max-w-7xl mx-auto md:text-justify   ">
        <h1 className="text-xl font-SemiBold md:text-xl mb-4 md:text-justify text-white  max-w-xl mx-auto md:max-w-7xl">
       Smarter Web Experiences
        </h1>
        <p className="text-[9px] md:text-lg font-normal   text-gray1 max-w-xl mx-auto md:max-w-7xl ">
     Need unique branding and advanced features to improve online presence? Or looking for a cost-effective responsive site tailored to your business goals? A custom-built website is the solution.
      </p>
       <p className="text-[9px] md:text-lg font-normal mb-4 md:max-w-7xl text-gray1 max-w-xl mx-auto">
   
     Our web development team crafts fully personalised websites. From seamless integration to automation, we design premium websites that work smart and enhance customer engagement. We have launched 50+ custom websites with 95% satisfaction.  </p>
         </div>

         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start max-w-7xl mx-auto">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-2 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ">
            Start Your Project Today →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Customtext;
