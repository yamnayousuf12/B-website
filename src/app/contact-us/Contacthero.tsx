// components/Hero.tsx
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-black text-white px-6 py-20 text-center md:text-left relative"
    style={{
        backgroundImage: "url('/about.png')", // Optional background wave
      }} >

    

      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center md:justify-start">
       <div className=" inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-Blue text-white text-sm font-extrabold shadow-sm md:ml-10">
      
   . Contact .
    </div>
    </div>
<h1 className="text-sm md:text-4xl md:mr-44 fount-semibold md-text-justify text-center">
Lets Create Something Extraordinary with Us</h1>
        <p className="text-gray2 text-sm md:text-lg mb-8 md:ml-10">
          Ready to transform your business? Reach out, we are here to help
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start md:ml-10">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 px-3 py-1 rounded-lg font-medium hover:bg-Blue">
              Contact Us →
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;