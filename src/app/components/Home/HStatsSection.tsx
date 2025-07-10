import React from "react";

const StatsSection = () => {
  return (
   <section
  className="relative bg-black text-white py-20 px-6 md:px-16 bg-no-repeat bg-center bg-cover h-screen"
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
     

      <div className="relative z-10 max-w-3xl mx-auto ml-6 ">
        <h1 className="text-lg md:text-3xl font-extrabold mb-2">
          How Do We Deliver Smart IT Solutions?
        </h1>
        <p className="text-base md:text-lg font-light mb-6 text-gray2">
         As your trusted  <span className="font-medium text-white"> IT services provider</span>, we combine cutting-edge technology
 with 8+ years of expertise to:
        </p>
        <h1 className="text-lg md:text-xl font-light mb-2  ">
         Automate Operations with Managed IT Solutions
        </h1>
        <p className="text-base md:text-lg font-light mb-6 text-gray2">
         Streamline workflows using AI-driven tools tailored to your enterprise needs.
        </p>
          <h1 className="text-lg md:text-xl font-light mb-2">
         
Provide 24/7 IT Services Provider Monitoring
        </h1>
        <p className="text-base md:text-lg font-light mb-6 text-gray2">
         Proactively safeguard networks and data with security solutions.
        </p>
          <h1 className="text-lg md:text-xl font-light mb-2">
        Deploy Smart  IT Solutions
        </h1>
        <p className="text-base md:text-lg font-light mb-6 text-gray2">
        We cover every tech aspect, from custom AI applications to cloud architecture.
        </p>
          <h1 className="text-lg md:text-xl font-light mb-2">
         Transform Your Digital Journey 
        </h1>
        <p className="text-base md:text-lg font-light mb-6 text-gray2">
         Our certified    
         <span className="font-medium text-white"> IT services providers</span>, deliver strategic guidance and technical execution.
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
            <p className="text-3xl font-bold">04+</p>
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
