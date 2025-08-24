
"use client";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function ContactCTA() {
  return (
    <div className="relative  overflow-hidden md:rounded-3xl md:rounded-b text-white p-2 md:p-1 md:max-w-6xl max-w-50 mx-auto mt-10 shadow-lg bg-black ">
      {/* Background Image */}
      <div
        className="absolute inset-1 md:bg-cover md:bg-center z-0 opacity-60 md:border-b-customBlue md:rounded-3xl"
        style={{ backgroundImage: "url('/96.png')" }}
      />

      {/* Gradient Overlay Content */}
      <div className="relative z-10 md:max-w-6xl mx-auto m:px-6 md:py-20 px-2 py-14 max-w-lg inset-0   ">
        
         
          <h2 className="text-sm md:text-4xl font-medium leading-tight text-white mb-3">
        Achieve your goals faster with our revolutionary IT services

          </h2>

          <p className="text-white text-[10px] md:text-lg">
        Collaborate to transform your digital journey with our creative IT services </p>

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
