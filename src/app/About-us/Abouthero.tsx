// components/Hero.tsx
import Link from "next/link";
// import { Award } from "lucide-react";
import { PhoneCall } from "lucide-react";
const Hero = () => {
  return (
    <section className="bg-black text-white md:px-6 md:py-20 px-3 py-10 text-center md:text-left relative md:h-[500px]  overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{
        backgroundImage: "url('/about.svg')", // Optional background wave
      }} >

    

      <div className="max-w-5xl mx-auto mt-20  ">
        <div className="mb-8 flex justify-center md:justify-start">
       <div className=" inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-Blue text-white text-xs font-medium shadow-sm md:ml-8">
      
    Who We Are 
    </div>
    </div>
<h1 className="text-sm md:text-3xl md:font-Medium font-semibold md-text-justify text-center text-gray1">
 We are Bitsframe — Your Tech Ally & Strategic IT Services Provider</h1>
        <p className="text-gray1 text-[10px] md:text-lg mb-8 md:ml-9">
          Turning complex challenges into simple, powerful solutions
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start md:ml-10">
          <Link href="/contact-us">
            <button className="bg-Blue text-white md:px-6 md:py-3 px-3 py-1 font-medium hover:bg-Blue flex items-center gap-2 border border-gray rounded-full ml-24 md:text-lg text-sm md:ml-0">
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