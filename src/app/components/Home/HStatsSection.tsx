


// "use client";
// import Image from "next/image";

// const SmartITSolutions = () => {
//   return (
//     <section
//       className="md:py-10 py-7 px-6 md:px-20 relative text-white bg-no-repeat bg-center bg-cover h-screen"
//       style={{ backgroundImage: "url('/Hstats.png')" }}
//     >
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-start gap-4">
//           <Image src="/icons/Vector (3).png" alt="Vector" width={40} height={40} />
//           <div>
//             <h2 className="text-xl md:text-4xl font-bold mb-2">
//               How Do We Deliver Smart <br /> IT Solutions?
//             </h2>
//             <p className="text-white/80 mb-10 md:max-w-2xl md:text-base text-xs">
//               As your trusted <span className="font-semibold text-white">IT services provider</span>, we
//               combine cutting-edge technology with 8+ years of expertise to:
//             </p>

//             {/* Features Section */}
//             <div className="space-y-5 ">
//               <div className="flex items-start gap-2">
//                 <Image src="/icons/Group (1).png" alt="Group" width={40} height={40} />
//                 <div>
//                   <h3 className="md:text-xl text-sm font-semibold">
//                     Automate Operations with Managed IT Solutions
//                   </h3>
//                   <p className="text-white/80 md:text-base text-xs">
//                     Streamline workflows using AI-driven tools tailored to your enterprise needs.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <Image src="/icons/Group.png" alt="Group" width={40} height={40} />
//                 <div>
//                   <h3 className="md:text-xl text-sm font-semibold">
//                     Provide 24/7 IT Services Provider Monitoring
//                   </h3>
//                   <p className="text-white/80 md:text-base text-xs">
//                     Proactively safeguard networks and data with security solutions.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <Image src="/icons/Vector (2).png" alt="Deploy" width={40} height={40} />
//                 <div>
//                   <h3 className="md:text-xl text-sm font-semibold">Deploy Smart IT Solutions</h3>
//                   <p className="text-white/80 md:text-base text-xs">
//                     We cover every tech aspect, from custom AI applications to cloud architecture.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <Image src="/icons/Vector (1).png" alt="Transform" width={40} height={40} />
//                 <div>
//                   <h3 className="md:text-xl text-sm font-semibold">Transform Your Digital Journey</h3>
//                   <p className="text-white/80 md:text-base text-xs">
//                     Our certified <span className="font-semibold text-white ">IT services providers</span>{' '}
//                     deliver strategic guidance and technical execution.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Section */}
//             <div className="grid grid-cols-2 md:grid-cols-4 md:gap-9 gap-2 text-center md:mt-10 mt-10 md:m-24 mr-14">
//               <div>
//                 <p className="md:text-3xl text-lg font-bold">50+</p>
//                 <p className="text-white/80 md:text-xl text-sm">Projects Delivered</p>
//               </div>
//               <div>
//                 <p className="md:text-3xl text-lg font-bold ">22+</p>
//                 <p className="text-white/80 md:text-xl text-sm">Trusted Partners</p>
//               </div>
//               <div>
//                 <p className="md:text-3xl text-lg font-bold ">04+</p>
//                 <p className="text-white/80 md:text-xl text-sm">Years of Innovation</p>
//               </div>
//               <div>
//                 <p className="md:text-3xl font-bold ">95%</p>
//                 <p className="text-white/80 md:text-xl text-sm">Client Satisfaction</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SmartITSolutions;




"use client";
import Image from "next/image";

const services = [
  {
    imgSrc: "/icons/Group (1).png",
    title: "Automate Operations with Managed IT Solutions",
    description: "Streamline workflows using AI-driven tools tailored to your enterprise needs.",
  },
  {
    imgSrc: "/icons/Group.png",
    title: "Provide 24/7 IT Services Monitoring",
    description: "Proactively safeguard networks and data with security solutions.",
  },
  {
    imgSrc: "/icons/Vector (2).png",
    title: "Deploy Smart IT Solutions",
    description: "We cover every tech aspect, from custom AI applications to cloud architecture.",
  },
  {
    imgSrc: "/icons/Vector (1).png",
    title: "Transform Your Digital Journey",
    description: (
    <> Our certified <span className="text-white font-bold">IT services providers </span>  deliver strategic guidance and technical execution.
    </>)
  },
];

export default function SmartITSolutions() {
  return (
    <section className="md:py-10 py-7 px-6 md:px-20  relative text-white bg-no-repeat bg-center bg-cover md:h-screen"
style={{ backgroundImage: "url('/Hstats.png')" }}
     >
      <div className="text-center mb-12">
        <h2 className=" text-gray1 text-xl md:text-4xl font-bold mb-2">
          How do We Deliver Smart IT Solutions?
        </h2>
        <p className="text-gray1 max-w-2xl mx-auto text-xs md:text-xl">
          As your trusted <span className="text-gray1 font-normal">IT services provider</span>, we combine cutting-edge technology with 4+ years of expertise to
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-3 md:mb-12 mb-4 -hue-rotate-15 ">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#0F0F0F] md:p-6 p-2 border border-gray rounded-lg shadow hover:shadow-Blue"
          >
           <div className="mb-2">
  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
    <Image src={service.imgSrc} alt={service.title} width={30} height={30} />
  </div>
</div>
            <h3 className="md:text-lg text-sm font-semibold mb-2 text-center text-white">{service.title}</h3>
            <p className="md:text-sm text-xs text-gray2 text-center">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-8 text-center text-gray1">
        <div>
          <p className="text-3xl font-bold">50+</p>
          <p className="text-sm text-gray2">Projects Delivered</p>
        </div>
        <div>
          <p className="text-3xl font-bold">22+</p>
          <p className="text-sm text-gray2">Trusted Partners</p>
        </div>
        <div>
          <p className="text-3xl font-bold">04+</p>
          <p className="text-sm text-gray2">Years of Innovation</p>
        </div>
        <div>
          <p className="text-3xl font-bold">95%</p>
          <p className="text-sm text-gray2">Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
}
