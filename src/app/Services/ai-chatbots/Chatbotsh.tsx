// components/Hero.tsx
// import Link from "next/link";
// import { Award } from "lucide-react";

const Hui = () => {
  return (
    <section className="bg-black text-white md:px-6 md:py-20 px-3 py-5 text-center md:text-left relative"
    style={{
        backgroundImage: "url('/about.png')", // Optional background wave
      }} >

    

      <div className="max-w-5xl mx-auto  ">
        <div className="mb-8 flex justify-center md:justify-start">
       <div className=" inline-flex items-center gap-2 md:px-4 md:py-1.5 px-2 py-2 rounded-full bg-Blue text-white text-sm font-medium shadow-sm">
      
  Our Solution
    </div>
    </div>
<h1 className="md:text-3xl text-xl fount-semibold md:text-justify">
Chatbot Development Services </h1>
        <p className="text-gray2 md:text-lg text-sm mb-8 ">
         Get AI-powered chatbots to enhance user experience and interactions
        </p>

        {/* <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link href="/contact-us">
            <button className="bg-white text-black md:px-6 md:py-3 px-3 py-1 rounded-lg font-medium hover:bg-Blue">
              Contact Us →
            </button>
          </Link>
          
        </div> */}
      </div>
    </section>
  );
};

export default Hui;