"use client";
import { Phone, Mail, Star, Award } from "lucide-react";

export default function ContactCTA() {
  return (
    <div className="relative overflow-hidden md:rounded-xl text-white p-2 md:p-1 md:max-w-6xl max-w-50 mx-auto mt-10 shadow-lg bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 md:bg-cover md:bg-center z-0 opacity-80"
        style={{ backgroundImage: "url('/96.png')" }}
      />

      {/* Gradient Overlay Content */}
      <div className="relative z-10 md:max-w-6xl mx-auto m:px-6 md:py-20 px-2 py-14 max-w-lg">
        
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
            <div className="flex items-center md:gap-2  text-white/80 border border-gray rounded-full md:py-2 md:px-3 py-1 px-1 w-40 md:w-60 md:text-sm text-xs">
              <Award className="text-white w-3 md:w-6" />
              <p className="text-xs md:text-sm"> Trusted by 22+ brands</p>
            </div>
            <div className="flex items-center md:gap-2 text-white/80 border border-gray rounded-full md:py-2 md:px-3 md:mr-auto md:w-72 w-56 py-1 px-1">
              <Star className="text-white w-3 md:w-6" />
             <p className="text-xs md:text-sm ">
              &quot;Bitsframe transformed our app!&quot;</p>
            </div>
          </div>

          <h2 className="text-xl md:text-4xl font-semibold leading-tight">
            Protect Your Business Now
          </h2>

          <p className="text-white/80 text-xs md:text-lg">
            We’ll secure your data with expert solutions—get a free audit today! 
          </p>

          <div className="flex flex-col sm:flex-row md:gap-4 gap-2 pt-4">
            <div className="flex items-center gap-2">
              <Mail className="md:text-xl text-xs" />
              <span className="md:text-xl text-sm">hey@bitsframe.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="md:text-xl text-xs" />
              <span className="md:text-xl text-sm">+92 309 2074390</span>
            </div>
          </div>
        </div>
      </div>
   
  );
}
