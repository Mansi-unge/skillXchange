import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center select-none cursor-pointer">
      {/* "skill" part */}
      <span
        className="text-white text-3xl font-[Poppins] tracking-wide transition-transform duration-300 hover:scale-105"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        skill
      </span>

      {/* "X" part with gradient */}
      <span
        className="text-6xl font-extrabold  -mx-2 leading-none transition-transform duration-300 hover:rotate-6 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(to right, #8b5cf6, #6366f1, #3b82f6)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        X
      </span>

      {/* "change" part */}
      <span
        className="text-white text-3xl font-[Poppins] tracking-wide transition-transform duration-300 hover:scale-105"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        change
      </span>
    </div>
  );
};

export default Logo;
