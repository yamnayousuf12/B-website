import React from "react";

const StatsSection = () => {
  return (
   <section
  className="relative bg-black text-white py-20 px-6 md:px-16 bg-no-repeat bg-center bg-cover h-screen"
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
     

      <div className="relative z-10 max-w-2xl mx-auto ml-6 ">
        <p className="text-lg md:text-xl font-light mb-4  ">
          Your big idea needs a partner who can make it real. At{" "} 
          <span className="font-medium"> Bitsframe</span>,
           we combine cutting-edge tech with over 8 years of expertise to build solutions that grow with you.
        </p>
        <p className="text-base md:text-lg font-light mb-12 text-gray2">
          Whether it’s a custom app, AI-driven platform, or secure cloud
          architecture, we’ve got you covered. Let’s create something
          extraordinary together.
        </p>
         </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm opacity-80 mt-1 text-gray2">Projects Delivered</p>
          </div>
          <div>
            <p className="text-3xl font-bold">22+</p>
            <p className="text-sm opacity-80 mt-1 text-gray2">Trusted Partners</p>
          </div>
          <div>
            <p className="text-3xl font-bold">8+</p>
            <p className="text-sm opacity-80 mt-1 text-gray2">Years of Innovation</p>
          </div>
          <div>
            <p className="text-3xl font-bold">95%</p>
            <p className="text-sm opacity-80 mt-1 text-gray2">Client Satisfaction</p>
          </div>
        </div>
     

 
     
    </section>
  );
};

export default StatsSection;
