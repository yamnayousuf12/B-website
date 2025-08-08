'use client';
import { useState } from 'react';
import {  Plus, Minus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
     question: 'What are AI development services?',
    answer:
       'AI development services are developing integrated systems that can automate tasks. This involves natural language processing, machine learning, and automation.',
  },
  {
    question: 'What are the four types of AI software?',
    answer:
      'The four types of AI software are:\n\n1) Reactive Machines\n2) Limited Memory\n3) Theory of Mind\n4) Self-aware AI',
  },
  {
    question: 'What is an AI development tool, and its types?',
    answer:
      'An AI development tool is software that assists in building AI models and applications. Types include machine learning frameworks, neural network tools, and natural language processing platforms.',
  },
  {
    question: 'How long does AI setup take?',
    answer:
      'The setup time for AI depends on the complexity of the solution being implemented. Usually, a couple of weeks is enough to build an AI system.',
  },
  {
    question: 'How does Bitsframe deliver scalable AI solutions?',
    answer:
      'Bitsframe delivers scalable AI solutions by using advanced algorithms. We focus on flexibility, performance, and ensuring the solution grows with your business needs.',
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
                <p className="mt-3 text-gray2 md:text-sm text-xs whitespace-pre-line">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
