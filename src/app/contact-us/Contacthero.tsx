// components/Hero.tsx
import Link from "next/link";
import React from "react";
import { PhoneCall } from "lucide-react";
const Hero = () => {
  return (
    <section className="bg-black text-white px-6 py-20 text-center md:text-left relative"
    style={{
        backgroundImage: "url('/about.png')", // Optional background wave
      }} >

    

      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center md:justify-start">
       <div className=" inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-Blue text-white text-sm font-extrabold shadow-sm md:ml-10">
      
    Contact 
    </div>
    </div>
<h1 className="text-xl md:text-4xl md:mr-44 fount-semibold md-text-justify text-center text-gray1">
Lets Create Something Extraordinary with Us</h1>
        <p className="text-gray1 text-xs md:text-lg mb-8 md:ml-10">
          Ready to transform your business? Reach out, we are here to help
        </p>

         <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start md:ml-10">
          <Link href="/contact-us">
            <button className="bg-Blue text-white md:px-6 md:py-3 px-3 py-1 font-medium hover:bg-Blue flex items-center gap-2 border border-gray rounded-full ml-24  md:ml-0">
               <PhoneCall className="md:text-xl text-sm md:w-7 w-4" />
              Contact Now 
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;