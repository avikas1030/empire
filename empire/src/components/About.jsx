// import React from "react";

// const About = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center gap-10">
//           {/* Left Content */}
//           <div className="md:w-3/5 p-8 md:p-12 lg:px-16">
//             <h2 className="text-6xl text-primary mb-8">
//               About
//               <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">
//                 Us
//               </span>
//             </h2>
            
//             <p className="text-secondary text-lg md:text-xl mb-6 leading-relaxed">
//               Empire Blue Pvt. Ltd. Established July 2025 Based on Chhindwara Madhya Pradesh is a pioneering company in the bottled water industry recognized as the world's first manufacturer of non-expiry bacteria free water bottles.
//             </p>
            
//             <p className="text-secondary text-lg md:text-xl mb-6 leading-relaxed">
//               Our mission is to revolutionize the way people consume water by ensuring purity, longevity, and health benefits in every drop.
//             </p>
            
//             <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg font-medium mt-6 flex items-center gap-2 transition-all duration-300">
//               <span>Learn More</span>
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M5 12H19M19 12L12 5M19 12L12 19"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Right Image */}
//           <div className="md:w-1/2 w-full h-[600px] md:h-[450px] relative shadow-xl border-8 border-white rounded-4xl flex items-center justify-center">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <img
//                 src="/image/about.jpeg"
//                 alt="Empire Blue Headquarters"
//                 className="object-cover rounded-3xl w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="md:w-3/5 p-8 md:p-12 lg:px-16">
            <h2 className="text-6xl text-primary mb-8">
              About
              <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">
                Us
              </span>
            </h2>
            
            <p className="text-secondary text-lg md:text-xl mb-6 leading-relaxed">
              Empire Blue Pvt. Ltd. Established July 2025 Based on Chhindwara Madhya Pradesh is a pioneering company in the bottled water industry recognized as the world's first manufacturer of non-expiry bacteria free water bottles.
            </p>
            
            <p className="text-secondary text-lg md:text-xl mb-6 leading-relaxed">
              Our mission is to revolutionize the way people consume water by ensuring purity, longevity, and health benefits in every drop.
            </p>
            
            <div className="flex items-center gap-4 mt-6">
              {/* New Button */}
              <button className="bg-[#14089e] hover:bg-[#0f077c] text-white px-8 py-3 rounded-full text-lg font-medium flex items-center gap-2 transition-all duration-300">
                <span>Learn More</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Learn More Button with Outline */}
              {/* <button className="border-2 border-[#14089e] text-[#14089e] hover:bg-[#14089e] hover:text-white px-8 py-3 rounded-full text-lg font-medium flex items-center gap-2 transition-all duration-300">
                <span>Learn More</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 w-full h-[600px] md:h-[450px] relative shadow-xl border-8 border-white rounded-4xl flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/image/about.jpeg"
                alt="Empire Blue Headquarters"
                className="object-cover rounded-3xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
