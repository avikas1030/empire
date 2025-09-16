import React from 'react';

const Technology = () => {
  return (
    <section className="py-18 relative z-10 -mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E4E9ED] rounded-3xl shadow-xl p-6 sm:p-10 border-2 border-white relative">
          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 items-start">
            <div className="md:col-span-2 w-full relative z-20 flex items-center justify-center">
              <div className="w-full max-w-md">
                <img
                  alt="Empire Blue Water Can"
                  loading="lazy"
                  width="400"
                  height="400"
                  decoding="async"
                  data-nimg="1"
                  className="w-full h-auto object-contain"
                  src="/image/detail.png" // Make sure to place this image inside public/statics/assets/image
                />
              </div>
            </div>
            <div className="md:col-span-3 w-full relative z-20 mb-16 md:mb-0">
              <div>
                <h3 className="text-2xl md:text-4xl font-[''] text-primary mb-4">
                  Empire Blue Pvt. Ltd.
                </h3>
                <p className="text-secondary text-md sm:text-lg leading-relaxed">
                  Our revolutionary water technology is a groundbreaking invention that eliminates the expiration date on bottled water. By using a unique combination of innovative ingredients, we prevent reactions in bottled water—especially when exposed to sunlight—that produce microplastics and harmful bacteria. This addresses major health risks associated with bottled water, including diseases like cancer and heart disease. Our innovation not only maintains water purity and freshness for life, but also provides health benefits such as cancer prevention, heart attack protection, and boosted immunity. With a global reach, we aim to transform the water industry and provide safe drinking water to the billions of people who currently lack access.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#E4E9ED] rounded-3xl shadow-xl p-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
              <img
                alt="Revolutionary Technology"
                loading="lazy"
                width="28"
                height="28"
                decoding="async"
                data-nimg="1"
                src="/image/hMfF7DBSNsNU.svg" // Make sure to place this icon inside public/statics/icons
              />
            </div>
            <div className="mt-4">
              <h4 className="text-primary text-xl font-semibold mb-3">
                Revolutionary Technology
              </h4>
              <p className="text-secondary text-base leading-relaxed">
                Groundbreaking invention that eliminates the expiration date on bottled water
              </p>
            </div>
          </div>
          <div className="bg-[#E4E9ED] rounded-3xl shadow-xl p-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
              <img
                alt="Safe & Pure"
                loading="lazy"
                width="28"
                height="28"
                decoding="async"
                data-nimg="1"
                src="/image/V2yofpWJ6z7m.svg" // Make sure to place this icon inside public/statics/icons
              />
            </div>
            <div className="mt-4">
              <h4 className="text-primary text-xl font-semibold mb-3">
                Safe & Pure
              </h4>
              <p className="text-secondary text-base leading-relaxed">
                Ensuring lifelong freshness and health through advanced purification
              </p>
            </div>
          </div>
          <div className="bg-[#E4E9ED] rounded-3xl shadow-xl p-6 items-start md:col-span-1">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <img
                alt="Sustainable Solution"
                loading="lazy"
                width="28"
                height="28"
                decoding="async"
                data-nimg="1"
                src="/image/L7EECWIQG9Lf.svg" // Make sure to place this icon inside public/statics/icons
              />
            </div>
            <div className="mt-4">
              <h4 className="text-primary text-xl font-semibold mb-3">
                Sustainable Solution
              </h4>
              <p className="text-secondary text-base leading-relaxed">
                Eco-friendly approach to water preservation and distribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;