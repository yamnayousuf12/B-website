import React from "react";
import Link from "next/link";

const Chatbotstext = () => {
  return (
   <section
  className="relative md:py-28 py-9 px-6 md:px-16 md:bg-no-repeat md:bg-center md:bg-cover max-w-7xl md:max-w-full mx-auto"
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
  <div className="relative z-10 max-w-7xl mx-auto md:-mt-12">
        <h1 className="text-xl font-SemiBold md:text-xl mb-4 md:text-justify text-white max-w-xl mx-auto md:max-w-7xl">
        Why Chatbot Support?
        </h1>
        <p className="text-[9px] md:text-lg font-normal   text-gray1 max-w-7xl mx-auto md:max-w-xl md:-ml-1 md:mb-5 mb-2 ">
      Because missing a customer is not acceptable, potential customers bounce because there is no instant support on your site. Every unanswered question is a missed lead.
      </p>
       <p className="text-[9px] md:text-lg font-normal mb-4 md:max-w-xl text-gray1 max-w-7xl mx-auto md:-ml-1">
   
      But, custom AI chatbots come with the solution. Our IT engineers develop chatbots that boost customer engagement and scale your business by providing instant customer service and 24/7 availability. These chatbots are programmed to respond to customer queries immediately, regardless of the time of day, ensuring that no customer is left waiting. The built-in algorithm records customer behaviour and queries to optimise business strategies. This helps in increasing lead generation and scalability.</p>
         </div>

         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start max-w-7xl mx-auto">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 py-2 px-2 rounded-lg font-medium hover:bg-Blue md:text-sm text-xs ">
            Request a Free Demo →
            </button>
          </Link>
          
        </div>
          </section>
  );
};

export default Chatbotstext;
