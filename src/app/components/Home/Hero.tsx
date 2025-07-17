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
       <div className="inline-flex items-center md:gap-2 gap-0 md:px-4 px-1 py-1 md:py-1.5 rounded-full bg-Blue text-white1 md:text-sm text-xs font-medium shadow-sm">
      <Award className="w-4 h-4" />
      Trusted by 22+ brands
    </div>
    </div>
<h1 className=" text-gray1 text-xl md:text-4xl font-semibold mb-2 text-pretty">
Dominate Your Market with 
 
  {/* <span className="text-gradient">
    Bitsframe
  </span> */}
</h1>
<h1 className=" text-gray1 text-xl md:text-4xl font-semibold mb-6 text-pretty">
Scalable Managed IT Solutions
 
  {/* <span className="text-gradient">
    Bitsframe
  </span> */}
</h1>
        <p className="text-gray1 md:text-base text-xs mb-8">
         Your dedicated IT services provider, delivering managed IT solutions from AI to custom Web development
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link href="/Consultation ">
            <button className="bg-Blue text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium hover:bg-black text-xs md:text-base ">
            Book a free consultatio →
            </button>
          </Link>
          <Link href="/services">
            <button className="bg-white border border-gray text-black md:px-6 md:py-3 px-2 py-2 rounded-lg font-medium hover:bg-Blue text-xs md:text-base">
              Explore our services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
