'use client';

import Image from 'next/image';

const MissionTrust = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-24">
        <div className="mt-8 mb-16 ">
            <Image
              src="/96.png" // replace with your actual path
              alt="Our Mission"
              width={100}
              height={100}
              className="object-contain w-full h-auto rounded-lg shadow-lg " // Adjust size for smaller screens
            />
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Our Mission Card */}
        <div className="bg-[#111111] p-8 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-sm leading-relaxed text-white/80">
              We aim to empower businesses to thrive through innovative and systematic<strong className='text-white'> IT solutions</strong>.
              From cybersecurity to UI/UX, we strive to deliver tools that solve real challenges and fuel growth,
              all while keeping things affordable and collaborative.
            </p>
          </div>
          <div className="mt-8">
            <Image
              src="/mission.png" // replace with your actual path
              alt="Our Mission"
              width={200}
              height={200}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

        {/* Why Trust Us Card */}
        <div className="bg-[#111111] p-8 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Why Trust Us</h2>
            <p className="text-sm leading-relaxed text-white/80">
              We are certified in AWS and ISO 27001, and we bring proven expertise to every IT solution we deliver.
              Trusted by 22+ international partners, we have completed 50+ projects with a 95% client satisfaction rate.
              We are a group of professionals driven by precision and a commitment to excellence, helping businesses
              scale securely and efficiently in a fast-changing digital landscape.
            </p>
          </div>
          <div className="mt-8 mb-24">
            <Image
              src="/trust.png" // replace with your actual path
              alt="Why Trust Us"
              width={200}
              height={200}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionTrust;
