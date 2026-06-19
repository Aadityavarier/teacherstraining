import { motion } from 'framer-motion';
import {
  FaBook,
  FaGraduationCap,
  FaBriefcase,
  FaSchool,
  FaSeedling,
  FaLightbulb,
} from 'react-icons/fa';

const cards = [
  {
    icon: FaBook,
    title: 'Comprehensive Study Material & Notes',
    desc: 'Curated materials covering child psychology, teaching methods, and classroom management',
  },
  {
    icon: FaGraduationCap,
    title: 'Certification by ITES, Mumbai',
    desc: 'Industry-recognized certification that opens doors to teaching careers across India',
  },
  {
    icon: FaBriefcase,
    title: 'Exam & Interview Preparation',
    desc: 'Focused preparation sessions for certification exams and school interviews',
  },
  {
    icon: FaSchool,
    title: 'Internship & Placement Assistance',
    desc: 'Hands-on teaching internships and full placement support in partner schools',
  },
  {
    icon: FaSeedling,
    title: 'Personality Development & Communication Skills',
    desc: 'Build confidence, public speaking, and professional communication abilities',
  },
  {
    icon: FaLightbulb,
    title: 'Entrepreneurship Mindset Development',
    desc: 'Learn to plan, launch, and manage your own preschool or daycare center',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ECCEdCourse() {
  const handleEnquire = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="course" className="py-20 bg-dark-navy diagonal-stripes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white text-center">
          Build a Career That Creates Impact
        </h2>
        <p className="text-center text-cream/80 text-lg mt-4 max-w-3xl mx-auto">
          Our ECCEd Course is thoughtfully designed to give you the knowledge, confidence, and
          practical skills required in modern preschool education
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-card p-6 hover:bg-white/15 transition-all duration-300"
              >
                <Icon className="text-accent text-3xl mb-4" />
                <h3 className="text-white font-semibold text-lg">{card.title}</h3>
                <p className="text-cream/70 mt-2">{card.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center flex gap-4 justify-center flex-wrap">
          <button
            onClick={handleEnquire}
            className="bg-accent text-white rounded-full px-8 py-3 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Enquire About the Course
          </button>

        </div>
      </div>
    </section>
  );
}
