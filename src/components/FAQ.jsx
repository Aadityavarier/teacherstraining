import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'Who can join the ECCEd program?',
    answer:
      'Anyone passionate about early childhood education. Homemakers, graduates, working professionals, and career restarters are all welcome.',
  },
  {
    question: 'What is the duration of the course?',
    answer:
      'Please contact us for current batch details and course duration.',
  },
  {
    question: 'Will I get a recognized certificate?',
    answer:
      'Yes. All students receive certification by ITES, Mumbai upon successful completion.',
  },
  {
    question: 'Is placement assistance provided?',
    answer:
      'Yes. We offer full career and placement support including exam prep, interview preparation, and job assistance.',
  },
  {
    question: 'Do I need prior teaching experience?',
    answer:
      'No prior experience is required. Our program is designed to take you from beginner to classroom-ready.',
  },
  {
    question: 'Which locations do you operate from?',
    answer:
      'We operate from two branches — Ambernath-East and Palava, Dombivali. Visit us at either location for enquiries and admissions.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-soft-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto mt-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-6 flex justify-between items-center cursor-pointer text-left"
              >
                <span className="font-semibold text-text-primary text-lg">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-accent transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-text-primary/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
