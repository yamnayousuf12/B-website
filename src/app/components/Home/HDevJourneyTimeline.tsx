
'use client';

import { useEffect, useState } from 'react';

const steps = [
  { number: '01', title: 'Think', desc: 'Strategize and conceptualize' },
  { number: '02', title: 'Design', desc: 'Craft user experience' },
  { number: '03', title: 'Architect', desc: 'Define technical blueprint' },
  { number: '04', title: 'Build', desc: 'Write and integrate code' },
  { number: '05', title: 'Test', desc: 'Validate functionality and stability' },
  { number: '06', title: 'Deploy', desc: 'Launch to production environment' },
  { number: '07', title: 'Optimize', desc: 'Enhance performance and efficiency' },
  { number: '08', title: 'Scale', desc: 'Expand system and reach' },
];

export default function DevJourney() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[200vh] bg-black text-white overflow-hidden px-6 md:px-20 py-24 flex flex-col md:flex-row gap-12">
      <div
        className="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center items-start pl-10 transition-transform duration-500"
        style={{ transform: `translateY(-${scrollY * 0.25}px)` }}
      >
        <h1 className="text-5xl font-bold">From Spark to Software</h1>
        <p className="text-gray mt-2">Bitsframe Dev Journey</p>
      </div>

      <div className="absolute right-10 top-10 h-full flex flex-col items-center justify-center space-y-5">
        <div className="relative border-l-2 border-gray h-full">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-6 mb-10 group">
              <div
                className={`absolute -left-3 top-1 w-4 h-4 rounded-full ${
                  idx === 0
                    ? 'bg-Blue shadow-lg shadow-Blue'
                    : 'bg-gray'
                }`}
              />
              <div
                className={`p-4 rounded-md w-64 ${
                  idx === 0
                    ? 'bg-gradient-to-r from-Blue to-gray'
                    : 'bg-gray bg-opacity-30'
                }`}
              >
                <div className="text-xl font-bold text-gray">
                  <span className="text-white">{step.number}</span> {step.title}
                </div>
                <div className="text-sm text-gray">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
