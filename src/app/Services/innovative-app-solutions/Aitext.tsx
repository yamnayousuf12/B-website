import React from "react";
import Link from "next/link";

const  Aitext = () => {
  return (
   <section
  className="relative md:py-20 py-9 px-6 md:px-16 md:bg-no-repeat md:bg-center md:bg-cover md:h-screen "
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
     

      <div className="relative z-10 max-w-3xl mx-auto ml-6  ">
        <h1 className="text-2xl font-extrabold md:text-xl mb-4 md:text-justify text-white text-center ">
       Importance of Artificial Intelligence
        </h1>
        <p className="text-xs md:text-lg font-light mb-4 text-white/80">
    AI models automate tasks and improve decision-making by utilising advanced algorithms.  Companies leveraging AI gain a competitive edge through personalised customer interactions and real-time insights.  Our team of IT engineers develops tailored AI solutions to meet unique business challenges, promoting innovation and sustainable growth.</p>
         </div>
         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-1 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ml-16">
            Request a Free Consultation →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Aitext;
