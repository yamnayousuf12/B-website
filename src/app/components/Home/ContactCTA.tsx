
"use client";
import Link from "next/link";
import { PhoneCall, Star, Award } from "lucide-react";

export default function ContactCTA() {
  return (
    <div className="bg-black relative overflow-hidden md:rounded-3xl md:rounded-b text-white p-2 md:p-1 md:max-w-6xl max-w-50 mx-auto mt-1 shadow-lg h-72 ">
      {/* Background Image */}
      <div
        className="absolute inset-1 md:bg-cover md:bg-center z-0  md:border-b-customBlue md:rounded-3xl "
        style={{ backgroundImage: "url('/96.svg')" }}
      />

      {/* Gradient Overlay Content */}
      <div className="relative z-10 md:max-w-6xl mx-auto m:px-6 md:py-20 px-2 py-14 max-w-lg inset-0  ">
        
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10 md:ml-10 ml-3 ">
            <div className="flex items-center md:gap-2 text-gray border border-gray rounded-full md:py-2 md:px-3 py-1 px-1 w-32 md:w-60 md:text-sm text-xs md:-mt-16 -mt-9 border-opacity-10 border-e-customBlue">
              <Award className="text-white1 w-3 md:w-6" />
              <p className="text-[9px] md:text-sm"> Trusted by 22+ brands</p>
             
            </div>
            <div className="flex items-center md:gap-2 text-gray border border-gray rounded-full md:py-2 md:px-3 md:mr-auto md:w-72 w-44 py-1 px-1 md:-mt-16 ml-auto md:ml-0 -mt-12 border-opacity-10 border-e-customBlue">
              <Star className="text-white1 w-3 md:w-6" />
              <p className="text-[9px] md:text-sm ">
              &quot;Bitsframe transformed our app!&quot;</p>
            </div>
          </div>

          <h2 className="text-lg md:text-2xl font-medium leading-tight text-white md:ml-9">
           Unlock Potential With Our IT Solutions

          </h2>

          <p className="text-white text-[10px] md:text-sm md:ml-9">
          Ready to elevate your business with custom IT services and solutions? Contact Bitsframe today to get started!</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
         
          <div className="flex justify-center m-auto mt-8">
  <Link href="/contact-us">
    <button className="bg-Blue/30 text-white md:px-2 md:py-3 px-3 py-1 font-medium hover:bg-Blue flex items-center gap-2 border border-opacity-10 border-white shadow-white border-x-8 border-x-darkBlue shadow-sm rounded-full ">
      <PhoneCall className="md:text-xl text-sm md:w-7 w-4" />
      Contact Us
    </button>
  </Link>
</div>

          </div>
        </div>
      </div>
   
  );
}
