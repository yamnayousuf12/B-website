'use client';
import { useState } from 'react';
import {  Plus, Minus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'What are cloud architecture and services?',
    answer:
      'Cloud structure refers to the configuration of cloud computing systems, encompassing tools, assets, and applications. Cloud solutions provide instant access to resources such as data storage, internet connections, and computing power.',
  },
  {
    question: 'What are the four types of cloud architecture?',
    answer:
      'The four types of cloud architecture are:\n\nPublic Cloud\nPrivate Cloud\nHybrid Cloud\nMulti-cloud.',
  },
  
    {
    question: "What are the four layers of cloud architecture?",
    answer:
      "The four layers of cloud architecture are:\n\nInfrastructure as a Service (IaaS)\Platform as a Service (PaaS)\nSoftware as a Service (SaaS)\nNetwork and security layer",
  },
  {
    question: 'What are the six pillars of cloud architecture?',
    answer:
      'The six pillars of cloud architecture are:\n\nOperational excellence\nSecurity\nReliability\nPerformance efficiency\nCost optimization\nSustainability',
  },
  {
    question: 'Do Bitsframe offer long-term support for a secure cloud architect?',
    answer:
      'Yes, Bitsframe offers long-term support for secure cloud architecture. They provide ongoing maintenance, updates, and troubleshooting to ensure your cloud infrastructure remains secure and efficient.',
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
