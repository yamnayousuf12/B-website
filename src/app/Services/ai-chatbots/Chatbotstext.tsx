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
      Why Chatbot Support?
        </h1>
        <p className="text-xs md:text-lg font-light mb-4 text-white/80">
     Because missing a customer is not acceptable, potential customers bounce because there is no instant support on your site. Every unanswered question is a missed lead. </p>
     <p className="text-xs md:text-lg font-light mb-4 text-white/80">
     But, custom AI chatbots come with the solution. Our IT engineers develop chatbots that boost customer engagement and scale your business by providing instant customer service and 24/7 availability. These chatbots are programmed to respond to customer queries immediately, regardless of the time of day, ensuring that no customer is left waiting. The built-in algorithm records customer behaviour and queries to optimise business strategies. This helps in increasing lead generation and scalability.  </p>
         </div>
         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-1 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ml-16">
          Request a Free Demo →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Uitext;
