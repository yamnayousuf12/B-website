'use client';
import { useState } from 'react';
import {  Plus, Minus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'What are services in mobile application development?',
    answer:
      'Here are the services that we offer in mobile app development:\n\nApp designing\nCoding\nTesting the app\nDeployment',
  },
  {
    question: 'What are the seven stages of app development?',
    answer:
      'The seven stages of app development are:\n\nIdea and concept\nResearch and planning\nDesign\nDevelopment\nTesting\nLaunch\nPost-launch maintenance',
  },
  
    {
    question: "What is a mobile application development framework?",
    answer:
      "A mobile application development framework is a set of tools and libraries that simplify the process of building apps. ",
  },
  {
    question: 'Which language is used for mobile app development?',
    answer:
      'Languages commonly used for mobile app development are:\n\nJava\nKotlin\nSwift\nJavaScript',
  },
  {
    question: 'How does Bitsframe develop secure, scalable mobile apps?',
    answer:
      'Bitsframe develops secure, scalable mobile apps by using industry-standard encryption, robust testing, and scalable architecture. They ensure that apps can handle growth and protect user data.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start md:-ml-3">
        {/* Left Side */}
        <div >
          <h2 className="md:text-4xl  text-xl font-normal mb-2">FAQs</h2>
          <p className="text-gray text-xs md:text-sm">Your Cybersecurity Questions Answered</p>
        </div>

        {/* Right Side */}
        <div className="space-y-3 md:w-[550px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" bg-[#111]  rounded-lg p-5 border border-white/20 border-r-black  transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full text-left md:text-lg text-xs font-medium"
                onClick={() => toggle(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <p className="whitespace-pre-line mt-3 text-gray2 md:text-sm text-xs">{faq.answer}</p>
                // <p className="mt-3 text-gray2 md:text-sm text-xs">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
