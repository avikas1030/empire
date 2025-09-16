
import React from "react";

const Inovation = () => {
  const steps = [1, 2, 3, 4, 5, 6];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-center text-3xl md:text-5xl text-primary font-bold mb-12">
          Competitive
          <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">
            Advantage
          </span>
          Beyond The Ordinary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <div className="text-4xl mb-4">
              <img
                alt="World's first non-expiry water"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                src="/image/earth.png"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">
              World's first non-expiry water
            </h3>
            <p className="text-black text-sm">
              Our revolutionary water that never expires, ensuring unmatched
              quality and freshness for decades, making it a unique choice
              in the modern world today.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="text-4xl mb-4">
              <img
                alt="Health benefits"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                src="/image/heart.png"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Health benefits</h3>
            <p className="text-black text-sm">
              Unique water formulation helps prevent major health risks such
              as cancer and heart attacks while boosting the immune system
              for long-term vitality and daily wellness.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="text-4xl mb-4">
              <img
                alt="Premium mineral enrichment"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                src="/image/star1.png"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">
              Premium mineral enrichment
            </h3>
            <p className="text-black text-sm">
              Infused with essential minerals Newtro-X provides superior
              nourishment compared to regular bottled water, promoting
              overall health and energy all day long every day.
            </p>
          </div>
        </div>

        {/* Step Bar */}
        <div className="hidden md:flex items-center justify-between mb-12 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Circle */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#14089e] font-bold border-2 border-[#14089e] z-10 relative">
                {step}
              </div>

              {/* Line */}
              {index !== steps.length - 1 && (
                <div className="flex-1 h-1 bg-[#14089e] z-0 mx-2 mt-[5px]"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-0">
          <div className="flex flex-col items-center text-center p-4">
            <div className="text-4xl mb-4">
              <img
                alt="Bacteria free"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                src="/image/right1.png"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Bacteria free</h3>
            <p className="text-black text-sm">
              Ensure that never release microplastic or harmful bacteria,
              keeping the water clean and perfectly safe for everyone,
              anywhere, with consistent purity at every single sip.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="text-4xl mb-4">
              <img
                alt="Technology"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                src="/image/setting1.png"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Technology</h3>
            <p className="text-black text-sm">
              Utilization of cutting edge - ultra purification and
              preservation methods to maintain water qualities, offering
              unmatched performance and innovation in safe hydration.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="text-4xl mb-4">
              <img
                alt="Preservation"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                src="/image/beaker1.png"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Preservation</h3>
            <p className="text-black text-sm">
              With no expiry date consumers can store the product
              indefinitely without the risk of contamination or quality
              degradation reducing frequent repurcesing cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inovation;
