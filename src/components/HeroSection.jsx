import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bgVideos = [
  "videos/bg.mp4",
  "videos/bg1.mp4",
  "videos/bg4.mp4"
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % bgVideos.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? bgVideos.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen pt-20 overflow-hidden">
      {/* Stack all videos and fade in the active one */}
      <div className="absolute inset-0 w-full h-full">
        {bgVideos.map((video, index) => (
          <motion.video
            key={index}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-black/50 to-blue-500/500 z-10" />

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-30 left-5 top-1/2 transform -translate-y-1/2 text-white bg-black/30 p-3 rounded-full hover:bg-black/60"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-30 right-5 top-1/2 transform -translate-y-1/2 text-white bg-black/30 p-3 rounded-full hover:bg-black/60"
      >
        <ChevronRight size={30} />
      </button>

      {/* Text Content */}
      <div className="relative z-20 h-full flex items-center text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white">
              WE MAKE AWESOME TOURS
            </h1>
            <p className="text-lg mb-8 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              <br />
              Lorem Ipsum has been the industry's standard.
            </p>
            <button className="cursor-pointer bg-blue-400 text-white py-4 px-6 rounded-4xl border-2 border-blue-400 hover:bg-transparent hover:text-white transition duration-300">
              FIND TOUR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
