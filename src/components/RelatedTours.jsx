import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const tours = [
  {
    name: "Black Sea",
    oldPrice: "$650",
    newPrice: "$450",
    image: "/images/related1.png",
    description:
      "Creativity is intelligence having fun. Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    name: "Gallipoli",
    oldPrice: "$650",
    newPrice: "$450",
    image: "/images/related2.png",
    description:
      "Creativity is intelligence having fun. Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    name: "Pamukkale",
    oldPrice: "$650",
    newPrice: "$450",
    image: "/images/related3.png",
    description:
      "Creativity is intelligence having fun. Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    name: "Ephesus",
    oldPrice: "$650",
    newPrice: "$450",
    image: "/images/related4.png",
    description:
      "Creativity is intelligence having fun. Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    name: "Cappadocia",
    oldPrice: "$650",
    newPrice: "$450",
    image: "/images/related5.png",
    description:
      "Creativity is intelligence having fun. Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    name: "Istanbul",
    oldPrice: "$650",
    newPrice: "$450",
    image: "/images/related6.png",
    description:
      "Creativity is intelligence having fun. Lorem ipsum dolor sit amet, consectetur.",
  },
];

const RelatedTours = () => {
  const scrollRef = useRef(null);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(tours.length / itemsPerPage);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    const scrollAmount = scrollRef.current.offsetWidth * index;
    scrollRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentIndex(index);
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      {/* Section Heading */}
      <div className="text-center px-4 mb-12">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">RELATED TOURS</h2>
        <div className="w-24 h-2 bg-blue-400 mx-auto mb-4"></div>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-600">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat.
        </p>
      </div>

      {/* Scrollable Cards */}
      <div className="overflow-hidden" ref={scrollRef}>
        <div className="flex w-full">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full md:w-1/3 px-4 shrink-0 box-border"
            >
              <div className="border border-gray-200 rounded shadow-sm bg-white hover:shadow-lg transition duration-300 group">
                <div className="relative overflow-hidden rounded-t">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white px-4 py-2 shadow-lg rounded">
                    <p className="text-sm font-semibold text-gray-600 line-through">{tour.oldPrice}</p>
                    <p className="text-lg font-bold text-black">{tour.newPrice}</p>
                    <div className="flex mt-1 text-blue-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tour.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{tour.description}</p>
                  <a
                    href="#"
                    className="text-blue-400 text-sm font-semibold hover:underline"
                  >
                    VIEW DETAILS
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-blue-400" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default RelatedTours;
