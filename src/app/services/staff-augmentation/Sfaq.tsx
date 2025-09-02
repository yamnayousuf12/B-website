'use client';
import { useState } from 'react';
import {  Plus, Minus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'What are staff augmentation services?',
    answer:
      'Staff augmentation is outsourcing talented staff from outside the company. The augmented staff complete specific projects with efficient planning and monitoring. ',
  },
  {
    question: 'What is an augmented employee?',
    answer:
      'An augmented employee is a temporary professional hired to support your team. They bring specialized skills to help with specific tasks, ensuring seamless workflow.',
  },
  {
    question: 'In what ways are business process outsourcing and staff augmentation different?',
    answer:
      'Business process outsourcing is assigning specific tasks to external factors for a particular project. On the other hand, staff augmentation is seeking external staff for the company.',
  },
  {
    question: 'What is the role of augmented staff?',
    answer:
      'The role of augmented staff is to enhance your team’s capabilities by providing specific skills and expertise. They help complete projects faster without long-term commitments.',
  },
  {
    question: 'What are the benefits of augmenting staff from Bitsframe?',
    answer:
      'Bitsframe offers skilled, flexible professionals who seamlessly integrate with your team. Our staff augmentation services ensure quick scaling, reduced hiring costs, and expertise tailored to your needs.',
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
                <p className="mt-3 text-gray2 md:text-sm text-xs ">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
