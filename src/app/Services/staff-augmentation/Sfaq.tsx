'use client';
import { useState } from 'react';
import {  Plus, Minus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'How does staff augmentation work?',
    answer:
      'We provide skilled talent to join your team temporarily.',
  },
  {
    question: 'How fast can I get talent?',
    answer:
      'Yes, we help ensure your systems meet key regulations including GDPR, HIPAA, and more.',
  },
  {
    question: 'Can I choose the skills?',
    answer:
      'Our setup begins immediately and most systems are secured within 24-48 hours.',
  },
  {
    question: 'Is it cost-effective?',
    answer:
      'We work with businesses of all sizes and offer scalable plans to match your needs.',
  },
  {
    question: 'Do you support ongoing projects?',
    answer:
      'Yes, we provide 24/7 monitoring, updates, and expert support for continued protection.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <h2 className="md:text-4xl text-2xl font-bold mb-2">FAQs</h2>
          <p className="text-white/80 text-xs md:text-sm">Your Cybersecurity Questions Answered</p>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-lg p-5 transition-all duration-300"
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
                <p className="mt-3 text-gray2 md:text-sm text-xs">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
