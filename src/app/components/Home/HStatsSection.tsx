


"use client";
import Image from "next/image";

const SmartITSolutions = () => {
  return (
    <section
      className="md:py-10 py-7 px-6 md:px-20 relative text-white bg-no-repeat bg-center bg-cover h-screen"
      style={{ backgroundImage: "url('/Hstats.png')" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-4">
          <Image src="/icons/Vector (3).png" alt="Vector" width={40} height={40} />
          <div>
            <h2 className="text-xl md:text-4xl font-bold mb-2">
              How Do We Deliver Smart <br /> IT Solutions?
            </h2>
            <p className="text-white/80 mb-10 md:max-w-2xl md:text-base text-xs">
              As your trusted <span className="font-semibold text-white">IT services provider</span>, we
              combine cutting-edge technology with 8+ years of expertise to:
            </p>

            {/* Features Section */}
            <div className="space-y-5 ">
              <div className="flex items-start gap-2">
                <Image src="/icons/Group (1).png" alt="Group" width={40} height={40} />
                <div>
                  <h3 className="md:text-xl text-sm font-semibold">
                    Automate Operations with Managed IT Solutions
                  </h3>
                  <p className="text-white/80 md:text-base text-xs">
                    Streamline workflows using AI-driven tools tailored to your enterprise needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Image src="/icons/Group.png" alt="Group" width={40} height={40} />
                <div>
                  <h3 className="md:text-xl text-sm font-semibold">
                    Provide 24/7 IT Services Provider Monitoring
                  </h3>
                  <p className="text-white/80 md:text-base text-xs">
                    Proactively safeguard networks and data with security solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Image src="/icons/Vector (2).png" alt="Deploy" width={40} height={40} />
                <div>
                  <h3 className="md:text-xl text-sm font-semibold">Deploy Smart IT Solutions</h3>
                  <p className="text-white/80 md:text-base text-xs">
                    We cover every tech aspect, from custom AI applications to cloud architecture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Image src="/icons/Vector (1).png" alt="Transform" width={40} height={40} />
                <div>
                  <h3 className="md:text-xl text-sm font-semibold">Transform Your Digital Journey</h3>
                  <p className="text-white/80 md:text-base text-xs">
                    Our certified <span className="font-semibold text-white ">IT services providers</span>{' '}
                    deliver strategic guidance and technical execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-2 text-center mt-10">
              <div className="md:mr-0 mr-10">
                <p className="md:text-3xl text-lg font-bold">50+</p>
                <p className="text-white/80 md:text-xl text-sm">Projects Delivered</p>
              </div>
              <div>
                <p className="md:text-3xl text-lg font-bold ">22+</p>
                <p className="text-white/80 md:text-xl text-sm">Trusted Partners</p>
              </div>
              <div>
                <p className="md:text-3xl text-lg font-bold ">04+</p>
                <p className="text-white/80 md:text-xl text-sm">Years of Innovation</p>
              </div>
              <div>
                <p className="md:text-3xl font-bold ">95%</p>
                <p className="text-white/80 md:text-xl text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartITSolutions;
