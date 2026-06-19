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
    location: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.location) newErrors.location = "Preferred Location is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const phoneNumber = "919022582988"; // primary number
    const message = `Hi, I would like to enquire about the ECCEd Teacher Training program.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Preferred Location:* ${formData.location}
*Message:* ${formData.message || "No additional message"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setShowConfirmation(true);
    setFormData({ name: '', phone: '', location: '', message: '' });
    setTimeout(() => setShowConfirmation(false), 6000);
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
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-2">
                  <span><strong className="text-white/90">Ambernath:</strong> 302, Om Dubey Dham, above Shobha Hospital, Ambernath-East</span>
                  <span><strong className="text-white/90">Palava:</strong> 1702, Serenity C Wing, Lakeshore Greens, Lodha Palava Phase 2, Dombivali East, 421204</span>
                </div>
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
                href="https://www.facebook.com/people/Rapid-Teacher-Training-Institute/61578641480359"
                target="_blank"
                rel="noopener noreferrer"
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
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-text-primary`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-text-primary/80 mb-1 block">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-text-primary`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>



              <div>
                <label className="text-sm font-medium text-text-primary/80 mb-1 block">
                  Preferred Location <span className="text-red-500">*</span>
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border ${errors.location ? 'border-red-500' : 'border-gray-200'} focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition text-text-primary`}
                >
                  <option value="">Choose Location</option>
                  <option value="Ambernath">Ambernath</option>
                  <option value="Palava">Palava, Dombivali</option>
                </select>
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
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
                className="bg-accent text-white w-full py-3 rounded-full font-semibold text-lg hover:bg-accent/90 hover:shadow-lg transition mt-2 flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Send via WhatsApp
              </button>
            </form>

            {/* Inline Confirmation */}
            {showConfirmation && (
              <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 border border-green-200">
                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                <p className="text-sm">You're being redirected to WhatsApp — just hit send to complete your enquiry!</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
