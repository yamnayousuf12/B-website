import React from "react";
import { WandSparkles, Rocket, Settings } from "lucide-react";

const features = [
  {
    icon: <WandSparkles className="text-Blue text-2xl mb-4" />,
    title: "Tailored Innovation",
    desc: "Forget generic solutions. We design AI, chatbots, and Shopify stores that match your needs, making your challenges disappear.",
  },
  {
    icon: <Rocket className="text-Blue text-2xl mb-4" />,
    title: "Scalable Technology",
    desc: "Your business is going places—our apps, UI/UX, and cloud solutions are built to keep up, no matter how big you get.",
  },
  {
    icon: <Settings className="text-Blue text-2xl mb-4" />,
    title: "End-to-End Expertise",
    desc: "We take care of everything—strategy, cybersecurity, development—so you can relax knowing your projects in great hands.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
       
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We’re Your Go-To Tech Partner
        </h2>
        <p className="text-gray2 mb-12 text-base md:text-lg">
          Discover the strengths that set Bitsframe apart in delivering tech solutions that work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0b0b0b] p-6 rounded-lg shadow-md hover:shadow-Blue transition-shadow"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray2">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        

       
           <section
  className="relative bg-black text-white py-20 px-6 md:px-16 bg-no-repeat bg-center bg-cover rounded-md Shadow-md"
  style={{
    backgroundImage: "url('/hf.jpg')",
  
  }}
>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Struggling with Tech Challenges?
          </h3>
          <p className="text-gray2 mb-4 text-sm md:text-base">
            Our expert team delivers AI, custom apps, and cybersecurity solutions that work—
            start with a consultation today!
          </p>
          <button className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-Blue transition">
            Let’s Build Together →
          </button>
          </section>
        </div>
       
     
    </section>
  );
};

export default FeaturesSection;
