
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm text-white/80 border border-gray rounded-full py-2 px-3 ">
              <Award className="text-white" />
              Trusted by 22+ brands
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80 border border-gray rounded-full py-2 px-3 mr-auto">
              <Star className="text-white" />
              &quot;Bitsframe transformed our app!&quot;
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
           Unlock Potential With Our IT Solutions

          </h2>

          <p className="text-white/80">
          Ready to elevate your business with custom IT services and solutions? Contact BitsFrame today to get started! </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
         
          <div className="flex justify-center m-auto mt-8">
  <Link href="/contact-us">
    <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-Blue flex items-center gap-2">
      <Phone className="text-xl" />
      Contact Us
    </button>
  </Link>
</div>

          </div>
        </div>
      </div>
   
  );
}
