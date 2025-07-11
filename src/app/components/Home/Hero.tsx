// components/Hero.tsx
import Link from "next/link";
import { Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-black text-white md:px-6 md:py-20 px-3 py-10 text-center md:text-left relative"
    style={{
        backgroundImage: "url('/Hero.png')", // Optional background wave
      }} >

    

      <div className="max-w-4xl mx-auto  ">
        <div className="mb-8 flex justify-center md:justify-start">
       <div className="inline-flex items-center md:gap-2 gap-0 md:px-4 px-1 py-1 md:py-1.5 rounded-full bg-Blue text-white md:text-sm text-xs font-medium shadow-sm">
      <Award className="w-4 h-4" />
      Trusted by 22+ brands
    </div>
    </div>
<h1 className="text-xl md:text-4xl font-semibold mb-2 text-pretty">
Dominate Your Market With  
 
  {/* <span className="text-gradient">
    Bitsframe
  </span> */}
</h1>
<h1 className="text-xl md:text-4xl font-semibold mb-6 text-pretty">
Scalable Managed IT Solutions
 
  {/* <span className="text-gradient">
    Bitsframe
  </span> */}
</h1>
        <p className="text-white/80 md:text-base text-xs mb-8">
         Your dedicated IT services provider, delivering managed IT solutions from AI to Custom Web Development
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link href="/contact-us">
            <button className="bg-white text-black px-2 py-1 md:px-6 md:py-3 rounded-lg font-medium hover:bg-Blue text-xs md:text-base ">
              Contact Us →
            </button>
          </Link>
          <Link href="/services">
            <button className="bg-[#131313] border border-gray text-white md:px-6 md:py-3 px-2 py-2 rounded-lg font-medium hover:bg-Blue text-xs md:text-base">
              Explore Our Services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
