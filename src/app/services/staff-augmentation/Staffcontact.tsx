
"use client";
import Link from "next/link";
import { PhoneCall} from "lucide-react";

export default function ContactCTA() {
  return (
    <div className="bg-black relative overflow-hidden md:rounded-3xl md:rounded-b text-white p-2 md:p-1 md:max-w-[90%] max-w-50 mx-auto mt-1 shadow-lg h-72 ">
      {/* Background Image */}
      <div
        className="absolute inset-1 md:bg-cover md:bg-center z-0 md:border-b-customBlue md:rounded-3xl "
        style={{ backgroundImage: "url('/96.svg')" }}
      />

      {/* Gradient Overlay Content */}
      <div className="relative z-10 mx-auto m:px-6 md:py-20 px-2 py-14 max-w-lg inset-0 md:max-w-[90%] ">

          <h2 className="text-lg md:text-2xl font-medium leading-tight text-white md:ml-9">
          Augment Your Team Instantly!

          </h2>

          <p className="text-white text-[10px] md:text-sm md:ml-9">
          Scale your team with skilled developers and boost productivity. Ready to build an expert team? Reach out to Bitsframe.</p>

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
