import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaRocket } from 'react-icons/fa';

const highlights = [
  { icon: FaStar, label: 'Huge Impact' },
  { icon: FaHeart, label: 'Great Satisfaction' },
  { icon: FaRocket, label: 'Career with Purpose' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ChangeMaker() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary to-dark-navy overflow-hidden">
      {/* Diagonal stripes overlay */}
      <div className="diagonal-stripes-strong absolute inset-0 pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white"
        >
          Teaching is More Than a Profession
        </motion.h2>

        {/* Body */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-cream/90 text-lg md:text-xl leading-relaxed"
        >
          As an early childhood educator, you help children develop confidence,
          creativity, curiosity, and values during the most important years of
          their lives.
        </motion.p>

        {/* Icon + Label Items */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <item.icon className="text-accent text-2xl" />
              <span className="text-white font-medium mt-2">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mt-12">
          <button
            onClick={scrollToContact}
            className="bg-accent text-white rounded-full px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Journey Today
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
