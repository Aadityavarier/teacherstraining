import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Branches() {
  return (
    <section id="branches" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-3xl md:text-4xl font-bold text-primary text-center"
        >
          Visit Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mt-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
            <FaMapMarkerAlt className="text-accent text-4xl mx-auto" />
            <h3 className="text-2xl font-bold text-primary mt-4">
              Ambernath-East
            </h3>
            <p className="text-text-primary/70 mt-3 text-lg leading-relaxed">
              302, Om Dubey Dham, above Shobha Hospital,<br />
              Ambernath-East, Maharashtra
            </p>
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent('302, Om Dubey Dham, above Shobha Hospital, Ambernath East, Maharashtra')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 border-2 border-accent text-accent rounded-full px-8 py-3 font-medium hover:bg-accent hover:text-white transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </motion.div>

        <div className="mt-12 overflow-hidden rounded-2xl">
          <iframe
            title="Rapid TTI Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
            className="w-full h-96 rounded-2xl shadow-lg border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
