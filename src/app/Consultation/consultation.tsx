
'use client';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react';
import { useState } from 'react';

const timings = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
];

export default function ConsultationModal() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timing, setTiming] = useState(timings[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, phone, timing });
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white/5 text-white p-6 rounded-lg w-[90%] max-w-md shadow-lg relative">
        <div className="inline-block">
          <h2 className="text-lg font-semibold">Book a free consultation</h2>
          <div className="h-[2px] w-full bg-gradient-to-r from-white via-Blue to-darkBlue mb-3" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Type Here...."
              className="w-full px-4 py-2 rounded-md border border-Blue bg-black text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Type Here...."
              className="w-full px-4 py-2 rounded-md border border-Blue bg-black text-white"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="timing" className="block mb-1">Timing</label>
            <Listbox value={timing} onChange={setTiming}>
              <div className="relative">
                <ListboxButton className="w-full px-4 py-2 rounded-md border border-Blue bg-black text-white ">
                  {timing}
                </ListboxButton>
               
                <ListboxOptions className="absolute mt-1 w-full bg-Red  border border-Blue rounded-md z-10 max-h-60 overflow-auto">
  {timings.map((time) => (
    <ListboxOption
      key={time}
      value={time}
      className="px-4 py-2 cursor-pointer text-white ui-active:bg-Blue ui-active:text-white"
    >
      {time}
    </ListboxOption>
  ))}
</ListboxOptions>

              </div>
            </Listbox>
          </div>

          <button
            type="submit"
            className="bg-Blue hover:bg-white hover:text-black text-white px-6 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
