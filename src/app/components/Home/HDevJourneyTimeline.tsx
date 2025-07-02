
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
    
    <section className="relative min-h-screen bg-black text-white px-6 md:px-20 py-24 flex flex-col md:flex-row gap-12 overflow-hidden" 
    >
      <div className="absolute -inset-16 -z-1 bg-cover bg-center bg-no-repeat h-full w-full"
       style={{
    backgroundImage: "url('/Hstats.png')",
  }}/>
      {/* Left Floating Panel */}
      <motion.div
        className="md:w-1/2 flex flex-col  z-10"
        
       
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4"
        >From Spark to Software</h1>
        <p className="text-gray text-lg">Bitsframe Dev Journey</p>
        
      </motion.div>

      {/* Right Timeline */}
      <motion.div className="md:w-1/2 relative pr-4" style={{ y: rightY }}>
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-white/10" />
        

        <div className="ml-10 space-y-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: false }}
            >
              {/* Dot */}
              <div
                className={`absolute -left-6 top-3 w-4 h-4 rounded-full border transition-all duration-300 ${
                  idx === 0
                    ? "bg-Blue shadow-md border-Blue animate-pulse"
                    : "bg-white/10 border-white/20"
                }`}
              />
              

              {/* Card */}
              <div
                className={`rounded-lg px-6 py-4 w-full max-w-sm transition-all duration-300 ${
                  idx === 0
                    ? "bg-gradient-to-r from-Blue/40 to-Blue/10 border border-Blue"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                <h3 className="text-xl font-semibold text-white flex gap-2 items-center">
                  <span className="text-gray font-bold">{step.number}</span>
                  {step.title}
                </h3>
                <p className="text-sm text-gray mt-1">{step.desc}</p>
              </div>
              
            </motion.div>
          ))}
          
        </div>
        
      </motion.div>
      
      
    </section>
  );
}
