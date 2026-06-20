import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

// TODO: Replace with real quotes from client's Facebook posts
const testimonials = [
  {
    quote:
      'The ECCEd program at Rapid completely transformed my career. I went from being a homemaker to a confident preschool teacher in just months. The trainers were incredibly supportive throughout my journey.',
    name: 'Priya Sharma',
    role: 'Now teaching at a preschool in Ambernath',
  },
  {
    quote:
      "I always wanted to work with children but didn't know where to start. Rapid gave me the skills, confidence, and placement to make my dream come true. I am forever grateful.",
    name: 'Anjali Deshmukh',
    role: 'Running her own preschool in Mumbai',
  },
  {
    quote:
      "After a 10-year career break, I was nervous about re-entering the workforce. Rapid's practical approach and career support helped me land a wonderful teaching position within weeks of completing the course.",
    name: 'Meera Kulkarni',
    role: 'Teaching at a leading school in Ambernath',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function SuccessStories() {
  return (
    <section id="stories" className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-3xl md:text-4xl font-bold text-white text-center"
        >
          At Rapid, Every Student Journey Inspires Us
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-cream/80 text-lg mt-4"
        >
          From homemakers to working professionals — our students come from all
          walks of life
        </motion.p>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card p-8"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-accent text-5xl leading-none mb-4" />

              {/* Quote Text */}
              <p className="text-white/90 text-base leading-relaxed italic">
                {t.quote}
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-cream flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-cream/60 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
