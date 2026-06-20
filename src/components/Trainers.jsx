import { motion } from 'framer-motion';
import ritaPhoto from '../assets/trainer-rita.png';
import revathiPhoto from '../assets/trainer-revathi.png';
import rumjhumPhoto from '../assets/trainer-rumjhum.png';

const trainers = [
  {
    name: 'Rita Som',
    image: ritaPhoto,
    role: 'Director & Lead Mentor, Rapid TTI',
    bio: 'Visionary leader with decades of experience in teacher training and educational administration.',
  },
  {
    name: 'Revathi Varier',
    image: revathiPhoto,
    role: 'Certified Jolly Phonics Trainer, Rapid TTI',
    bio: 'Experienced educator with a passion for child development and innovative teaching methodologies.',
    link: 'https://www.facebook.com/profile.php?id=100089942012275',
  },
  {
    name: 'Rumjhum Sengupta',
    image: rumjhumPhoto,
    role: 'Trainer, Rapid TTI',
    bio: 'Dedicated mentor specializing in early childhood curriculum design and classroom management.',
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

const Trainers = () => {
  return (
    <section id="trainers" className="bg-soft-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary text-center">
          Learn from Experienced Educators
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 ease-out group border-t-4 border-transparent hover:border-accent"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-dark-navy mx-auto flex items-center justify-center text-white text-2xl font-bold overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              {trainer.link ? (
                <a href={trainer.link} target="_blank" rel="noopener noreferrer" className="mt-6 text-xl font-bold text-text-primary hover:text-accent transition-colors duration-300 inline-block">{trainer.name}</a>
              ) : (
                <h3 className="mt-6 text-xl font-bold text-text-primary">{trainer.name}</h3>
              )}
              <p className="text-accent font-medium mt-1">{trainer.role}</p>
              <p className="text-text-primary/60 mt-3 text-sm">{trainer.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Trainers;
