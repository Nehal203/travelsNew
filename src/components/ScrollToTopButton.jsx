import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed z-[1000] cursor-pointer flex items-center justify-center rounded-full border-[3px] border-blue-400 bg-blue-400 shadow-md transition-opacity duration-300 
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
        w-12 h-12 bottom-8 right-8 
        sm:w-9 sm:h-9 sm:bottom-5 sm:right-5 
        max-sm:w-7 max-sm:h-7 max-sm:bottom-2.5 max-sm:right-2.5
      `}
    >
      <span className="text-xl text-white">↑</span>
    </button>
  );
};

export default ScrollToTopButton;
