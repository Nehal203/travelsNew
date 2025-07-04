import { useState, useRef, useEffect } from 'react';

const clientLogos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
];

const Clients = () => {
  const [isHovering, setIsHovering] = useState(false);
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const startTimeRef = useRef(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const marqueeWidth = marqueeRef.current?.scrollWidth / 2 || 0;
    const duration = 20000; // 20 seconds for one full loop

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      progressRef.current = elapsed / duration;
      
      // Reset progress when one loop completes
      if (progressRef.current >= 1) {
        progressRef.current = 0;
        startTimeRef.current = timestamp;
      }

      if (!isHovering && marqueeRef.current) {
        positionRef.current = -marqueeWidth * progressRef.current;
        marqueeRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isHovering]);

  return (
    <section className="bg-gray-100 py-12 overflow-hidden">
      <div
        className="bg-cover bg-center py-12"
        style={{
          backgroundImage: `url('https://wpdemothemes.com/vromon/wp-content/uploads/2017/11/static-bg.jpg')`,
        }}
      >
        <div className="max-w-6xl mx-auto overflow-hidden">
          <div 
            className="scroll-wrapper"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              ref={marqueeRef}
              className="flex w-max"
              style={{
                transform: `translateX(${positionRef.current}px)`,
                whiteSpace: "nowrap",
                transition: isHovering ? 'none' : 'transform 0.1s linear',
              }}
            >
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-md shadow-md w-40 h-24 mx-4 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${idx + 1}`}
                    className="max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;