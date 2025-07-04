import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Tours = [
  { country: "AUSTRALIA", price: "$236", description: "Lorem ipsum dolor sit amet...", duration: "5 DAYS 4 NIGHT", image: "/images/australia.png" },
  { country: "CANADA", price: "$236", description: "Lorem ipsum dolor sit amet...", duration: "6 DAYS 5 NIGHT", image: "/images/canada.png" },
  { country: "JAPAN", price: "$236", description: "Lorem ipsum dolor sit amet...", duration: "4 DAYS 3 NIGHT", image: "/images/france.png" },
  { country: "ITALY", price: "$236", description: "Lorem ipsum dolor sit amet...", duration: "7 DAYS 6 NIGHT", image: "/images/itly.png" },
  { country: "FRANCE", price: "$236", description: "Lorem ipsum dolor sit amet...", duration: "5 DAYS 4 NIGHT", image: "/images/france.png" },
  { country: "GERMANY", price: "$236", description: "Lorem ipsum dolor sit amet...", duration: "5 DAYS 4 NIGHT", image: "/images/germany.png" },
];

const TourCards = () => {
  const scrollRef = useRef(null);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(Tours.length / cardsPerPage);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    const scrollAmount = scrollRef.current.offsetWidth * index;
    scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    setCurrentIndex(index);
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;
    const handleScroll = () => {
      const scrollLeft = ref.scrollLeft;
      const width = ref.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentIndex(index);
    };
    ref.addEventListener("scroll", handleScroll);
    return () => ref.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center px-4 mb-12">
        <h2 className="text-5xl font-bold mb-4">SPECIAL PACKAGE</h2>
        <div className="w-24 h-2 bg-blue-400 mx-auto mb-4"></div>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
        </p>
      </div>

      {/* Outer container to center cards */}
      <div className="container mx-auto px-4">
        <div className="overflow-hidden" ref={scrollRef}>
          <div className="flex w-full">
            {Tours.map((tour, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-1/2 px-4 box-border shrink-0"
              >
                <div className="rounded overflow-hidden shadow-lg group relative h-full bg-white">
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.country}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-blue-400 bg-opacity-95 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out flex flex-col justify-center items-center text-white px-4 text-center z-10">
                      <h3 className="text-xl font-bold">{tour.country}</h3>
                      <p className="text-sm mt-1">STARTING FROM {tour.price}</p>
                      <p className="text-xs mt-2">{tour.description}</p>
                      <div className="mt-2 text-sm flex gap-1 text-yellow-400 justify-center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <div className="mt-2 text-xs font-semibold">{tour.duration}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-blue-400" : "bg-gray-300"
            } hover:bg-blue-400 transition-colors duration-300`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default TourCards;
