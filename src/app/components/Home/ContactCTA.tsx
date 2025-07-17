
"use client";
import Link from "next/link";
import { PhoneCall, Star, Award } from "lucide-react";

export default function ContactCTA() {
  return (
    <div className="relative overflow-hidden md:rounded-3xl md:rounded-b text-white p-2 md:p-1 md:max-w-6xl max-w-50 mx-auto mt-10 shadow-lg bg-black ">
      {/* Background Image */}
      <div
        className="absolute inset-1 md:bg-cover md:bg-center z-0 opacity-80  "
        style={{ backgroundImage: "url('/96.png')" }}
      />

      {/* Gradient Overlay Content */}
      <div className="relative z-10 md:max-w-6xl mx-auto m:px-6 md:py-20 px-2 py-14 max-w-lg inset-0 bg-gradient-to-b from-black to-[#1359D1] opacity-80 rounded-xl rounded-s ">
        
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
            <div className="flex items-center md:gap-2  text-gray border border-gray rounded-full md:py-2 md:px-3 py-1 px-1 w-40 md:w-60 md:text-sm text-xs  ">
              <Award className="text-white1 w-3 md:w-6" />
              <p className="text-xs md:text-sm"> Trusted by 22+ brands</p>
             
            </div>
            <div className="flex items-center md:gap-2 text-gray border border-gray rounded-full md:py-2 md:px-3 md:mr-auto md:w-72 w-56 py-1 px-1 ">
              <Star className="text-white1 w-3 md:w-6" />
              <p className="text-xs md:text-sm ">
              &quot;Bitsframe transformed our app!&quot;</p>
            </div>
          </div>

          <h2 className="text-xl md:text-4xl font-medium leading-tight text-white">
           Unlock Potential With Our IT Solutions

          </h2>

          <p className="text-white text-xs md:text-lg">
          Ready to elevate your business with custom IT services and solutions? Contact BitsFrame today to get started!</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
         
          <div className="flex justify-center m-auto mt-8">
  <Link href="/contact-us">
    <button className="bg-Blue/30 text-white md:px-6 md:py-3 px-3 py-1 font-medium hover:bg-Blue flex items-center gap-2 border border-gray rounded-full ">
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
