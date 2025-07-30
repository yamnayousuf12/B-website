
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
      className="max-w-7xl mx-auto  flex bg-cover -mt-9 bg-center bg-repeat text-white h-[550px] md:h-[500px] py-24 px-6 md:px-20 bg-[url(/Hstats.png)] "
    
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
        <div className="flex flex-wrap justify-center gap-4 md:gap-36 text-center ml-0 md:-ml-9 -mt-5 md:mt-0">
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
