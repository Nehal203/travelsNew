import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    url: "/images/tour.png",
    title: "TOURS",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    url: "/images/flights.png",
    title: "FLIGHTS",
    description:
      "Enjoy the sunny side of life with stunning beaches and golden sands.",
  },
  {
    url: "/images/hottel.png",
    title: "HOTELS",
    description:
      "Unleash your wild side with our adventure-packed travel experiences.",
  },
  {
    url: "/images/cruisess.png",
    title: "CRUISES",
    description:
      "Unleash your wild side with our adventure-packed travel experiences.",
  },
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const totalPages = galleryImages.length;

  const scrollToIndex = (index) => {
    const scrollAmount = scrollRef.current.offsetWidth * index;
    scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + totalPages) % totalPages;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % totalPages;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentIndex(index);
    };

    const ref = scrollRef.current;
    if (ref) ref.addEventListener("scroll", handleScroll);
    return () => {
      if (ref) ref.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-16 bg-white relative">
      {/* Heading */}
      <div className="text-center px-4">
        <h2 className="text-5xl font-bold mb-4">GALLERY</h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat.
        </p>
      </div>

      {/* Scrollable Images */}
      <div className="mt-10 overflow-hidden" ref={scrollRef}>
        <div className="flex transition-all duration-500 w-full">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="min-w-full box-border px-4"
            >
              <div className="relative rounded-lg shadow-lg overflow-hidden group">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-700"
                />
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/30"
                >
                  <div className="bg-white/90 px-6 py-4 text-center rounded shadow-md max-w-md">
                    <motion.h3
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl font-bold text-gray-800 mb-2"
                    >
                      {img.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-700"
                    >
                      {img.description}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center mt-8 gap-8">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-gray-100 hover:bg-blue-400 hover:text-white transition-colors duration-300"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-gray-100 hover:bg-blue-400 hover:text-white transition-colors duration-300"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default GallerySection;