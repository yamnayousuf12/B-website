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
     Why are mobile applications important?
        </h1>
        <p className="text-xs md:text-lg font-light mb-4 text-white/80">
    A custom mobile app enhances efficiency and productivity by automating repetitive tasks and minimising human mistakes. </p>
     <p className="text-xs md:text-lg font-light mb-4 text-white/80">
     They are reliable and designed to adapt to industry trends for growth and scalability. Seamless integration and customised designs improve user experience and provide a competitive advantage. We create high-quality apps for various platforms, like iOS and android. </p>
     <p className="text-xs md:text-lg font-light mb-4 text-white/80">
    We also provide performance tracking tools to help with strategic planning for future growth, and most importantly, we ensure ongoing support and maintenance. You can rest assured that your app will always be up-to-date and performing at its best.</p>
         </div>
         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-1 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ml-16">
         Get a free consultation today →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Uitext;
