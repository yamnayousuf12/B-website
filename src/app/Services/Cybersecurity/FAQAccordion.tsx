'use client';
import { useState } from 'react';
import {  Plus, Minus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'What are cybersecurity services?',
    answer:
      'Cybersecurity services safeguard your business against online threats, including hacking and data breaches. These services include risk assessments, threat monitoring, and proactive security measures.',
  },
  {
    question: 'What are cyber security managed services?',
    answer:
      'Cybersecurity managed services provide ongoing protection and monitoring for your network and systems. These services are handled by experienced professionals who manage and reduce security risks around the clock.',
  },
  
    {
    question: "What are the five types of cyber security?",
    answer:
      "The five main types of cybersecurity are:\n\nNetwork security\nApplication security\nInformation security\nOperational security\nDisaster recovery",
  },
  {
    question: 'What are the 3 C’s of cybersecurity?',
    answer:
      'The three C’s of cybersecurity are confidentiality, integrity, and availability. These principles ensure that your data is secure, accurate, and accessible when needed.',
  },
  {
    question: 'Will I meet compliance standards, such as GDPR, with Bitsframe?',
    answer:
      'Yes, Bitsframe ensures that all security practices meet compliance standards, such as GDPR. This ensures that your data is handled securely and complies with all relevant legal and regulatory requirements.',
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
