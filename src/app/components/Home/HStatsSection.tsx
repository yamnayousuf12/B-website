
// "use client";
// import Image from "next/image";

// const services = [
//   {
//     imgSrc: "/icons/Frame.png",
//     title: "Automate Operations with Managed IT Solutions",
//     description: "Streamline workflows using AI-driven tools tailored to your enterprise needs.",
//   },
//   {
//     imgSrc: "/icons/Frame2.png",
//     title: "Provide 24/7 IT Services Monitoring",
//     description: "Proactively safeguard networks and data with security solutions.",
//   },
//   {
//     imgSrc: "/icons/Frame3.png",
//     title: "Deploy Smart IT Solutions",
//     description: "We cover every tech aspect, from custom AI applications to cloud architecture.",
//   },
//   {
//     imgSrc: "/icons/Frame4.png",
//     title: "Transform Your Digital Journey",
//     description: (
//     <> Our certified <span className="text-white font-bold">IT services providers </span>  deliver strategic guidance and technical execution.
//     </>)
//   },
// ];

// export default function SmartITSolutions() {
//   return (
    
//     <section className="md:py-1 py-32 px-6 md:px-20 relative h-[550px] text-white md:h-[500px]  "
// // style={{ backgroundImage: "url('/Hstats.png')" }}
//      >
//        <section className=" border-collapse border border-white/10 border-b-black rounded-2xl p-6 md:p-10 bg-transparent z-20 relative -mt-72 md:-mt-48 ">
//       <div className="text-center md:mb-12 mb-16 bg-transparent z-20 relative">
        
//         <h2 className=" text-gray1 text-xl md:text-4xl font-bold mb-2 md:-mt-6 -mt-2 ">
//           How do We Deliver Smart IT Solutions?
//         </h2>
//         <p className="text-gray1 max-w-2xl mx-auto text-xs md:text-xl">
//           As your trusted <span className="text-gray1 font-normal">IT services provider</span>, we combine cutting-edge technology with 4+ years of expertise to
//         </p>
//       </div>
    
//       <div
//   className="md:bg-cover  md:bg-center md:bg-no-repeat md:py-12 md:px-4 py-2 px-1 "
//   style={{ backgroundImage: "url('/Hstats.png')" }}
// >
//   {/* Services Grid */}
//   <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-3 md:mb-12 mb-4 -hue-rotate-15">
    
//     {services.map((service, idx) => (
      
//       <div
//         key={idx}
//         className="bg-blur-lg  bg-black/60 md:p-2 p-2 border border-gray rounded-xl shadow-md  shadow-customBlue hover:shadow-Blue"
//       >
//         <div className="mb-2">
//           <div className="w-12 h-12  rounded-full flex items-center justify-center">
//             <Image src={service.imgSrc} alt={service.title} width={30} height={30} />
//           </div>
//         </div>
//         <h3 className="md:text-sm text-[9px] font-bold mb-2 text-white">
//           {service.title}
//         </h3>
//         <p className="md:text-sm text-[8px] text-gray2 ">{service.description}</p>
//       </div>
//     ))}
//   </div>

//   {/* Stats Section */}
//   <div className="flex flex-wrap justify-center md:gap-36 gap-5 text-center text-gray1 ">
//     <div>
//       <p className="md:text-3xl text-lg font-bold">50+</p>
//       <p className="md:text-sm text-gray2 text-xs">Projects Delivered</p>
//     </div>
//     <div>
//       <p className="md:text-3xl font-bold text-lg">22+</p>
//       <p className="md:text-sm text-gray2 text-xs">Trusted Partners</p>
//     </div>
//     <div>
//       <p className="md:text-3xl font-bold text-lg">04+</p>
//       <p className="md:text-sm text-gray2 text-xs">Years of Innovation</p>
//     </div>
//     <div>
//       <p className="md:text-3xl font-bold text-lg">95%</p>
//       <p className="md:text-sm text-gray2 text-xs">Client Satisfaction</p>
//     </div>
//   </div>
// </div>
//   </section>
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";

// const services = [
//   {
//     imgSrc: "/icons/Frame.png",
//     title: "Automate Operations with Managed IT Solutions",
//     description: "Streamline workflows using AI-driven tools tailored to your enterprise needs.",
//   },
//   {
//     imgSrc: "/icons/Frame2.png",
//     title: "Provide 24/7 IT Services Monitoring",
//     description: "Proactively safeguard networks and data with security solutions.",
//   },
//   {
//     imgSrc: "/icons/Frame3.png",
//     title: "Deploy Smart IT Solutions",
//     description: "We cover every tech aspect, from custom AI applications to cloud architecture.",
//   },
//   {
//     imgSrc: "/icons/Frame4.png",
//     title: "Transform Your Digital Journey",
//     description: (
//       <>
//         Our certified <span className="text-white font-bold">IT services providers</span> deliver strategic guidance and technical execution.
//       </>
//     ),
//   },
// ];

// export default function SmartITSolutions() {
//   return (
//     <section
//       className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-6 md:px-20"
//       style={{ backgroundImage: "url('/Hstats.png')" }}
//     >
//       <div className="max-w-7xl mx-auto rounded-2xl p-6 md:p-10 bg-black/60 border border-white/10 backdrop-blur">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
//             How do We Deliver Smart IT Solutions?
//           </h2>
//           <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
//             As your trusted <span className="font-semibold">IT services provider</span>, we combine cutting-edge technology with 4+ years of expertise to
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="bg-black/80 border border-white/10 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition duration-300"
//             >
//               <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4">
//                 <Image src={service.imgSrc} alt={service.title} width={30} height={30} />
//               </div>
//               <h3 className="text-white text-sm md:text-base font-semibold mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-400 text-xs md:text-sm">{service.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="flex flex-wrap justify-center gap-6 md:gap-20 text-center">
//           {[
//             ["50+", "Projects Delivered"],
//             ["22+", "Trusted Partners"],
//             ["04+", "Years of Innovation"],
//             ["95%", "Client Satisfaction"],
//           ].map(([stat, label], i) => (
//             <div key={i}>
//               <p className="text-2xl md:text-3xl font-bold text-white">{stat}</p>
//               <p className="text-xs md:text-sm text-gray-400">{label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";

const services = [
  {
    imgSrc: "/icons/Frame.png",
    title: "Automate Operations with Managed IT Solutions",
    description: "Streamline workflows using AI-driven tools tailored to your enterprise needs.",
  },
  {
    imgSrc: "/icons/Frame2.png",
    title: "Provide 24/7 IT Services Monitoring",
    description: "Proactively safeguard networks and data with security solutions.",
  },
  {
    imgSrc: "/icons/Frame3.png",
    title: "Deploy Smart IT Solutions",
    description: "We cover every tech aspect, from custom AI applications to cloud architecture.",
  },
  {
    imgSrc: "/icons/Frame4.png",
    title: "Transform Your Digital Journey",
    description: (
      <>
        Our certified <span className="text-white font-bold">IT services providers</span> deliver strategic guidance and technical execution.
      </>
    ),
  },
];

export default function SmartITSolutions() {
  return (
    <section
      className=" flex bg-cover -mt-9 bg-center bg-repeat text-white h-[550px] md:h-[500px] py-24 px-6 md:px-20 bg-[url(/Hstats.png)] "
      // style={{ backgroundImage: "url('/Hstats.png')" }}
    >
      
      <div className="text-center mb-12 md:-mt-52 -mt-40 rounded-md border border-white/10 hadow-lg relative z-20 md:max-w-7xl md:ml-10 h-[350px] rounded-t-lg border-b-black ">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 md:py-28 -mt-28">
        {/* Heading Section */}
        <div className="text-center md:mb-12 mb-4 m-10">
          <h2 className="text-sm md:text-3xl font-bold md:mb-2 mb-2 mt-9 md:mt-3">
            How do We Deliver Smart IT Solutions?
          </h2>
          <p className="text-gray text-[8px] md:text-sm max-w-2xl mx-auto font-normal">
            As your trusted <span className="font-extrabold md:text-sm">IT services provider</span>, we combine cutting-edge technology with 4+ years of expertise to
          </p>
        </div>
        

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-14 ">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-black/80 border border-white/10 p-4 md:p-2 md:w-52 rounded-xl shadow-sm shadow-customBlue hover:shadow-Blue/30 transition duration-300 text-left md:-mt-7"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Image src={service.imgSrc} alt={service.title} width={30} height={30} />
              </div>
              <h3 className="text-[8px] md:text-sm md:max-w-44 font-medium mb-2">{service.title}</h3>
              <p className="text-gray text-[8px] md:text-[12px]">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-32 text-center ml-10">
          {[
            ["50+", "Projects Delivered"],
            ["22+", "Trusted Partners"],
            ["04+", "Years of Innovation"],
            ["95%", "Client Satisfaction"],
          ].map(([stat, label], index) => (
            <div key={index}>
              <p className="text-lg md:text-3xl font-bold text-white">{stat}</p>
              <p className="text-[6px] md:text-sm text-gray">{label}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
