
import Image from "next/image";

const services = [
  {
    imgSrc: "/icons/ai2.png",
    title: "Predictive Analysis",
    description: "Forecasts trends to stay ahead and optimise strategic planning.",
  },
  {
    imgSrc: "/Vector.svg",
    title: "Smart Automation",
    description: "Stramline tasks with AI workflows.",
  },
  {
    imgSrc: "/icons/ai4.png",
    title: "Custom Models",
    description: "Fine-tuned specifically for your data, tasks and business goals.",
  },
  {
    imgSrc: "/icons/ai3.png",
    title: "Seamless Integration",
    description: "Faster implementation of the existing system without disruption.",
  },
];

const AIServiceSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-16 text-center">
      <div className="mb-6">
        <button className="bg-Blue px-4 py-1 rounded-full text-sm font-medium">
          Features
        </button>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Our AI Driven Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#0f0f0f] rounded-lg p-6 flex flex-col items-start hover:shadow-xl transition"
          >
            <div className="mb-2">
              <div className="w-12 h-12 bg-Blue rounded-full flex items-center justify-center">
                <Image src={service.imgSrc} alt={service.title} width={30} height={30} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIServiceSection;
