import { motion } from 'framer-motion';
import { FaSchool } from 'react-icons/fa';
import aboutImage from '../assets/about-photo.webp';


const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-soft-cream/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary">
              Every Great Nation is Built by Great Teachers
            </h2>
            <p className="mt-6 text-text-primary/80 text-lg leading-relaxed">
              Rapid Teacher Training Institute is dedicated to preparing
              confident, skilled, and compassionate preschool educators who can
              positively shape the minds of children aged 2–6 years. Our
              programs combine practical learning, professional guidance, and
              career support to ensure every student is classroom-ready from day
              one. Present in Ambernath & Palava, Dombivali — we
              are a trusted name in ECCEd teacher training across the region.
            </p>
          </motion.div>

          {/* Image Placeholder Column */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="aspect-[4/3] lg:scale-105 rounded-2xl bg-gradient-to-br from-primary/10 to-cream/40 shadow-xl overflow-hidden flex items-center justify-center relative">
              <img 
                src={aboutImage} 
                alt="Rapid Institute Classroom" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
