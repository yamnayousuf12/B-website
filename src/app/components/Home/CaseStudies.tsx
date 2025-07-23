// components/CaseStudies.tsx
"use client";


const caseStudies = [
  {
    client: "TechScale Solutions",
    title: "Needed a scalable SaaS platform with seamless UI/UX.",
    description:
      "Delivered high-performance UI components and cloud architecture, achieving **40% faster load times** and **25% user growth in 6 months**.",
    image: "/case1.jpg", // Replace with actual image path
  },
  {
    client: "InnoVate App",
    title: "Tight deadline for a custom AI-powered mobile app.",
    description:
      "Built a tailored AI-driven app with rigorous testing, **launching 2 weeks early** with a **4.8/5 user rating**.",
    image: "/case2.jpg", // Replace with actual image path
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-black text-white md:py-2 md:px-4">
      <div className="max-w-7xl mx-auto text-center mb-6 ">
        <h2 className="md:text-3xl text-lg font-Medium mb-2 text-white">Real Results, Real Impact</h2>
        <p className="text-gray md:text-sm text-[12px]">
          See how we’ve helped businesses like yours succeed with innovative tech solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl max-w-xs mx-auto bg-black ">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-2xl  shadow-black hover:shadow-xl transition-shadow duration-300 p-4 border-white/20 border-b border-s border-t gradient-line  "
          >
            <div className="relative w-72 md:w-96 h-56 m-auto bg-[#1A1A1A] rounded-lg mb-4 ">
             
             
              <div className="absolute rounded-md top-2 right-2 bg-Blue text-white1 text-xs px-3 py-1 ">
                Case Study
              </div>
            </div>

            <span className="inline-block [12px] bg-white/10 text-gray px-3 py-1 rounded-full mb-2">
              {study.client}
            </span>

            <h3 className="md:text-lg  [12px] font-semibold leading-snug mb-2">{study.title}</h3>

            <p className="md:text-sm text-[10px] text-gray1">
              {study.description.split("**").map((part, i) =>
                i % 2 === 1 ? (
                  <strong key={i} className="[10px] md:text-sm text-white font-medium">
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
