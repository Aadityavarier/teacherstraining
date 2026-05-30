import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Diagonal Stripes Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.15) 20px, rgba(255,255,255,0.15) 22px)',
        }}
      />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,82,26,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center w-full py-28 lg:py-0">
          {/* Text Column — 60% (3 of 5 cols) */}
          <motion.div
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={childVariants}
              className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Shaping Passionate Educators for a Better Tomorrow
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="font-sans text-cream text-lg md:text-xl mt-6 max-w-xl leading-relaxed"
            >
              Join 2000+ trained teachers who built meaningful careers through
              Rapid's ECCEd program
            </motion.p>

            <motion.div
              variants={childVariants}
              className="mt-8 flex gap-4 flex-wrap"
            >
              <button
                onClick={scrollToContact}
                className="bg-accent text-white font-sans font-semibold rounded-full px-8 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Enquire Now
              </button>
              <a
                href="https://wa.me/919022582988?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20ECCEd%20Teacher%20Training%20program"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-sans font-semibold rounded-full px-8 py-3 hover:bg-white/10 transition-all duration-200"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </a>
            </motion.div>

            <motion.p
              variants={childVariants}
              className="mt-6 font-sans text-cream/90 text-sm md:text-base tracking-wide"
            >
              ⭐ ITES Certified · Ambernath, East Mumbai · 2000+ Trained
            </motion.p>
          </motion.div>

          {/* Image Placeholder Column — 40% (2 of 5 cols) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-primary to-accent/30" />

              {/* Soft Blue Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,15,168,0.4)_0%,transparent_70%)]" />

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/20 rounded-lg" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-accent/30 rounded-full" />
              <div className="absolute top-1/4 right-6 w-2 h-2 bg-accent/60 rounded-full" />
              <div className="absolute bottom-1/3 left-8 w-3 h-3 bg-cream/20 rounded-full" />

              {/* Logo Badge in the Center of the Glow Card */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
                  <img
                    src="/RAPID.png"
                    alt="Rapid Teacher Training Institute"
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
                <p className="font-sans text-white/90 text-sm md:text-base font-semibold mt-5 tracking-wide">
                  Rapid Teacher Training Institute
                </p>
                <p className="font-sans text-cream/70 text-xs md:text-sm mt-1">
                  Ambernath-East, Mumbai
                </p>
              </div>

              {/* Border glow ring */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-darker-navy/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
