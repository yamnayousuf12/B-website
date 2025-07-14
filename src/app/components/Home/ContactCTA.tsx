
"use client";
import Link from "next/link";
import { Phone, Star, Award } from "lucide-react";

export default function ContactCTA() {
  return (
    <div className="relative bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover z-10 object-contain w-full h-auto  "
        style={{ backgroundImage: "url('/96.png')" }}
      />

      {/* Gradient Overlay Content */}
      <div className="relative z-10 md:max-w-6xl mx-auto m:px-6 md:py-20 px-2 py-14 max-w-lg">
        
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
            <div className="flex items-center md:gap-2  text-white/80 border border-gray rounded-full md:py-2 md:px-3 py-1 px-1 w-40 md:w-60 md:text-sm text-xs">
              <Award className="text-white w-3 md:w-6" />
              <p className="text-xs md:text-sm"></p>
              Trusted by 22+ brands
            </div>
            <div className="flex items-center md:gap-2 text-sm text-white/80 border border-gray rounded-full md:py-2 md:px-3 md:mr-auto md:w-72 w-56 py-1 px-1 md:mt-0 -mt-12 md:ml-0 ml-32">
              <Star className="text-white w-3 md:w-6" />
              <p className="text-xs md:text-sm">
              &quot;Bitsframe transformed our app!&quot;</p>
            </div>
          </div>

          <h2 className="text-xl md:text-4xl font-semibold leading-tight">
           Unlock Potential With Our IT Solutions

          </h2>

          <p className="text-white/80 text-xs md:text-lg">
          Ready to elevate your business with custom IT services and solutions? Contact BitsFrame today to get started! </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
         
          <div className="flex justify-center m-auto mt-8">
  <Link href="/contact-us">
    <button className="bg-white text-black md:px-6 md:py-3 px-3 py-1 rounded-lg font-medium hover:bg-Blue flex items-center gap-2">
      <Phone className="md:text-xl text-sm md:w-7 w-4" />
      Contact Us
    </button>
  </Link>
</div>

          </div>
        </div>
      </div>
   
  );
}
