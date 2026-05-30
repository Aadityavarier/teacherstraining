import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaHome, FaSyncAlt, FaBriefcase } from 'react-icons/fa';

const cards = [
  {
    icon: FaGraduationCap,
    title: 'Become a Preschool Teacher',
    desc: 'Launch your career in early childhood education with professional training and certification',
  },
  {
    icon: FaSchool,
    title: 'Work in Reputed Schools',
    desc: 'Get placed in leading preschools and educational institutions across the region',
  },
  {
    icon: FaHome,
    title: 'Start Your Own Preschool',
    desc: 'Learn the skills and business knowledge to start and run your own preschool',
  },
  {
    icon: FaSyncAlt,
    title: 'Restart Career After a Break',
    desc: 'Re-enter the workforce with a fulfilling and flexible career in education',
  },
  {
    icon: FaBriefcase,
    title: 'Build a Flexible, Purposeful Career',
    desc: 'Create a career that offers independence, creativity, and meaningful impact',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function WhoIsThisFor() {
  // Split cards: first 3 in the grid row, last 2 centered
  const firstRow = cards.slice(0, 3);
  const lastRow = cards.slice(3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary text-center">
          Is This Program For You?
        </h2>
        <p className="text-center text-text-primary/70 text-lg mt-4">
          Rapid welcomes women from all walks of life
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12"
        >
          {/* First row — 3 cards in a grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {firstRow.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="p-6 bg-soft-cream rounded-xl border-l-4 border-primary hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="text-3xl text-primary mb-4" />
                  <h3 className="font-semibold text-lg text-text-primary">{card.title}</h3>
                  <p className="text-text-primary/70 mt-2">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Last row — 2 cards, centered */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {lastRow.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index + 3}
                  variants={cardVariants}
                  className="p-6 bg-soft-cream rounded-xl border-l-4 border-primary hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <Icon className="text-3xl text-primary mb-4" />
                  <h3 className="font-semibold text-lg text-text-primary">{card.title}</h3>
                  <p className="text-text-primary/70 mt-2">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
