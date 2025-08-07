    "use client";
import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

const StatsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id.toLowerCase()]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    
 <section className="relative bg-black text-white overflow-hidden min-h-[1010px] md:min-h-[750px] py-14 px-6 md:px-16">

<div
  className="absolute inset-0 bg-right -ml-20 bg-cover z-0 max-w-[90%] w-full sm:max-w-md md:max-w-lg lg:max-w-xl aspect-[3/4] mx-auto mt-16 rotated-image shadow-xl"
  style={{
    backgroundImage: "url('/info.png')",
  }}
/>

  {/* Moving image (floating or sliding) */}
  <Image
    src="/info.svg"
    alt="wave"
    layout="fill"
    objectFit="cover"
    className="absolute left-0  w-12 h-auto z-10 opacity-90 -mt-56 md:-mt-40 lg:-mt-40 xl:-mt-40 2xl:-mt-40 transition-transform duration-500 transform "
  />
 
      <div className=" max-w-7xl mx-auto px-4 py-7 absolute inset-0  z-0">
        <p className="text-xs md:text-lg font-light mb-4 text-gray1 ">
          Struggling with an unresolved tech challenge? Or want to transform your ideas into reality?
        </p>
        <p className="text-xs md:text-lg font-light mb-4 text-gray1">
          We hear you! Let&apos;s collaborate to find <span className="text-white font-medium">managed IT solutions</span> for your business IT queries. Our team is ready to craft custom apps, AI solutions, or secure Shopify stores that drive your success.
        </p>
        <p className="text-xs md:text-lg font-light mb-4 text-gray1">
          Complete the form or send us an email.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl  md:max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="md:space-y-6 space-y-3">
            <h2 className="md:text-2xl text-lg font-bold mb-4 text-white">Contact Info</h2>
            <div className="flex items-center gap-4 text-gray1">
              <button className="border border-white p-1 rounded-full bg-white/10 hover:bg-white backdrop-blur-md shadow-md transition-all duration-300">
                <Mail className="hover:text-black text-white w-4 h-4" />
              </button>
              <span className="md:text-base text-sm">hey@bitsframe.com</span>
            </div>
            <div className="flex items-center gap-4 text-white/80">
              <button className="border border-white p-1 rounded-full bg-white/10 hover:bg-white backdrop-blur-md shadow-md transition-all duration-300">
                <Phone className="hover:text-black text-white w-4 h-4" />
              </button>
              <span className="md:text-base text-sm">+92 336 2042506</span>
            </div>
          </div>
         

          {/* Contact Form */}
          <div className="max-w-2xl md:max-w-6xl bg-black p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 md:text-2xl text-white">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-white">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/15 text-white p-3 rounded outline-none border border-white w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-white">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/15 text-white p-3 rounded outline-none border border-white w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block mb-1 text-white">Company</label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/15 text-white p-3 rounded outline-none border border-white w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1 text-white">Phone</label>
                  <input
                    id="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/15 text-white p-3 rounded outline-none border border-white w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-white">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  className="w-full bg-white/15 text-white border border-white p-3 rounded outline-none"
                />
              </div>
              
              <button 
  type="submit"
  className="bg-Blue text-white md:px-6 md:py-3 px-3 py-1 font-medium hover:bg-Blue flex items-center gap-2 border border-gray rounded-full ml-24 md:ml-0"
  aria-label="Send message to the team"
>
  Send Message
</button>

            </form>
          </div>
        
        </div>
      </div>
      
    </section>
  );
};

export default StatsSection;
 
