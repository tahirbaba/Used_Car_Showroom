'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCarSide, FaPhoneAlt, FaHome } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: 'Home', href: '/', icon: <FaHome className="inline mr-1" /> },
    { name: 'Contact', href: '/contact', icon: <FaPhoneAlt className="inline mr-1" /> },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-gray-200 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-blue-700 flex items-center gap-2">
          <FaCarSide className="text-3xl text-blue-700" />
          <span>
            Used<span className="text-gray-800">Cars</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative group transition text-gray-700 hover:text-blue-700 ${
                pathname === item.href ? 'text-blue-800 font-semibold' : ''
              }`}
            >
              {item.icon}
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/post_car">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-2 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300">
              Post Your Car
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-md rounded-b-lg px-6 py-4 space-y-4 transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-gray-800 font-medium hover:text-blue-700 transition ${
                pathname === item.href ? 'text-blue-800 font-semibold' : ''
              }`}
            >
              {item.icon} {item.name}
            </Link>
          ))}
          <Link href="/post_car" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-2 rounded-full font-semibold shadow-lg transition-all duration-300">
              Post Your Car
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
