'use client';
import { useState } from 'react';
import {  Plus, Minus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'What is custom web development and design?',
    answer:
      'Custom web development and design means creating websites tailored to your business needs. It ensures your website is functional and meets specific goals.',
  },
  {
    question: 'How is a custom website distinguished from a website builder?',
    answer:
      'A custom website is built from scratch by professionals to fit your exact needs. In contrast, a website builder uses templates that are quicker but less flexible.',
  },
  
    {
    question: "What are the seven steps of web development?",
    answer:
      "The seven steps of web development are:\n\n1) Planning\n2) Design\n3) Content Creation\n4) Coding\n5) Testing\n6) Launch\n7) Maintenance",
  },
  {
    question: 'Can we make your website secure and easy to navigate?',
    answer:
      'Yes, we ensure your website is secure with the latest encryption methods. We also design user-friendly interfaces that make navigation smooth for your visitors.',
  },
  {
    question: 'How long does Bitsframe take to build a website?',
    answer:
      'We deliver complete websites within a few weeks, meeting the client’s requirements and deadlines.',
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
          <p className="text-gray text-xs md:text-sm">Your Frequently Questions Answered</p>
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
