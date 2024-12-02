import { useState } from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic navigation links
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#portfolio', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="text-yellow-500 text-xl">Shivsambh’s Code Journey</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:scale-105 transition-all"
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              {/* <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-800 text-white px-4 py-1 rounded-lg pl-8"
                />
                <FiSearch className="absolute left-2 top-2 text-gray-400" />
              </div> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-gray-300 hover:text-white px-3 py-2"
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
