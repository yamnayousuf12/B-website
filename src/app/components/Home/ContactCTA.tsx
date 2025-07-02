// "use client";
// import { Phone,  Mail, Star, Award
// } from "lucide-react";


// export default function ContactCTA() {
//   return (
//     <div className="bg-black text-white">
        
//       <div className="max-w-6xl mx-auto px-6 py-20">
//         <div className="rounded-xl bg-gradient-to-br from-blue-900 to-blue-500 p-10 space-y-6">
//           <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
//             <div className="flex items-center gap-2 text-sm text-white/80">
//               <Award className="text-white" />
//               Trusted by 22+ brands
//             </div>
//             <div className="flex items-center gap-2 text-sm text-white/80">
//               <Star className="text-white" />
//               &quot;Bitsframe transformed our app!&quot;
//             </div>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
//             We Deliver Smarter, Faster Success
//           </h2>
//           <p className="text-white/90">
//             Let&apos;s create something extraordinary with our AI, app, and cybersecurity expertise.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <div className="flex items-center gap-2">
//               < Mail className="text-xl" />
//               <span>hey@bitsframe.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone className="text-xl" />
//               <span>+92 309 2074390</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { Phone, Mail, Star, Award } from "lucide-react";

export default function ContactCTA() {
  return (
    <div className="relative bg-black text-white">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/co.png')" }}
      /> */}

      {/* Gradient Overlay Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-xl bg-gradient-to-br from-Blue/10 to-Blue/90 p-10 space-y-6 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
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
            We Deliver Smarter, Faster Success
          </h2>

          <p className="text-white/80">
            Let&apos;s create something extraordinary with our AI, app, and cybersecurity expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="flex items-center gap-2">
              <Mail className="text-xl" />
              <span>hey@bitsframe.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-xl" />
              <span>+92 309 2074390</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
