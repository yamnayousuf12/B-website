import React from "react";
import { Dumbbell, CloudUpload, RefreshCw } from "lucide-react";

const features = [
  {
    icon: <Dumbbell className="text-white  text-2xl mb-4 mt-3" />,
    title: "Tailored IT Solutions",
    desc: "Let's transform generic solutions. At Bitsframe, we design AI, Custom Chatbots, Websites and Apps to meet clients' requirements. We prioritise customer support and satisfaction. ",
  },
  {
    icon: <CloudUpload className="text-white  text-2xl mb-4 mt-3" />,
    title: "Scalable Technology",
    desc: "Bitsframe delivers high-end tech solutions to meet modern technology standards. Our IT engineers develop integrated solutions that generate growth and add value to integrated digital systems.",
  },
  {
    icon: <RefreshCw className="text-white  text-2xl mb-4 mt-3" />,
    title: "End-to-End IT Provider Expertise",
    desc: (
      <>
        As one of the top <span className="text-white font-bold">managed IT services</span>  providers, our experts handle complex tech problems with strategic planning and execution. Whether cyber threats or data breaches, our tech guards help enterprises protect their data and develop up-to-date technology solutions.
      </>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-black text-white py-4 px-6 md:px-16">
       <div className="bg-[#121111] py-10 px-6 md:px-16 rounded-md shadow-lg md:mb-12 mb-2">
      <div className="max-w-6xl mx-auto text-center ">
        
        <h2 className="text-xl md:text-4xl font-bold mb-3">
         WHY CHOOSE OUR MANAGED IT SOLUTIONS
        </h2>
        <p className="text-gray2 md:mb-12 mb-7 text-sm md:text-base">
         Discover the strengths that set Bitsframe apart in delivering tech solutions that work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0b0b0b] p-6 rounded-lg shadow-md hover:shadow-Blue transition-shadow "
            >
              <div className="w-10 h-10 mb-4 rounded-full bg-Blue flex items-center justify-center">
             {feature.icon}
              </div>
              <h1 className="text-sm font-bold mb-3">{feature.title}</h1>
              <p className="text-xs text-gray2">{feature.desc}</p>
            </div>
          ))}
          
        </div>

        {/* CTA Banner */}
        

       
           <section
  className="relative text-white py-3 px-4 md:px-16 bg-no-repeat md:bg-center md:bg-cover rounded-md Shadow-md"
  style={{
    backgroundImage: "url('/hf.png')",
   }}
>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Struggling with IT  Challenges?
          </h3>
          <p className="text-white/85 mb-4 text-sm md:text-base text-center max-w-2xl md:ml-20">
           Our expert delivers AI, custom apps, and cybersecurity solutions that dervive results Get Your Free IT Consulting Session With Our Experts
          </p>
          <button className="text-sm px-2 py-1 bg-white text-black font-medium md:px-6 md:py-2 rounded-md hover:bg-Blue transition">
            Boook  Now →
          </button>
          </section>
        </div>
       
     </div>
    </section>
  );
};

export default FeaturesSection;
