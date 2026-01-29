import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#020b2d] to-[#020617] text-white flex flex-col justify-center items-center sm:items-start py-24 sm:py-28 lg:py-20 overflow-visible">
      {/* CONTENT WRAPPER */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            {/* HEADLINE */}
            <h1 className="font-['Orbitron'] font-extrabold leading-snug tracking-tight text-[clamp(1.8rem,6vw,4rem)] sm:text-[clamp(2.2rem,5vw,5.5rem)] lg:text-[clamp(3rem,4vw,7rem)] break-words">
              Trade Skills <br />
              <span className="text-blue-400">Not Money</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-300 max-w-full lg:max-w-lg mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
              Learn what you need by teaching what you know. Skill-Barter
              connects students through smart skill exchanges — no payments,
              just knowledge, collaboration, and growth.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 font-medium hover:scale-105 transition-transform duration-300">
                Join SkillXchange
              </button>
              <button className="px-8 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-colors duration-300">
                How It Works
              </button>
            </div>

            {/* STATS */}
            <div className="flex justify-center lg:justify-start items-center gap-6 sm:gap-10 pt-6 sm:pt-8 flex-wrap">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold">1000+</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Active Traders</p>
              </div>

              {/* Vertical Separator */}
              <div className="w-px h-12 bg-white mx-4 hidden sm:block"></div>

              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold">500+</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Skills Exchanged</p>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/hero_img.png"
              alt="Skill Exchange Illustration"
              className="
                w-full
                max-w-[400px]
                sm:max-w-[600px]
                md:max-w-[600px]
                lg:max-w-[800px]
                xl:max-w-[1200px]
                2xl:max-w-[1200px]
                object-contain
                animate-[float_6s_ease-in-out_infinite]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
