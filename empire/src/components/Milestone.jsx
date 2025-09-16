
import React from "react";

// Import all images
import year2026 from "/image/2026-1.png";
import year2027 from "/image/2027.png";
import year2028 from "/image/2028.png";
import year2029 from "/image/2029.png";
import year2030 from "/image/2030.png";
import arrowImg from "/image/arrow.png"; // arrow between years

const milestonesData = [
  {
    year: "2026",
    img: year2026,
    title: "Newtro-X Project Kickoff",
    description: [
      "Launch of Newtro-X, our base segment brand.",
      "Introducing the world's first non-expiry water bottle.",
    ],
  },
  {
    year: "2027",
    img: year2027,
    title: "Our Home Care Product Expansion",
    description: ["Launch of Colin, Dish Wash, Toilet Cleaner, and Floor Cleaner."],
  },
  {
    year: "2028",
    img: year2028,
    title: "Our Vehicle Care Segment Launch",
    description: ["Introduction of DM Water (battery), Coolant, and DEF Water."],
  },
  {
    year: "2029",
    img: year2029,
    title: "Black Plum Premium Segment",
    description: [
      "Launch of our premium brand with enhanced minerals and benefits.",
      "Premium glass bottle packaging, professional branding.",
    ],
  },
  {
    year: "2030",
    img: year2030,
    title: "Java-X Major Achievement",
    description: [
      "Launch of our highest premium segment brand with top enhancements.",
      "Super premium glass bottle, elite branding.",
    ],
  },
];

const Milestone = () => {
  return (
    <div className="text-primary py-16 px-4">
      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="flex items-center mb-12">
          <div className="text-5xl mr-4">🏆</div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Our{" "}
            <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">
              Milestone
            </span>
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="flex justify-between mb-24">
            <div className="w-1/3 invisible"></div>
            <div className="w-1/3 px-4">
              <h3 className="text-xl font-bold">
                <span className="text-primary" style={{ color: "#14089e" }}>Black Plum</span>{" "}
                <span className="text-black">Premium Segment</span>
              </h3>
              <div className="mt-2">
                <p className="text-sm text-black md:text-base">
                  Launch of Colin, Dish Wash, Toilet Cleaner, and Floor Cleaner.
                </p>
              </div>
            </div>
            <div className="w-1/3 px-4">
              <h3 className="text-xl font-bold">
                <span className="text-primary" style={{ color: "#14089e" }}>Black Plum</span>{" "}
                <span className="text-black">Premium Segment</span>
              </h3>
              <div className="mt-2">
                <p className="text-sm md:text-base text-black">
                  Launch of our premium brand with enhanced minerals and benefits.
                </p>
                <p className="text-sm md:text-base text-black">
                  Premium glass bottle packaging, professional branding.
                </p>
              </div>
            </div>
          </div>

          {/* Year Timeline */}
          <div className="flex justify-center mb-16 gap-4 sm:gap-6 md:gap-10">
            {milestonesData.map((milestone, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="relative flex items-center">
                  <div className="w-40 h-40 sm:w-40 sm:h-40 flex items-center justify-center rounded-lg text-2xl sm:text-3xl font-bold text-primary overflow-hidden">
                    <img
                      src={milestone.img}
                      alt={`Year ${milestone.year}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {index !== milestonesData.length - 1 && (
                    <div className="ml-2 sm:ml-4 flex items-center">
                      <img src={arrowImg} alt="Arrow" className="w-10 h-10" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Details */}
          <div className="flex justify-between">
            {milestonesData.map((milestone, index) => (
              <div key={index} className="w-1/3 px-4">
                <h3 className="text-xl font-bold">
                  {milestone.title.includes("Newtro-X") ? (
                    <>
                      <span className="text-primary" style={{ color: "#14089e" }}>Newtro-X</span>{" "}
                      <span className="text-black">Project Kickoff</span>
                    </>
                  ) : milestone.title.includes("Vehicle") ? (
                    <>
                      <span className="text-primary" style={{ color: "#14089e" }}>Our </span>
                      <span className="text-primary" style={{ color: "#14089e" }}>Vehicle Care</span>{" "}
                      <span className="text-black">Segment Launch</span>
                    </>
                  ) : milestone.title.includes("Home Care") ? (
                    <>
                      <span className="text-primary" style={{ color: "#14089e" }}>Our </span>
                      <span className="text-primary" style={{ color: "#14089e" }}>Home Care</span>{" "}
                      <span className="text-black" >Product Expansion</span>
                    </>
                  ) : milestone.title.includes("Black Plum") ? (
                    <>
                      <span className="text-primary" style={{ color: "#14089e" }}>Black Plum</span>{" "}
                      <span className="text-black">Premium Segment</span>
                    </>
                  ) : (
                    <>
                      <span className="text-primary" style={{ color: "#14089e" }}>Java-X</span>{" "}
                      <span className="text-black">Major Achievement</span>
                    </>
                  )}
                </h3>
                <div className="mt-2">
                  {milestone.description.map((desc, idx) => (
                    <p key={idx} className="text-sm md:text-base text-black">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          {milestonesData.map((milestone, index) => (
            <div key={index} className="mb-10 pb-10 border-b border-gray-200 last:border-0">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white border-2 border-primary flex items-center justify-center rounded-lg text-lg font-bold text-primary shadow-md mr-4 overflow-hidden">
                  <img
                    src={milestone.img}
                    alt={`Year ${milestone.year}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold">{milestone.title}</h3>
              </div>
              <div className="pl-20">
                {milestone.description.map((desc, idx) => (
                  <p key={idx} className="text-sm text-black mb-2">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Milestone;

