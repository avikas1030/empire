
import React from "react";

const Milestones = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 mb-16 lg:mb-32">
          {/* Text Content */}
          <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4284FF]/10 to-[#4284FF]/5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-[#4284FF] rounded-full animate-pulse"></div>
              <span className="bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text text-sm font-medium">
                Water Innovation
              </span>
            </div>

            <h2 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8">
              Revolutionizing{" "}
              <span className="relative inline-block mx-2 sm:mx-3">
                <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text whitespace-nowrap">
                  Water
                </span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-[#4284FF]/10 rounded-full -z-0"></div>
              </span>{" "}
              Technology
            </h2>

            <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We're pioneering the future of water technology with our
              groundbreaking innovation that eliminates expiration dates from
              bottled water, ensuring pure and safe drinking water for
              generations to come.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              {/* Explore Technology Button */}
              <button className="w-full sm:w-auto bg-[#14089e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium shadow-md transition-colors duration-300 hover:bg-[#0f0779]">
                Explore Technology
              </button>

              {/* Learn More Button */}
              <button className="w-full sm:w-auto bg-white text-[#14089e] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium flex items-center gap-2 border-2 border-[#14089e] shadow-md">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full max-w-[400px] lg:w-[550px] aspect-square lg:h-[450px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4284FF]/10 via-[#2ECC71]/10 to-transparent rounded-[40px] transform rotate-6 animate-pulse"></div>
            <div className="absolute inset-4 bg-white rounded-[40px] shadow-lg backdrop-blur-xl">
              <div className="relative w-full h-full p-8 sm:p-12">
                <img
                  src="/image/innovation.png"
                  alt="Water drop logo"
                  className="object-cover p-6 sm:p-8 animate-float"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
