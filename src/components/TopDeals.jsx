import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const deals = [
  { image: "/images/deals1.png", alt: "Deal 1" },
  { image: "/images/deals2.png", alt: "Deal 2" },
  { image: "/images/deals3.png", alt: "Deal 3" },
  { image: "/images/deals4.png", alt: "Deal 4" },
  { image: "/images/deals5.png", alt: "Deal 5" },
  { image: "/images/deals6.png", alt: "Deal 6" }
];

const TopDeals = () => {
  return (
    <section className="py-16 bg-white">
      {/* Heading Section */}
      <div className="text-center px-4 mb-12">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">TOP DEALS</h2>
        <div className="w-24 h-2 bg-blue-400 mx-auto mb-4"></div>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-600">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat.
        </p>
      </div>

      {/* Deal Images with Animation */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-1">
        {deals.map((deal, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { threshold: 0.2 });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="cursor-pointer relative group overflow-hidden shadow-md"
            >
              {/* Image */}
              <img
                src={deal.image}
                alt={deal.alt}
                className="cursor-pointer w-full h-72 object-cover transition-transform duration-300"
              />

              {/* Overlay 1 */}
              <div className=" absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className=" text-black text-sm bg-white font-semibold px-4 py-2 rounded mb-36 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                  PROMOTIONAL TOUR
                </p>
              </div>


              {/* Overlay 2 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="cursor-pointer text-white text-sm font-semibold mb-4 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  TOUR-DETAILS
                </p>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TopDeals;
