// components/HeroContact.tsx
import { Mail, Phone, Star, Award } from "lucide-react";
import Link from "next/link";
// import { FaQuoteLeft } from "react-icons/fa";

const HeroContact = () => {
  return (
    // <div className="bg-gradient-to-br from-[#0f1624] via-[#1f2e5a] to-[#2654f0] rounded-xl text-white p-8 md:p-12 max-w-5xl mx-auto mt-10 shadow-lg">
    //     <div
    //     className="absolute inset-0 bg-cover z-10 object-contain w-full h-auto  "
    //     style={{ backgroundImage: "url('/96.png')" }}
    //   />
    //   {/* Top indicators */}
    //   <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
    //     <div className="flex items-center gap-2">
    //       <Award className="text-white/70"/> Trusted by 22+ brands
    //     </div>
    //     <div className="flex items-center gap-2">
    //       <Star className="text-blue-200" />
    //       <span className="italic text-white/80">&quot;Bitsframe transformed our app!&quot;</span>
    //     </div>
    //   </div>

    //   {/* Headings */}
    //   <h2 className="text-2xl md:text-3xl font-bold mb-2">
    //     Achieve your goals faster with our revolutionary <span className="text-blue-200">IT services</span>
    //   </h2>
    //   <p className="text-white/80 mb-6">
    //     Collaborate to Transform Your Digital Journey with Our Creative IT Services
    //   </p>

    //   {/* Contact Info */}
    //   <div className="flex flex-wrap items-center gap-4">
    //     <div className="flex items-center gap-2">
    //       <Mail className="text-xl" />
    //       <span>hey@bitsframe.com</span>
    //     </div>
    //     <div className="flex items-center gap-2">
    //       <Phone className="text-xl" />
    //       <span>+92 309 2074390</span>
    //     </div>
    //     <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-blue-200 transition">
    //       📞 Contact Now
    //     </button>
    //   </div>
    // </div>


     <div className="relative overflow-hidden rounded-xl text-white p-2 md:p-1 md:max-w-6xl max-w-lg mx-auto mt-10 shadow-lg">

      {/* 🔵 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-80"
        style={{ backgroundImage: "url('/96.png')" }}
      />

      {/* 🔒 Content Layer */}
      <div className="relative z-10 p-4 md:p-10  ">

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
          <div className="flex items-center gap-2 md:text-sm text-xs text-white/80 border border-gray rounded-full py-2 px-3 ">
            < Award className="text-white/70"/> Trusted by 22+ brands
          </div>
          <div className="flex items-center gap-2 md:text-sm text-xs text-white/80 border border-gray rounded-full py-2 px-3 ml-52 md:ml-0 md:mt-0 -mt-20">
            <Star className="text-white" />
           &quot;Bitsframe transformed our app!&quot;
          </div>
        </div>

        {/* Headings */}
        <h2 className="text-xl md:text-3xl font-bold mb-2">
          Achieve your goals faster with our revolutionary
          IT services
        </h2>
        <p className="text-white/80 mb-6 text-sm md:text-lg ">
          Collaborate to Transform Your Digital Journey with Our Creative IT Services
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-sm md:text-sm">
            <Mail className="text-sm border border-white p-1 rounded-full bg-white/10 hover:bg-white/55 backdrop-blur-md shadow-md transition-all duration-300" />
            hey@bitsframe.com
          </div>
          <div className="flex items-center gap-2  text-sm md:text-lg">
            <Phone className="text-sm border border-white p-1 rounded-full bg-white/10 hover:bg-white/55 backdrop-blur-md shadow-md transition-all duration-300" />
            <span>+92 309 2074390</span>
          <div className="flex justify-center m-auto md:mt-2 -mt-10">
  <Link href="/contact-us">
    <button className="bg-Blue/60 text-white md:px-6 px-3 py-1 md:py-3 md:text-sm text-xs rounded-full font-medium hover:bg-Blue flex items-center gap-2 ml-14 ">
      <Phone className="text-xl" />
      Contact Us
    </button>
  </Link>
</div>
</div>
</div>
      </div>
    </div>
  );
};

export default HeroContact;
