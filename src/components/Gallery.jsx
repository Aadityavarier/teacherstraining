import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// NOTE: All images in /assets/gallery/ should be compressed to under 300KB each before adding. Use TinyPNG or Squoosh before placing files here.

import cert1 from '../assets/gallery/certification-1.jpg';
import cert2 from '../assets/gallery/certification-2.jpg';
import cert3 from '../assets/gallery/certification-3.jpg';
import cert4 from '../assets/gallery/certification-4.jpg';
import cert5 from '../assets/gallery/certification-5.jpg';
import cert6 from '../assets/gallery/certification-6.jpg';
import cert7 from '../assets/gallery/certification-7.jpg';
import cert8 from '../assets/gallery/certification-8.jpg';
import cert9 from '../assets/gallery/certification-9.jpg';
import cert10 from '../assets/gallery/certification-10.jpg';
import cert11 from '../assets/gallery/certification-11.jpg';
import certGroup1 from '../assets/gallery/certification-group-1.jpg';
import certGroup2 from '../assets/gallery/certification-group-2.jpg';
import certGroup3 from '../assets/gallery/certification-group-3.jpg';
import group1 from '../assets/gallery/group-photo-1.jpg';
import group2 from '../assets/gallery/group-photo-2.jpg';
import poster1 from '../assets/gallery/poster-1.jpg';
import poster2 from '../assets/gallery/poster-2.jpg';
import poster3 from '../assets/gallery/poster-3.jpg';
import poster4 from '../assets/gallery/poster-4.png';
import poster5 from '../assets/gallery/poster-5.jpg';
import poster6 from '../assets/gallery/poster-6.jpg';
import teaching1 from '../assets/gallery/teaching-photo-1.jpg';
import trio1 from '../assets/gallery/d-trio-photo-1.jpg';

const images = [
  { src: cert1, alt: 'Rapid Teacher Training - Certification' },
  { src: cert2, alt: 'Rapid Teacher Training - Certification' },
  { src: cert3, alt: 'Rapid Teacher Training - Certification' },
  { src: cert4, alt: 'Rapid Teacher Training - Certification' },
  { src: cert5, alt: 'Rapid Teacher Training - Certification' },
  { src: cert6, alt: 'Rapid Teacher Training - Certification' },
  { src: cert7, alt: 'Rapid Teacher Training - Certification' },
  { src: cert8, alt: 'Rapid Teacher Training - Certification' },
  { src: cert9, alt: 'Rapid Teacher Training - Certification' },
  { src: cert10, alt: 'Rapid Teacher Training - Certification' },
  { src: cert11, alt: 'Rapid Teacher Training - Certification' },
  { src: certGroup1, alt: 'Rapid Teacher Training - Certification Group' },
  { src: trio1, alt: 'Rapid Teacher Training - Trio Photo' },
  { src: certGroup2, alt: 'Rapid Teacher Training - Certification Group' },
  { src: certGroup3, alt: 'Rapid Teacher Training - Certification Group' },
  { src: group1, alt: 'Rapid Teacher Training - Group Photo' },
  { src: group2, alt: 'Rapid Teacher Training - Group Photo' },
  { src: poster1, alt: 'Rapid Teacher Training - Poster' },
  { src: poster2, alt: 'Rapid Teacher Training - Poster' },
  { src: poster3, alt: 'Rapid Teacher Training - Poster' },
  { src: poster4, alt: 'Rapid Teacher Training - Poster' },
  { src: poster5, alt: 'Rapid Teacher Training - Poster' },
  { src: poster6, alt: 'Rapid Teacher Training - Poster' },
  { src: teaching1, alt: 'Rapid Teacher Training - Teaching Photo' }
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-4xl font-bold text-primary"
          >
            A Glimpse Into Rapid
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-text-primary/70 text-lg"
          >
            Moments from our classrooms, trainers, and students
          </motion.p>
        </div>

        {/* CSS Columns Masonry Layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: (index % 8) * 0.04, ease: [0.25, 0.4, 0.25, 1] }}
              className="break-inside-avoid inline-block w-full mb-3 md:mb-4 relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100"
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white p-2 z-[110] bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all"
              onClick={closeLightbox}
            >
              <HiX className="w-8 h-8" />
            </button>

            {/* Previous Arrow */}
            <button
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-[110] bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all"
              onClick={prevImage}
            >
              <HiChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Next Arrow */}
            <button
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-[110] bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all"
              onClick={nextImage}
            >
              <HiChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Main Image Container */}
            <div 
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent clicks on image from closing lightbox
            >
              <img
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              />
              
              {/* Image Counter */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 font-sans text-sm tracking-widest bg-black/40 px-4 py-1 rounded-full backdrop-blur-md">
                {selectedImageIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
