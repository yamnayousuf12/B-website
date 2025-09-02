'use client';
import { useState } from 'react';
import {  Plus, Minus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'Is chatbot development in demand?',
    answer:
      'Yes, chatbot development is in high demand as businesses seek ways to improve customer service and automate communication. The rise in AI and automation has made chatbots increasingly popular.',
  },
  {
    question: 'What is chatbot development?',
    answer:
      'Chatbot development involves creating AI-powered bots that interact with users through text or voice. It helps automate tasks like customer support and information retrieval.',
  },
  
    {
    question: "What programming language is used for chatbots?",
    answer:
      "Java, Python, and JavaScript are the programming languages for chatbot development. These languages are used to create the AI and logic behind the chatbot.",
  },
  {
    question: 'What are the seven steps to create a chatbot strategy?',
    answer:
      'The seven steps to create a chatbot strategy are:\n\nDefine goals\nChoose the right platform\nDesign conversation flows\nDevelop the chatbot\nIntegrate with existing systemsn\nTest the chatbot\nMonitor and optimize its performance',
  },
  {
    question: 'How does Bitsframe craft brand-oriented chatbots?',
    answer:
      'Bitsframe crafts brand-oriented chatbots by understanding your business values and goals. They customize the chatbot’s tone, design and functionality to align with your brand’s voice and user experience.',
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
