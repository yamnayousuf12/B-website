// components/ContactForm/ContactForm.tsx
"use client";

import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-2xl md:max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Send a Message</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-white/15 text-white p-3 rounded outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-white/15 text-white p-3 rounded outline-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Company"
            className="bg-white/15 text-white p-3 rounded outline-none"
          />
          <input
            type="text"
            placeholder="Phone"
            className="bg-white/15 text-white p-3 rounded outline-none"
          />
        </div>
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full bg-white/15 text-white p-3 rounded outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
