import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is the duration and eligibility for the ECCEd course in Ambernath?',
    answer: 'The ECCEd diploma ranges from 6 months to 1 year with eligibility starting after 10th/12th passing.',
  },
  {
    question: 'Is the ECCEd certificate from Rapid Teachers Training Govt recognized?',
    answer: 'Yes, our Early Childhood Care & Education courses are recognized and accepted by leading private and international schools across Mumbai and Thane.',
  },
  {
    question: 'Do you offer weekend batches for working professionals and housewives?',
    answer: 'Yes, we offer flexible Saturday/Sunday weekend batches as well as morning/evening weekday batches.',
  },
  {
    question: 'What kind of job placement assistance do you offer?',
    answer: 'We provide 100% placement support, including resume preparation, mock interviews, and direct job recommendations at top schools across Ambernath, Dombivli, and Kalyan.',
  },
  {
    question: 'Can housewives or women after a career break join the course?',
    answer: 'Yes! Our ECCEd course is designed for housewives, career returnees, and freshers, with flexible morning, evening, and weekend batches.',
  },
  {
    question: 'Are installment options available for the course fees?',
    answer: 'Yes, we offer affordable fee structures with flexible monthly installment (EMI) plans for all our diploma courses.',
  },
  {
    question: 'Is the teacher training course available online or offline?',
    answer: 'We offer both! You can choose full classroom batches or hybrid training (online theory with hands-on practical workshops at our campuses).',
  },
  {
    question: 'What career options open up after completing the diploma?',
    answer: 'Graduates can work as Pre-Primary Teachers, Nursery Educators, Daycare Managers, or start their own preschools and phonics classes.',
  }
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
              className="bg-white rounded-xl mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500"
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
                    transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
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
