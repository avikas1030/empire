// import React, { useState } from "react";
// import logo from "/image/logo1.png"; // keep inside public/image

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = ["Home", "About Us", "Service", "Contact"];

//   return (
//     <header className="bg-white sticky top-0 z-50 shadow-sm font-['Open_Sans']">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <a href="/" className="flex flex-col items-start">
//             <img
//               src={logo}
//               alt="Imperial Water"
//               className="w-[200px] h-[45px] object-contain"
//             />
//           </a>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-10">
//             {navLinks.map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
//                 className="text-gray-600 hover:text-[#4284FF] transition-colors relative group text-lg tracking-wide font-semibold"
//               >
//                 {item}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4284FF] group-hover:w-full transition-all duration-300"></span>
//               </a>
//             ))}

//             <a
//               href="/book-now"
//               className="relative flex items-center gap-2 overflow-hidden bg-[#4284FF] text-white px-6 py-2 rounded-full text-lg tracking-wide font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#4284FF] focus:ring-offset-2"
//             >
//               <span className="relative z-10">Book Now</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-4 h-4"
//               >
//                 <path d="M5 12h14"></path>
//                 <path d="m12 5 7 7-7 7"></path>
//               </svg>
//             </a>
//           </nav>

//           {/* Mobile button */}
//           <button
//             className="lg:hidden group p-2"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <div className="relative w-6 h-5">
//               <span className={`absolute left-0 w-full h-0.5 bg-gray-600 transition-all duration-300 top-0 ${
//                 menuOpen ? "rotate-45 top-2" : ""
//               }`}></span>
//               <span className={`absolute left-0 w-full h-0.5 bg-gray-600 top-2 transition-all duration-300 ${
//                 menuOpen ? "opacity-0" : "opacity-100"
//               }`}></span>
//               <span className={`absolute left-0 w-full h-0.5 bg-gray-600 transition-all duration-300 top-4 ${
//                 menuOpen ? "-rotate-45 top-2" : ""
//               }`}></span>
//             </div>
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <div
//           className={`lg:hidden transition-all duration-300 overflow-hidden ${
//             menuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
//           }`}
//         >
//           <div className="py-4 space-y-4">
//             {navLinks.map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
//                 className="block text-gray-600 hover:text-[#4284FF] px-1 py-2 text-lg tracking-wide"
//               >
//                 {item}
//               </a>
//             ))}
//             <a
//               href="/book-now"
//               className="block w-full bg-[#4284FF] text-white px-4 py-2 rounded-xl text-center text-lg tracking-wide hover:bg-[#2563EB] transition-all duration-300 mt-4"
//             >
//               <span className="flex items-center justify-center gap-2">
//                 Book Now
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="w-4 h-4"
//                 >
//                   <path d="M5 12h14"></path>
//                   <path d="m12 5 7 7-7 7"></path>
//                 </svg>
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import logo from "/image/logo1.png"; // keep inside public/image

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About Us", "Service", "Contact"];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm font-['Open_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex flex-col items-start">
            <img
              src={logo}
              alt="Imperial Water"
              className="w-[200px] h-[45px] object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className="text-gray-600 hover:text-[#4284FF] transition-colors relative group text-lg tracking-wide font-semibold"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4284FF] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            <a
              href="/book-now"
              className="relative flex items-center gap-2 overflow-hidden bg-[#14089e] text-white px-6 py-2 rounded-full text-lg tracking-wide font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#14089e] focus:ring-offset-2"
            >
              <span className="relative z-10">Book Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-white"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </nav>

          {/* Mobile button */}
          <button
            className="lg:hidden group p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 w-full h-0.5 bg-gray-600 transition-all duration-300 top-0 ${
                  menuOpen ? "rotate-45 top-2" : ""
                }`}
              ></span>
              <span
                className={`absolute left-0 w-full h-0.5 bg-gray-600 top-2 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute left-0 w-full h-0.5 bg-gray-600 transition-all duration-300 top-4 ${
                  menuOpen ? "-rotate-45 top-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="py-4 space-y-4">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className="block text-gray-600 hover:text-[#4284FF] px-1 py-2 text-lg tracking-wide"
              >
                {item}
              </a>
            ))}
            <a
              href="/book-now"
              className="block w-full bg-[#14089e] text-white px-4 py-2 rounded-xl text-center text-lg tracking-wide hover:bg-[#0f077c] transition-all duration-300 mt-4"
            >
              <span className="flex items-center justify-center gap-2">
                Book Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-white"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
