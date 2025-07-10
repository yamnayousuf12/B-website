// components/Hero.tsx
import Link from "next/link";
import { Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-black text-white px-6 py-20 text-center md:text-left relative"
    style={{
        backgroundImage: "url('/Hero.png')", // Optional background wave
      }} >

    

      <div className="max-w-4xl mx-auto  ">
        <div className="mb-8 flex justify-center md:justify-start">
       <div className=" inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-Blue text-white text-sm font-medium shadow-sm">
      <Award className="w-4 h-4" />
      Trusted by 22+ brands
    </div>
    </div>
<h1 className="text-2xl md:text-4xl font-semibold mb-2 text-pretty">
Dominate Your Market With  
 
  {/* <span className="text-gradient">
    Bitsframe
  </span> */}
</h1>
<h1 className="text-2xl md:text-4xl font-semibold mb-6 text-pretty">
Scalable Managed IT Solutions
 
  {/* <span className="text-gradient">
    Bitsframe
  </span> */}
</h1>
        <p className="text-gray2 text-sm mb-8">
         Your dedicated IT services provider, delivering managed IT solutions from AI to Custom Web Development
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link href="/contact-us">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-Blue">
              Contact Us →
            </button>
          </Link>
          <Link href="/services">
            <button className="bg-[#131313] border border-gray text-white px-6 py-3 rounded-lg font-medium hover:bg-Blue">
              Explore Our Services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
