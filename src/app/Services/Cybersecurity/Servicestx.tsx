import React from "react";
import Link from "next/link";

const StatsSection = () => {
  return (
   <section
  className="relative md:py-20 py-9 px-6 md:px-16 md:bg-no-repeat md:bg-center md:bg-cover md:h-screen "
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
     

      <div className="relative z-10 max-w-3xl mx-auto ml-6  ">
        <h1 className="text-2xl font-extrabold md:text-xl mb-4 md:text-justify text-white text-center ">
        WHY CYBERSECURITY MATTERS
        </h1>
        <p className="text-xs md:text-lg font-light mb-4 text-white/80">
         With advanced tech development, protecting your data and network from cyber threats is essential to prevent data breaches and vulnerabilities. Organizations and individuals can be held liable for financial losses and the leakage of sensitive information, which may damage their business reputation and result in substantial losses. Bitsframe resolves this problem with modern cybersecurity solutions. Trusted by 22+, we safeguard your networks with zero breaches. </p>
         </div>
         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-1 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ml-16">
            Get a Free Security Audit →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default StatsSection;
