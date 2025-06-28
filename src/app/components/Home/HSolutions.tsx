'use client';
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    id: "01",
    title: "CyberSecurity",
    desc: "Protect your business with robust security solutions, from threat detection to compliance, keeping your data and users safe.",
  },
  {
    id: "02",
    title: "Custom Chatbots",
    desc: "Engage your customers 24/7 with AI-powered chatbots tailored to your brand, boosting satisfaction and efficiency.",
  },
  {
    id: "03",
    title: "Custom Web Development",
    desc: "Launch stunning, high-performance websites that captivate users and drive results, built to your exact specifications.",
  },
  {
    id: "04",
    title: "Custom App Solution",
    desc: "Turn your idea into a powerful app with our end-to-end mobile and web app development, designed for impact.",
  },
  {
    id: "05",
    title: "Artificial Intelligence",
    desc: "Harness AI to transform your business, from predictive analytics to intelligent automation, tailored to your goals.",
  },
  {
    id: "06",
    title: "Business Consultation",
    desc: "Get strategic insights to grow smarter. Our experts guide you through tech decisions to maximize your success.",
  },
   {
    id: "07",
    title: "Cloud Architecture",
    desc: "Build scalable, secure cloud systems that keep your business agile and ready for the future.",
  },
   {
    id: "08",
    title: "Staff Augmentation",
    desc: "Scale your team with our skilled developers and designers, seamlessly integrated to accelerate your projects.",
  },
   {
    id: "09",
    title: "Shopify",
    desc: "Create a standout e-commerce store with our Shopify expertise, from design to optimization, to boost your sales.",
  },
   {
    id: "10",
    title: "UI/UX",
    desc: "Craft intuitive, beautiful interfaces that delight users and keep them coming back for more.",
  },
   
];

const Solutions = () => {
  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Solutions That Drive Your Success
          </h2>
          <p className="text-gray2 text-lg">
            Explore our full range of services, crafted to meet your business needs and fuel growth.
          </p>
        </div>

        <div className="space-y-8">
          {solutions.map((solution) => (
            <div key={solution.id} className="flex items-start justify-between border-b border-gray/30 pb-6">
              <div className="flex gap-4">
                <div className="text-white text-lg font-medium w-10">{solution.id}</div>
                <div>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="text-gray2 max-w-xl text-sm mt-1">{solution.desc}</p>
                </div>
              </div>
              <div className="mt-2">
                <button className="rounded-full border border-white w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
