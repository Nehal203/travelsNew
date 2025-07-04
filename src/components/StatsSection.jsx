import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Animated number counter
const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(target);
      if (start === end) return;

      const duration = 2000;
      const increment = Math.ceil(end / (duration / 10));

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, 10);
    }
  }, [isInView, target]);

  return (
    <h2 ref={ref} className="text-3xl font-bold text-gray-800">
      {count.toLocaleString()}
    </h2>
  );
};

// Stats layout
const StatsSection = () => {
  const stats = [
    { number: 1797, label: "AMAZING TOURS" },
    { number: 1707, label: "HAPPY CLIENT" },
    { number: 5584, label: "IN BUSINESS" },
    { number: 11700, label: "SUPPORT CASES" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="relative">
            <div className="w-40 h-40 rounded-full mx-auto border border-blue-200 bg-gradient-to-br from-sky-100 to-white shadow-[inset_0_4px_8px_rgba(255,255,255,0.6),0_8px_15px_rgba(0,123,255,0.2)] flex items-center justify-center">
              <div className="text-center">
                <AnimatedCounter target={stat.number} />
                <p className="text-sm mt-1 text-gray-600 font-medium">{stat.label}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
