'use client';
import { useState } from 'react';
import {  Plus, Minus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'How do you protect my business from cyber threats?',
    answer:
      'We use real-time detection, encryption, and custom plans to stop threats and secure your data.',
  },
  {
    question: 'Will I meet compliance standards like GDPR?',
    answer:
      'Yes, we help ensure your systems meet key regulations including GDPR, HIPAA, and more.',
  },
  {
    question: 'How fast can you secure my systems?',
    answer:
      'Our setup begins immediately and most systems are secured within 24-48 hours.',
  },
  {
    question: 'What if I have a small business?',
    answer:
      'We work with businesses of all sizes and offer scalable plans to match your needs.',
  },
  {
    question: 'Do you offer ongoing support?',
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
          <h2 className="text-4xl font-bold mb-2">FAQs</h2>
          <p className="text-white/80">Your Frequently Questions Answered</p>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-lg p-5 transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full text-left text-lg font-medium"
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
                <p className="mt-3 text-gray2 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
