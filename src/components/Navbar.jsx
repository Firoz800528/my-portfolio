// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-[#1E293B]/80 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-sm uppercase tracking-wide">
          {links.map((link) => (
            <li key={link} className="relative group">
              <a
                href={`#${link}`}
                className="transition duration-300 group-hover:text-[#F0B100]"
              >
                {link}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F0B100] transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1E293B]/95 px-6 pb-4 pt-2">
          <ul className="space-y-4 text-sm font-medium">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="block text-white hover:text-sky-400 transition duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
