import React from "react";
import Link from "next/link";

const Servicestext = () => {
  return (
   <section
  className="relative md:py-28 py-9 px-6 md:px-16 md:bg-no-repeat md:bg-center md:bg-cover max-w-7xl md:max-w-full mx-auto"
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
  <div className="relative z-10 max-w-7xl mx-auto md:-mt-12">
        <h1 className="text-xl font-SemiBold md:text-xl mb-4 md:text-justify text-white max-w-xl mx-auto md:max-w-7xl">
       WHY CYBERSECURITY MATTERS
        </h1>
        <p className="text-[9px] md:text-lg font-normal   text-gray1 max-w-7xl mx-auto md:max-w-xl md:-ml-1 ">
     With advanced tech development, protecting your data and network from cyber threats is essential to prevent data breaches and vulnerabilities. Organizations and individuals can be held liable for financial losses and the leakage of sensitive information, which may damage their business reputation and result in substantial losses. Bitsframe resolves this problem with modern cybersecurity solutions. Trusted by 22+, we safeguard your networks with zero breaches.</p>
         </div>

         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start max-w-7xl mx-auto">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-2 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ">
            Get a Free Security Audit →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Servicestext;
