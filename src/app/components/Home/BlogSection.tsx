// components/BlogSection.tsx
"use client";
// import Image from "next/image";

type Blog = {
  category: string;
  title: string;
  points: string[];
  image: string;
};

const blogs: Blog[] = [
  {
    category: "AI & Innovation",
    title: "5 Ways AI Chatbots Boost Customer Engagement",
    points: [
      "Automate support to save time and costs.",
      "Personalize user experiences with smart AI.",
      "Drive 20% more engagement with tailored bots.",
    ],
    image: "/blogs/blog1.jpg", // Replace with actual images
  },
  {
    category: "Cybersecurity Solutions",
    title: "Top 3 Cybersecurity Mistakes to Avoid in 2025",
    points: [
      "Strengthen defenses with proactive threat detection.",
      "Ensure compliance with ISO 27001 standards.",
      "Protect user trust with zero downtime.",
    ],
    image: "/blogs/blog2.jpg",
  },
  {
    category: "E-Commerce & Shopify",
    title: "How to Skyrocket Sales with Shopify UI/UX",
    points: [
      "Optimize designs for seamless user journeys.",
      "Boost conversions with intuitive interfaces.",
      "Achieve 30% sales growth with our tips.",
    ],
    image: "/blogs/blog3.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-black text-white py-7 md:py-10 px-4">
      <div className="max-w-7xl mx-auto text-center md:mb-12 mb-3 ">
        <h2 className="md:text-4xl text-xl font-medium mb-2 text-white">Our Blogs</h2>
        <p className="text-gray text-[10px] md:text-sm">
          Explore expert tips and trends to grow smarter with Bitsframe
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:max-w-[1100px] max-w-xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-2xl backdrop-blur-3xl shadow-black hover:shadow-xl transition-shadow duration-300 p-4 border-white/20 border-s border-t gradient-line  "
          >                  
            <div className="relative w-full h-48 bg-[#1A1A1A] rounded-lg mb-4">
              {/* <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover rounded-lg"
              /> */}
            </div>

            <p className="text-xs text-gray2 mb-1">{blog.category}</p>
            <h3 className="md:text-lg text-sm font-semibold leading-snug mb-3 text-gray">
              {blog.title}
            </h3>

            <ul className="md:text-sm text-[9px] text-gray2 mb-4 list-disc list-inside space-y-1">
              {blog.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <button className="md:px-4 md:py-2 px-2 py-1 text-sm rounded-md border border-gray text-white hover:bg-white/5 bg-white/10 transition">
              Read Now →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
