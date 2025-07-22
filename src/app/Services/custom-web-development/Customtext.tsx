import React from "react";
import Link from "next/link";

const Customtext = () => {
  return (
   <section
  className="relative md:py-20 py-9 px-6 md:px-16 md:bg-no-repeat md:bg-center md:bg-cover md:h-screen "
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
     

      <div className="relative z-10 max-w-3xl mx-auto ml-6  ">
        <h1 className="text-2xl font-extrabold md:text-xl mb-4 md:text-justify text-white text-center ">
       Smarter Web Experiences
        </h1>
        <p className="text-xs md:text-lg font-light mb-4 text-white/80">
     Need unique branding and advanced features to improve online presence? Or looking for a cost-effective responsive site tailored to your business goals? A custom-built website is the solution.
     Our web development team crafts fully personalised websites. From seamless integration to automation, we design premium websites that work smart and enhance customer engagement. We have launched 50+ custom websites with 95% satisfaction.  </p>
         </div>
         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-1 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ml-16">
            Start Your Project Today →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Customtext;
