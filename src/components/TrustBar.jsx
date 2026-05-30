import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function useCountUp(target, duration = 2000, inView) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

const stats = [
  { value: 2000, suffix: '+', label: 'Teachers Trained', isNumeric: true },
  { value: 'Ambernath', suffix: '', label: 'East Mumbai', isNumeric: false },
  { value: 'ITES', suffix: '', label: 'Certified', isNumeric: false },
  { value: 100, suffix: '%', label: 'Career Support', isNumeric: true },
];

function StatItem({ stat, index, inView }) {
  const count = useCountUp(
    stat.isNumeric ? stat.value : 0,
    stat.isNumeric ? 2000 : 0,
    inView
  );

  const isLast = index === stats.length - 1;

  return (
    <div
      className={`text-center px-4 py-2 ${
        !isLast ? 'md:border-r md:border-primary/20' : ''
      }`}
    >
      <div className="text-3xl md:text-4xl font-bold text-primary font-playfair">
        {stat.isNumeric ? (
          <>
            {count.toLocaleString()}
            {stat.suffix}
          </>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {stat.value}
          </motion.span>
        )}
      </div>
      <p className="text-sm md:text-base font-medium text-accent mt-1">
        {stat.label}
      </p>
    </div>
  );
}

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="bg-cream py-6">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
