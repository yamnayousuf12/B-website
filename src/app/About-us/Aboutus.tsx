
"use client";
import Image from "next/image";

type Testimonial = {
  name: string;
  title: string;
  image: string;
  feedback: string;
};

const testimonials: Testimonial[] = [
  // {
  //   name: "Sarah T.",
  //   title: "CTO, TechScale Solutions",
  //   image: "/Ellipse 12(1).png",
  //   feedback:
  //     "Bitsframe’s custom chatbot transformed how we engage customers. Their team was fast, creative, and a true partner.",
  // },
  // {
  //   name: "Mark R.",
  //   title: "Founder, Innovate App",
  //   image: "/Ellipse 12.png",
  //   feedback:
  //     "Their AI solution gave us a competitive edge. Bitsframe delivered beyond expectations, on time and on budget.",
  // },
  // {
  //   name: "Priya S.",
  //   title: "CEO, Global Retail Co.",
  //   image: "/Ellipse 12(1).png",
  //   feedback:
  //     "From Shopify design to cloud architecture, Bitsframe made our e-commerce launch seamless. Highly recommend!",
  // },
  {
    name: "Sarah T.",
    title: "CTO, TechScale Solutions",
    image: "/ell.png",
    feedback:
      "Bitsframe’s custom chatbot transformed how we engage customers. Their team was fast, creative, and a true partner.",
  },
  {
    name: "Mark R.",
    title: "Founder, Innovate App",
    image: "/Mark.png",
    feedback:
      "Their AI solution gave us a competitive edge. Bitsframe delivered beyond expectations, on time and on budget.",
  },
  {
    name: "Priya S.",
    title: "CEO, Global Retail Co.",
    image: "/priya.png",
    feedback:
      "From Shopify design to cloud architecture, Bitsframe made our e-commerce launch seamless. Highly recommend!",
  },
  // {
  //   name: "Priya S.",
  //   title: "CEO, Global Retail Co.",
  //   image: "/Ellipse (2).png",
  //   feedback:
  //     "From Shopify design to cloud architecture, Bitsframe made our e-commerce launch seamless. Highly recommend!",
  // },
];

// Split testimonials
const firstRow = testimonials.slice(0, 3); // For lg:grid-cols-3
// const secondRow = testimonials.slice(0,4);   // For lg:grid-cols-4

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-4xl font-Medium mb-2 text-white">
          What Our Clients Say About Us
        </h2>
        <p className="text-white text-xs md:text-xl">
          Hear from businesses who turned their visions into reality with Bitsframe
        </p>
      </div>

      {/* First Row - 3 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
        {firstRow.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>

      {/* Second Row - 4 columns on large screens */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {secondRow.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div> */}
    </section>
  );
};

const TestimonialCard = ({ name, title, image, feedback }: Testimonial) => (
  <div className="bg-white/5 border-white/10 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
    <div className=" text-lg mb-4">★★★★★</div>
    <p className="text-sm text-white mb-6">“{feedback}”</p>
    <div className="flex items-center gap-3">
      <Image
        src={image}
        alt={name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-gray2">{title}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
