// components/CaseStudies.tsx
"use client";
import Image from "next/image";

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
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Real Results, Real Impact</h2>
        <p className="text-gray2">
          See how we’ve helped businesses like yours succeed with innovative tech solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
          >
            <div className="relative w-full h-56 bg-black rounded-lg mb-4">
              {/* Replace with actual image */}
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-Blue text-white text-xs px-3 py-1 ">
                Case Study
              </div>
            </div>

            <span className="inline-block text-xs bg-white/10 text-gray2 px-3 py-1 rounded-full mb-2">
              {study.client}
            </span>

            <h3 className="text-lg font-semibold leading-snug mb-2">{study.title}</h3>

            <p className="text-sm text-gray2">
              {study.description.split("**").map((part, i) =>
                i % 2 === 1 ? (
                  <strong key={i} className="text-white font-medium">
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
