'use client';
import { useState } from 'react';
import {  Plus, Minus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'What is meant by UI and UX?',
    answer:
      'UI stands for user interface. It is the external interface that users see and interact with. UX stands for user experience, referring to the ease with which a user can navigate and utilize features.',
  },
  {
    question: 'What are the seven principles of UX design',
    answer:
     'The seven principles of UX design are:\n\n1) Usability\n2) Clarity\n3)  Consistency\n4) Feedback\n5) Simplicity\n7) Flexibility',
  },
  {
    question: 'What is required for UI/UX?',
    answer:
      'UI/UX design requires creativity and thorough research. It also involves rigorous testing and technical expertise. ',
  },
  {
    question: 'How does Bitsframe deliver high-end UI/UX designs?',
    answer:
      'Bitsframe delivers high-end UI/UX designs by focusing on engaging interfaces, and seamless user experiences. We combine modern design trends with innovative solutions to meet client goals.',
  },
  {
    question: 'Can we redesign existing interfaces?',
    answer:
      'Yes, our designers can modify old interfaces without compromising on your brand identity.',
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
