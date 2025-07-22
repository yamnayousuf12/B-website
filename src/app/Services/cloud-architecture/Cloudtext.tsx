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
      Importance of Cloud Architecture
        </h1>
       
     <p className="text-xs md:text-lg font-light mb-4 text-white/80">
    The applications can scale automatically with precision and effective cloud strategies. Built-in security design prevents data breaches and helps in compliance with regulations (GDPR, HIPAA, ISO 27001). Our architects deliver operational agility through seamless integration and rapid deployment. Let our expert build a secure and fast cloud architecture for you.  </p>
         </div>
         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-1 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ml-16">
        Get a Free Cloud Assessment →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Uitext;
