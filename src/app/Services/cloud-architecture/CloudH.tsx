// components/Hero.tsx

// import { Award } from "lucide-react";

const CloudH = () => {
  return (
    <section className="bg-black text-white md:px-6 md:py-20 px-3 py-10 text-center md:text-left relative md:h-[500px]  overflow-hidden bg-cover bg-center bg-no-repeat md:max-w-full max-w-7xl mx-auto"
    style={{
        backgroundImage: "url('/about.png')", // Optional background wave
      }} >

    

      <div className="max-w-5xl mx-auto  mt-44">
        <div className="mb-8 flex justify-center md:justify-start">
       <div className=" inline-flex items-center gap-2 md:px-4 md:py-1.5 px-2 py-2 rounded-full bg-Blue text-white text-sm font-medium shadow-sm">
      
   Our Solution 
    </div>
    </div>
<h1 className="md:text-3xl text-xl fount-semibold md:text-justify">
Cloud Architecture Services</h1>
        <p className="text-gray2 md:text-lg text-sm mb-8 ">
        Build an effective, agile and protected cloud infrastructure with our cloud consulting services
        </p>

       
      </div>
    </section>
  );
};

export default CloudH;