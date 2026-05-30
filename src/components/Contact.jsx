import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaCheckCircle,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setFormData({ name: '', phone: '', email: '', location: '', message: '' });
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <section id="contact" className="bg-dark-navy py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column — Contact Details */}
          <div className="text-white">
            <h3 className="text-2xl font-bold text-white">
              Rapid Teacher Training Institute
            </h3>
            <p className="text-cream/70 mt-2 italic">
              Shaping Passionate Educators for a Better Tomorrow
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+919022582988"
                className="flex items-center gap-3 text-white"
              >
                <FaPhone className="text-accent" />
                <span>90225 82988</span>
              </a>
              <a
                href="tel:+919820712536"
                className="flex items-center gap-3 text-white"
              >
                <FaPhone className="text-accent" />
                <span>9820712536</span>
              </a>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent flex-shrink-0" />
                <span>302, Om Dubey Dham, above Shobha Hospital, Ambernath-East</span>
              </div>
            </div>

            <a
              href="https://wa.me/919022582988?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20ECCEd%20Teacher%20Training%20program"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-green-500 text-white rounded-full px-6 py-3 hover:bg-green-600 transition"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

            <div className="mt-6">
              <a
                href="#"
                className="text-white/60 text-2xl hover:text-accent transition"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Right Column — Enquiry Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-text-primary/80 mb-1 block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-text-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-text-primary/80 mb-1 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-text-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-text-primary/80 mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-text-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-text-primary/80 mb-1 block">
                  Preferred Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-text-primary"
                >
                  <option value="">Choose Location</option>
                  <option value="Ambernath-East">Ambernath-East</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-text-primary/80 mb-1 block">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-text-primary"
                />
              </div>

              <button
                type="submit"
                className="bg-accent text-white w-full py-3 rounded-full font-semibold text-lg hover:bg-accent/90 hover:shadow-lg transition mt-2"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast-enter fixed bottom-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-2">
          <FaCheckCircle />
          Thank you! We'll get back to you shortly.
        </div>
      )}
    </section>
  );
};

export default Contact;
