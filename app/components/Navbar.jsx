'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '../assets/assets';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll listener for sticky blur header
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Decorative top-right graphic - automatically hidden in dark mode */}
      <div className="fixed top-0 right-0 w-11/12 -z-50 -translate-y-[70%] sm:-translate-y-[80%] pointer-events-none select-none dark:hidden">
        {assets?.header_bg_color && (
          <Image
            src={assets.header_bg_color}
            alt=""
            priority
            className="w-full h-auto pointer-events-none"
          />
        )}
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full fixed top-0 left-0 px-5 sm:px-8 xl:px-[8%] py-4 flex items-center justify-between z-40 transition-colors duration-300 ${
          isScroll
            ? 'bg-white/80 dark:bg-darkTheme/90 backdrop-blur-md shadow-sm border-b border-gray-200/40 dark:border-white/10'
            : 'bg-transparent'
        }`}
      >
        {/* Brand Logo */}
        <a href="#top" className="flex items-center">
          {assets?.logo && (
            <Image
              src={isDarkMode && assets.logo_dark ? assets.logo_dark : assets.logo}
              alt="Logo"
              width={120}
              height={40}
              priority
              className="w-24 sm:w-28 cursor-pointer object-contain dark:brightness-125"
            />
          )}
        </a>

        {/* Desktop Navigation Links */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 lg:px-12 py-3 transition-all duration-300 ${
            isScroll
              ? 'border border-gray-200/50 dark:border-white/10'
              : 'bg-white/60 dark:bg-white/5 shadow-xs border border-white/40 dark:border-white/10'
          }`}
        >
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="font-ovo text-sm lg:text-base text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Controls */}
        <div className="relative z-50 flex items-center gap-2 sm:gap-4 pointer-events-auto">
          {/* THEME TOGGLE BUTTON */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative z-[999] w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-yellow-300 hover:scale-110 active:scale-95 transition cursor-pointer"
          >
            {isDarkMode ? (
              assets?.sun_icon ? (
                <Image
                  src={assets.sun_icon}
                  alt="Sun"
                  width={22}
                  height={22}
                  className="w-5 h-5 object-contain pointer-events-none select-none"
                />
              ) : (
                <svg className="w-5 h-5 stroke-current pointer-events-none" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )
            ) : (
              assets?.moon_icon ? (
                <Image
                  src={assets.moon_icon}
                  alt="Moon"
                  width={22}
                  height={22}
                  className="w-5 h-5 object-contain pointer-events-none select-none"
                />
              ) : (
                <svg className="w-5 h-5 stroke-current pointer-events-none" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )
            )}
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-7 py-2 border border-gray-600 dark:border-white/40 text-gray-800 dark:text-white rounded-full font-ovo text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            Contact
            {assets?.arrow_icon ? (
              <Image
                src={isDarkMode && assets.arrow_icon_dark ? assets.arrow_icon_dark : assets.arrow_icon}
                alt="Arrow"
                width={12}
                height={12}
                className="w-3 h-auto dark:invert pointer-events-none"
              />
            ) : (
              <svg className="w-3 h-3 rotate-45 stroke-current pointer-events-none" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            )}
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Mobile Menu"
            className="block md:hidden p-2 rounded-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition cursor-pointer"
          >
            {assets?.menu_black ? (
              <Image
                src={isDarkMode && assets.menu_white ? assets.menu_white : assets.menu_black}
                alt="Menu"
                width={24}
                height={24}
                className={`w-6 h-6 object-contain pointer-events-none ${isDarkMode && !assets.menu_white ? 'invert' : ''}`}
              />
            ) : (
              <svg className="w-7 h-7 stroke-current pointer-events-none" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
        className="fixed top-0 bottom-0 right-0 w-72 max-w-[80vw] bg-rose-50 dark:bg-darkHover text-gray-900 dark:text-white h-screen z-50 flex flex-col px-8 py-8 shadow-2xl transition-transform duration-300 ease-in-out md:hidden"
      >
        <div className="flex justify-end w-full">
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Mobile Menu"
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200 transition cursor-pointer"
          >
            {assets?.close_black ? (
              <Image
                src={isDarkMode && assets.close_white ? assets.close_white : assets.close_black}
                alt="Close"
                width={20}
                height={20}
                className={`w-5 h-5 object-contain pointer-events-none ${isDarkMode && !assets.close_white ? 'invert' : ''}`}
              />
            ) : (
              <svg className="w-6 h-6 stroke-current pointer-events-none" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        <ul className="flex flex-col gap-6 mt-6">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-ovo text-xl text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 font-medium block py-2 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;