import React from "react";
import { Dumbbell, CloudUpload, RefreshCw } from "lucide-react";

const features = [
  {
    icon: <Dumbbell className="text-white mb-4 w-4 h-4 mt-4" />,
    title: "Tailored IT Solutions",
    desc: "Let's transform generic solutions. At Bitsframe, we design AI, custom chatbots, websites and apps to meet client’s requirements. We prioritise customer support and satisfaction.  ",
  },
  {
    icon: <CloudUpload className="text-white mb-4  w-4 h-4 mt-4" />,
    title: "Scalable Technology",
    desc: "Bitsframe delivers high-end tech solutions to meet modern technology standards. Our IT engineers develop integrated solutions that generate growth and add value to integrated digital systems.",
  },
  {
    icon: <RefreshCw className="text-white mb-4 w-4 h-4 mt-4" />,
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
    <section className="bg-black text-white py-2 px-6 md:px-16 ">
       <div className=" border-collapse border border-white/10 rounded-2xl py-10 px-6 md:px-16 shadow-lg md:mb-12 mb-2 border-b-black">
      <div className="max-w-6xl mx-auto text-center ">
        
        <h2 className="text-lg md:text-4xl font-bold mb-3 text-white">
         WHY CHOOSE OUR MANAGED IT SOLUTIONS
        </h2>
        <p className="text-gray md:mb-12 mb-7 text-[10px] md:text-base">
         Discover the strengths that set Bitsframe apart in delivering tech solutions that work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0b0b0b] p-6 rounded-lg shadow-md hover:shadow-Blue transition-shadow "
            >
              <div className="md:w-10 md:h-10 w-8 h-8 mb-4 rounded-full bg-Blue flex items-center justify-center">
             {feature.icon}
              </div>
              <h1 className="md:text-sm text-xs font-bold mb-3 text-left text-white">{feature.title}</h1>
              <p className="md:text-xs text-[9px] text-gray2 text-left">{feature.desc}</p>
            </div>
          ))}
          
        </div>
        </div>
       
     </div>
    </section>
    
  );
};

export default FeaturesSection;
