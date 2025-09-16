// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="flex items-start py-4 sm:py-8 lg:py-12 overflow-hidden">
//       <div className="mx-auto w-full relative z-5">
//         <div className="max-w-6xl mx-auto relative p-4">
//           <div className="rounded-[20px] sm:rounded-[40px] relative overflow-hidden z-5 shadow-[2px_3px_40px_8px_rgba(0,84,231,0.18),-1px_-1px_6px_0_rgba(0,84,231,0.06)] mt-1 sm:mt-3 lg:mt-4 ml-0">
//             <div className="flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 pt-4 sm:pt-8 lg:pt-12 pb-8 sm:pb-16 lg:pb-24 text-center lg:text-left bg-[#E4E9ED]">
              
//               {/* Left Image */}
//               <div className="flex-1 flex justify-center lg:justify-start items-center relative z-10 mb-6 lg:mb-0 order-1">
//                 <div className="relative w-[280px] sm:w-[350px] lg:w-[500px] aspect-[400/380]">
//                   <img
//                     src="/image/can1.png"
//                     alt="Empire Blue Can"
//                     className="object-contain absolute inset-0 w-full h-full"
//                   />
//                 </div>
//               </div>

//               {/* Right Content */}
//               <div className="flex-1 w-full lg:max-w-[60%] z-10 mb-4 lg:mb-0 order-2">
//                 <div className="flex justify-center lg:justify-start mb-3 sm:mb-2 lg:mb-2">
//                   <div className="relative w-[240px] sm:w-[280px] lg:w-[320px] h-[60px] sm:h-[70px] lg:h-[90px]">
//                     <img
//                       src="/image/image.png"
//                       alt="Empire Blue Logo"
//                       className="object-contain absolute inset-0 w-full h-full"
//                     />
//                   </div>
//                 </div>

//                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">
//                   <span className="text-secondary">World's </span>
//                   <span className="bg-primary text-transparent bg-clip-text">
//                     First Non-Expiry
//                   </span>
//                   <span className="text-secondary"> Water</span>
//                 </h1>

//                 <p className="text-secondary text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6 max-w-lg mx-auto leading-relaxed">
//                   Empire Blue Pvt. Ltd. We prioritize health, innovation,
//                   and sustainability. We are committed to setting new
//                   industry standards and providing a safe, reliable, and
//                   beneficial hydration solution for people worldwide.
//                 </p>

//                 <div className="flex flex-col items-center gap-2">
//                   <button
//                     className="bg-primary hover:bg-primary-dark transition-colors text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold mt-2 sm:mt-4 lg:mt-6 w-fit flex items-center gap-2 shadow-[0_6px_24px_rgba(0,84,231,0.25)]"
//                   >
//                     <span>Contact Us</span>
//                     <svg
//                       width="16"
//                       height="16"
//                       className="sm:w-5 sm:h-5"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M5 12H19M19 12L12 5M19 12L12 19"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Bottom Wavy Shape */}
//         <div className="relative w-full -mt-21 sm:-mt-48 pointer-events-none z-25">
//           <svg
//             className="w-full h-[120px] sm:h-[200px] lg:h-[220px]"
//             viewBox="0 0 1440 500"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0"
//               stroke="#fff"
//               strokeWidth="16"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0  L1440,500 L0,500 Z"
//               fill="#D7E0E7"
//               filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))"
//             />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React from "react";

const HeroSection = () => {
  return (
    <section className="flex items-start py-4 sm:py-8 lg:py-12 overflow-hidden">
      <div className="mx-auto w-full relative z-5">
        <div className="max-w-6xl mx-auto relative p-4">
          <div className="rounded-[20px] sm:rounded-[40px] relative overflow-hidden z-5 shadow-[2px_3px_40px_8px_rgba(0,84,231,0.18),-1px_-1px_6px_0_rgba(0,84,231,0.06)] mt-1 sm:mt-3 lg:mt-4 ml-0">
            <div className="flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 pt-4 sm:pt-8 lg:pt-12 pb-8 sm:pb-16 lg:pb-24 text-center lg:text-left bg-[#E4E9ED]">
              
              {/* Left Image */}
              <div className="flex-1 flex justify-center lg:justify-start items-center relative z-10 mb-6 lg:mb-0 order-1">
                <div className="relative w-[280px] sm:w-[350px] lg:w-[500px] aspect-[400/380]">
                  <img
                    src="/image/can1.png"
                    alt="Empire Blue Can"
                    className="object-contain absolute inset-0 w-full h-full"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1 w-full lg:max-w-[60%] z-10 mb-4 lg:mb-0 order-2">
                <div className="flex justify-center lg:justify-start mb-3 sm:mb-2 lg:mb-2">
                  <div className="relative w-[240px] sm:w-[280px] lg:w-[320px] h-[60px] sm:h-[70px] lg:h-[90px]">
                    <img
                      src="/image/image.png"
                      alt="Empire Blue Logo"
                      className="object-contain absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">
                  <span className="text-secondary">World's </span>
                  <span className="bg-primary text-transparent bg-clip-text">
                    First Non-Expiry
                  </span>
                  <span className="text-secondary"> Water</span>
                </h1>

                <p className="text-secondary text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6 max-w-lg mx-auto leading-relaxed">
                  Empire Blue Pvt. Ltd. We prioritize health, innovation,
                  and sustainability. We are committed to setting new
                  industry standards and providing a safe, reliable, and
                  beneficial hydration solution for people worldwide.
                </p>

                <div className="flex flex-col items-center gap-2">
                  <button
                    className="bg-[#14089e] hover:bg-[#0f077c] transition-colors text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold mt-2 sm:mt-4 lg:mt-6 w-fit flex items-center gap-2 shadow-[0_6px_24px_rgba(0,84,231,0.25)]"
                  >
                    <span>Contact Us</span>
                    <svg
                      width="16"
                      height="16"
                      className="sm:w-5 sm:h-5 text-white"
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
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Wavy Shape */}
        <div className="relative w-full -mt-21 sm:-mt-48 pointer-events-none z-25">
          <svg
            className="w-full h-[120px] sm:h-[200px] lg:h-[220px]"
            viewBox="0 0 1440 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0"
              stroke="#fff"
              strokeWidth="16"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0  L1440,500 L0,500 Z"
              fill="#D7E0E7"
              filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
