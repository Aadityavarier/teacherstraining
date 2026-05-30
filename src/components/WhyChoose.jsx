import { motion } from 'framer-motion';
import { FaUsers, FaChalkboardTeacher, FaHandshake, FaFemale } from 'react-icons/fa';

const features = [
  {
    icon: FaUsers,
    title: '2000+ Teachers Trained',
    body: 'We have successfully trained educators now working in reputed schools and preschools across the region.',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Practical Learning Approach',
    body: 'Real classroom experiences, child psychology, teaching methodologies, and hands-on activities.',
  },
  {
    icon: FaHandshake,
    title: 'Career & Placement Support',
    body: 'From interviews to placements, we support students at every stage of their professional journey.',
  },
  {
    icon: FaFemale,
    title: 'Empowering Women Through Education',
    body: 'We encourage women to pursue careers that offer purpose, creativity, independence, and growth.',
  },
];

const WhyChoose = () => {
  return (
    <section id="why" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary text-center">
          Why Thousands of Women Choose Rapid
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isOdd = index % 2 === 0; // 0-indexed: 0,2 slide from left; 1,3 slide from right

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isOdd ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary/30 hover:border-accent"
              >
                <Icon className="text-4xl text-primary" />
                <h3 className="mt-4 text-xl font-bold text-accent">{feature.title}</h3>
                <p className="mt-3 text-text-primary/70 leading-relaxed">{feature.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
