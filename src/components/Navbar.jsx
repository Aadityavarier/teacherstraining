import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Course', id: 'course' },
  { label: 'Trainers', id: 'trainers' },
  { label: 'Success Stories', id: 'stories' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Location', id: 'branches' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // Close mobile menu first
    setMobileOpen(false);

    // Wait for the menu's exit animation to complete (or nearly complete) 
    // before triggering the scroll. Mobile browsers often cancel scrolls 
    // if a large DOM element is animating out or unmounting at the exact same time.
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80; // height of navbar
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileOpen(false); }}
          >
            {/* Circular Brand Mark Icon */}
            <img
              src="/favicon.svg"
              alt="Rapid Brand Mark"
              className="h-11 w-11 drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            {/* Dynamic Typography Branding */}
            <div className="flex flex-col">
              <span className={`font-playfair text-2xl font-black tracking-wider transition-colors duration-300 ${
                scrolled || mobileOpen ? 'text-primary' : 'text-white'
              }`}>
                RAPID
              </span>
              <span className={`font-sans text-[9px] font-bold uppercase tracking-[0.2em] -mt-1 transition-colors duration-300 ${
                scrolled || mobileOpen ? 'text-accent' : 'text-cream'
              }`}>
                Teacher Training
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-sans font-medium transition-colors duration-200 hover:text-accent ${
                  scrolled ? 'text-text-primary' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-white font-sans font-semibold text-sm rounded-full px-6 py-2.5 shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <HiX className={`w-7 h-7 ${scrolled || mobileOpen ? 'text-text-primary' : 'text-white'}`} />
            ) : (
              <HiMenu className={`w-7 h-7 ${scrolled || mobileOpen ? 'text-text-primary' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:hidden overflow-hidden bg-white shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-text-primary font-sans font-medium text-base py-2 border-b border-gray-100 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
                onClick={() => scrollToSection('contact')}
                className="mt-2 bg-accent text-white font-sans font-semibold text-base rounded-full px-6 py-3 shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200 text-center"
              >
                Enquire Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
