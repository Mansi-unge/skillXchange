const Header = () => {
  return (
    <header className="w-full h-[70px] bg-[#020617] flex items-center">
      <div className="max-w-[1200px] w-full mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white text-xl font-semibold">
          Logo
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-7">
          <a
            href="#"
            className="text-blue-500 border-b-2 border-blue-500 pb-1 text-sm"
          >
            Home
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition text-sm"
          >
            About
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition text-sm"
          >
            How it works
          </a>
          <a
            href="#"
            className="text-slate-300 hover:text-white transition text-sm"
          >
            Login
          </a>

          {/* Join Button */}
          <button className="ml-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm hover:scale-105 transition">
            Join Now
          </button>
        </nav>

      </div>
    </header>
  );
};

export default Header;
