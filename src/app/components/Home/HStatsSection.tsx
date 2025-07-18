
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
