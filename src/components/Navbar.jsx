import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'; // Install lucide-react if not already used

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <h1 className="text-2xl font-bold text-white">Travels</h1>

        {/* Desktop Nav */}
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

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 text-white px-4 py-4 space-y-4">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="block text-lg font-medium hover:text-blue-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
