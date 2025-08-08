"use client";

import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const timingOptions = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM"];
const timezoneOptions = [
  "Karachi, Pakistan (GMT+5)",
  "Dubai, UAE (GMT+4)",
  "London, UK (GMT+0)",
  "New York, USA (GMT-5)",
];

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    timing: timingOptions[0],
    timezone: timezoneOptions[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white px-4 mt-28">
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 text-white p-6 rounded-lg w-[90%] max-w-md shadow-lg relative"
      >
        <h2 className="text-xl font-semibold mb-2">Book a free consultation</h2>
         <div className="h-[2px] w-full bg-gradient-to-r from-white via-Blue to-darkBlue mb-6" />

        {/* Email */}
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="w-full p-3 mb-4 bg-black text-white border border-Blue rounded-md focus:outline-none focus:ring-2 focus:ring-Blue placeholder-gray"
          required
        />

        {/* Phone Number */}
        <label className="block mb-1 font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter Phone Number"
          className="w-full p-3 mb-4 bg-black text-white border border-Blue rounded-md focus:outline-none focus:ring-2 focus:ring-Blue placeholder-gray"
          required
        />

        {/* Timing */}
        <label className="block mb-1 font-medium">Timing</label>
        <Listbox
          value={formData.timing}
          onChange={(value) => setFormData({ ...formData, timing: value })}
        >
          <div className="relative mb-4 rounded-md border border-Blue">
            <ListboxButton className="w-full cursor-pointer rounded-md bg-black border border-Blue py-3 pl-4 pr-10 text-left text-white focus:outline-none focus:ring-2 focus:ring-Blue">
              {formData.timing}
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronUpDownIcon className="h-5 w-5 text-white" />
              </span>
            </ListboxButton>
            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-black border border-Blue py-1 text-white shadow-lg focus:outline-none z-10">
              {timingOptions.map((time, index) => (
                <ListboxOption
                  key={index}
                  value={time}
                  className={({  focus, selected }) =>
                    `relative cursor-pointer select-none py-2 pl-4 pr-10 ${
                       focus || selected ? "bg-Blue text-white" : "text-white"
                    }`
                  }
                >
                  {time}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>

        {/* Time Zone */}
        <label className="block mb-1 font-medium">Time Zone</label>
        <Listbox
          value={formData.timezone}
          onChange={(value) => setFormData({ ...formData, timezone: value })}
        >
          <div className="relative mb-6 rounded-md border border-Blue">
            <ListboxButton className="w-full  rounded-md bg-black border border-Blue py-3 pl-4 pr-10 text-left text-white focus:outline-none focus:ring-2 focus:ring-Blue">
              {formData.timezone}
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 ">
                <ChevronUpDownIcon className="h-5 w-5 text-white" />
              </span>
            </ListboxButton>
            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-black border border-Blue py-1 text-white shadow-lg focus:outline-none z-10">
              {timezoneOptions.map((zone, index) => (
                <ListboxOption
                  key={index}
                  value={zone}
                  className={({  focus, selected }) =>
                    `relative cursor-pointer select-none py-2 pl-4 pr-10 ${
                       focus || selected ? "bg-Blue text-white" : "text-white"
                    }`
                  }
                >
                  {zone}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-Blue hover:bg-white hover:text-black text-white px-6 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
