import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "HOTEL BOOKING",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      icon: "images/hotel.png",
      video: "videos/hotel.mp4",
      overlayColor: "bg-black/60",
    },
    {
      title: "FLIGHT BOOKING",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      icon: "images/flight.png",
      video: "videos/flight1.mp4",
      overlayColor: "bg-blue-900/60",
    },
    {
      title: "TICKET BOOKING",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      icon: "images/ticket.png",
      video: "videos/ticket.mp4",
      overlayColor: "bg-gray-900/60",
    },
    {
      title: "CRUISES BOOKING",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      icon: "images/rail1.png",
      video: "videos/cruises.mp4",
      overlayColor: "bg-indigo-900/60",
    },
    {
      title: "RAIL BOOKING",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      icon: "images/train.png",
      video: "videos/rail.mp4",
      overlayColor: "bg-green-900/60",
    },
    {
      title: "AMAZING TOUR",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      icon: "images/star.png",
      video: "videos/amazing.mp4",
      overlayColor: "bg-red-900/60",
    },
  ];

  return (
    <section className="py-16 bg-[#eef1f2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">VROMON SERVICES</h1>
          <div className="w-24 h-2 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: false });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden bg-white rounded-lg shadow-sm transition-all text-center hover:shadow-lg"
              >
                {/* Background Video */}
                {service.video && (
                  <motion.video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-0"
                  >
                    <source src={service.video} type="video/mp4" />
                  </motion.video>
                )}

                {/* Colored Overlay */}
                <div
                  className={`absolute inset-0 ${service.overlayColor} opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-10`}
                ></div>

                {/* Content */}
                <div className="relative z-20 p-8">
                  <div className="flex justify-center mb-4">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-8 h-10 object-contain transition-all duration-300 group-hover:opacity-0"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-4 transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
