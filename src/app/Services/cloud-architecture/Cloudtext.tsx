import React from "react";
import Link from "next/link";

const Cloudtext = () => {
  return (
   <section
  className="relative md:py-28 py-9 px-6 md:px-16 md:bg-no-repeat md:bg-center md:bg-cover max-w-7xl md:max-w-full mx-auto"
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
  <div className="relative z-10 max-w-7xl mx-auto md:-mt-12">
        <h1 className="text-xl font-SemiBold md:text-xl mb-4 md:text-justify text-white max-w-xl mx-auto md:max-w-7xl">
       Importance of Cloud Architecture
        </h1>
        <p className="text-[9px] md:text-lg font-normal text-gray1 max-w-7xl mx-auto md:max-w-xl md:-ml-1 ">
     The applications can scale automatically with precision and effective cloud strategies. Built-in security design prevents data breaches and helps in compliance with regulations (GDPR, HIPAA, ISO 27001). Our architects deliver operational agility through seamless integration and rapid deployment. Let our expert build a secure and fast cloud architecture for you.</p>
         </div>

         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start max-w-7xl mx-auto">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-2 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ">
             Get a Free Cloud Assessment →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Cloudtext;
