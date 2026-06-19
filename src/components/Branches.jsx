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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12"
        >
          {/* Branch 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 flex flex-col">
            <FaMapMarkerAlt className="text-accent text-4xl mx-auto" />
            <h3 className="text-2xl font-bold text-primary mt-4">
              Ambernath
            </h3>
            <p className="text-text-primary/70 mt-3 text-lg leading-relaxed flex-grow">
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

          {/* Branch 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 flex flex-col">
            <FaMapMarkerAlt className="text-accent text-4xl mx-auto" />
            <h3 className="text-2xl font-bold text-primary mt-4">
              Palava, Dombivali
            </h3>
            <p className="text-text-primary/70 mt-3 text-lg leading-relaxed flex-grow">
              1702, Serenity C Wing, Lakeshore Greens,<br />
              Lodha Palava Phase 2, Dombivali East, 421204
            </p>
            <a
              href="https://share.google/1gl1Q24HDxi4Qmgtk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 border-2 border-accent text-accent rounded-full px-8 py-3 font-medium hover:bg-accent hover:text-white transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Rapid Teacher Training Institute - Ambernath Branch"
              src="https://www.google.com/maps?q=Shobha+Hospital,+Shiv+Mandir+Road,+Ambernath+East,+Maharashtra+421501&output=embed"
              className="w-full h-96 shadow-lg border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Rapid Teacher Training Institute - Palava, Dombivali Branch"
              src="https://www.google.com/maps?q=Lodha+Serenity,+Lakeshore+Greens,+Dombivli&output=embed"
              className="w-full h-96 shadow-lg border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
