import React from "react";
import { Phone, Mail, } from "lucide-react";

const StatsSection = () => {
  return (
   <section
  className="relative py-14 px-6 md:px-16 bg-no-repeat bg-center bg-cover min-h-screen "
  style={{
    backgroundImage: "url('/Hstats.png')",
  }}
>
     

      <div className="relative z-10 max-w-5xl mx-auto ml-6">
        {/* <h1 className="text-7xl font-extrabold md:text-xl mb-4 text-justify text-white ">
         Our Journey at Bitsframe
        </h1> */}
        <p className="text-sm md:text-lg font-light mb-4 text-gray1">
        Struggling with an unresolved tech challenge? Or want to transform your ideas into reality?


        </p>
        <p className="text-sm md:text-lg font-light mb-4 text-gray1">We hear you! Let&apos;s collaborate to find  <span className="text-white font-medium">managed IT solutions </span>for your business IT queries. Our team is ready to craft custom apps, AI solutions, or secure shopify stores that drive your success.</p>
        <p className="text-sm md:text-lg font-light mb-4 text-gray1">
Complete the form or send us an email.</p>
        
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="md:text-2xl text-lg font-bold mb-4 text-white">Contact Info</h2>
            <div className="flex items-center gap-4 text-gray1  ">
             <button
      className="border border-white p-1 rounded-full bg-white/10 hover:bg-white backdrop-blur-md shadow-md transition-all duration-300"
    >
      <Mail className=" hover:text-black text-white w-4 h-4" />
       </button>
            
              <span className="md:text-base text-sm">hey@bitsframe.com</span>
            </div>
            <div className="flex items-center gap-4 text-white/80">
             <button
      className="border border-white p-1 rounded-full bg-white/10 hover:bg-white backdrop-blur-md shadow-md transition-all duration-300"
    >
      <Phone className=" hover:text-black text-white w-4 h-4" />
       </button>
              
              <span className="md:text-base text-sm">+92 336 2042506</span>
            </div>
          </div>
          {/* Contact Form */}
          <div className="max-w-2xl md:max-w-6xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="Name" className="block mb-1 text-white">Name</label>
                  <input
                  id="Name"
                  type="Name"
                  className="bg-white/15 text-white p-3 rounded outline-none border border-white"/>
                  </div>

                <div>
                  <label htmlFor="email" className="block mb-1 text-white">Email</label>
                  <input
                   id="email"
                   type="email"
                   className="bg-white/15 text-white p-3 rounded outline-none border border-white"/>
                   </div>

              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                <label htmlFor="Company" className="block mb-1 text-white">Company</label>
                <input
                id="Company"
                type="Company"
                className="bg-white/15 text-white p-3 rounded outline-none border border-white" />
                </div>
                <div>
                  <label htmlFor="Phone" className="block mb-1 text-white">Phone</label>
                  <input 
                  id="Phone"
                  type="Phone"
                  className="bg-white/15 text-white p-3 rounded outline-none border border-white"/>
                  </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 text-white">Message</label>
                    <textarea
                    id="message"
                    placeholder="Message"
                    rows={5}
                    className="w-full bg-white/15 text-white border border-white p-3 rounded outline-none"/>
                    </div>

              <button
                type="submit"
                className="bg-Blue text-white md:px-6 md:py-3 px-3 py-1 font-medium hover:bg-Blue flex items-center gap-2 border border-gray rounded-full ml-24  md:ml-0"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        </div>
      
            </section>
  );
};

export default StatsSection;
