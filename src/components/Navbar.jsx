// Navbar.jsx
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items and their matching section IDs
  const navItems = [
    { label: 'HOME SLIDER', id: 'home' },
    { label: 'SERVICE', id: 'service' },
    { label: 'PACKAGE', id: 'package' },
    { label: 'TOP DEALS', id: 'top-deals' },
    { label: 'OFFER', id: 'offer' },
    { label: 'GALLERY', id: 'gallery' },
    { label: 'BLOG', id: 'blog' },
    { label: 'SHOP', id: 'shop' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black/70 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-white">Travels</h1>
        </div>

        <div className="hidden md:flex space-x-7">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-medium text-white hover:text-blue-400 transition"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
