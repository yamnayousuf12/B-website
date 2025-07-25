
"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { number: "01", title: "Think", desc: "Strategize and conceptualize" },
  { number: "02", title: "Design", desc: "Craft user experience" },
  { number: "03", title: "Architect", desc: "Define technical blueprint" },
  { number: "04", title: "Build", desc: "Write and integrate code" },
  { number: "05", title: "Test", desc: "Validate functionality and stability" },
  { number: "06", title: "Deploy", desc: "Launch to production environment" },
  { number: "07", title: "Optimize", desc: "Enhance performance and efficiency" },
  { number: "08", title: "Scale", desc: "Expand system and reach" },
];

export default function DevJourney() {
  const { scrollY } = useScroll();
  
  const rightY = useTransform(scrollY, [0, 1000], [0, -80]);

  return (
    
    <section className="relative min-h-screen bg-black text-white px-8 md:px-20 py-0 md:py-4 flex flex-col md:flex-row md:gap-12 gap-14 overflow-hidden" 
    >
      <div className="absolute -mt-56 -z-1 bg-cover bg-center bg-no-repeat h-full w-full md:-ml-24 shadow-2xl bg-black"
       style={{
    backgroundImage: "url('/Hstats.svg')",
  }}/>
  
      {/* Left Floating Panel */}
      <motion.div
        className="md:w-1/2 flex flex-col z-10"
        
       
      >
        <h1 className="text-lg md:text-3xl mb-2 font-medium text-white mt-20"
        >From Spark to Software</h1>
        <p className="text-gray md:text-sm text-[8px]">Bitsframe  Development Journey</p>
        
      </motion.div>

      {/* Right Timeline */}
      <motion.div className="md:w-1/2  relative pr-4" style={{ y: rightY }}>
        <div className="absolute md:left-24 left-28 md:top-0 top-16 bottom-0 w-1 bg-white/15 " />
        

        <div className="md:ml-10 ml-12 md:space-y-10 space-y-2 ">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative ml-20  bg-black "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: false }}
            >
              {/* Dot */}
              <div
                className={`absolute md:-ml-7 -ml-5 md:top-3 top-8 w-3 h-3 rounded-full border transition-all duration-300 ${
                  idx === 0
                    ? "bg-Blue shadow-md border-Blue animate-pulse"
                    : "bg-white/20 border-white/20"
                }`}
                
              />
              


              {/* Card */}
              <div
                className={`rounded-lg md:px-6 md:py-4 px-1 py-2 md:w-full w-44 md:max-w-sm max-w-xs transition-all duration-300 md:mt-16 mt-14  ${
                  idx === 0
                    ? "bg-gradient-to-r from-Blue/40 to-Blue/5 border border-Blue shadow-2xl border-e-8 border-y-1   border-e-black border-y-black/10"
                    : "bg-gradient-to-r  from-white/10 to-black   border border-white/10  border-e-8 border-y-1 border-e-black border-y-black/5"
                }`}
              >
                <h3 className="md:text-xl text-sm font-semibold text-gray flex gap-2 items-center">
                  <span className="text-white font-bold containert md:text-3xl text-base">{step.number}</span>
                  {step.title}
                </h3>
                <p className="md:text-sm text-[8px] text-gray3 md:ml-10  ml-7 mt-1">{step.desc}</p>
              </div>
              
            </motion.div>
          ))}
          
          
        </div>
        
        
      </motion.div>
      
      
    </section>
  );
}


