    "use client";
import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";

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
    <section
      className="relative py-14 px-6 md:px-16 bg-no-repeat bg-center bg-cover min-h-screen"
      style={{
        backgroundImage: "url('/Hstats.png')",
      }}
    >
      <div className="relative z-10 max-w-5xl mx-auto ml-6">
        <p className="text-sm md:text-lg font-light mb-4 text-gray1">
          Struggling with an unresolved tech challenge? Or want to transform your ideas into reality?
        </p>
        <p className="text-sm md:text-lg font-light mb-4 text-gray1">
          We hear you! Let&apos;s collaborate to find <span className="text-white font-medium">managed IT solutions</span> for your business IT queries. Our team is ready to craft custom apps, AI solutions, or secure Shopify stores that drive your success.
        </p>
        <p className="text-sm md:text-lg font-light mb-4 text-gray1">
          Complete the form or send us an email.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
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
          <div className="max-w-2xl md:max-w-6xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Send a Message</h2>
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
 
