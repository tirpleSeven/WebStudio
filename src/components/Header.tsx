import React, { useEffect, useState } from 'react';
import { Menu, X, Globe, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: language.content.header.nav.home, href: '#home' },
    { name: language.content.header.nav.services, href: '#services' },
    { name: language.content.header.nav.process, href: '#process' },
    { name: language.content.header.nav.portfolio, href: '#portfolio' },
    { name: language.content.header.nav.testimonials, href: '#testimonials' },
    { name: language.content.header.nav.contact, href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md' 
          : 'bg-transparent dark:bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-3">
              <Zap className="h-8 w-8 text-primary-600 dark:text-primary-500" />
              <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                {language.content.header.logo}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 font-medium transition-colors duration-200 py-2 px-1"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Theme toggle & Language selector */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700" />
            <LanguageSelector />
            <a 
              href="#contact" 
              className="btn btn-primary whitespace-nowrap ml-4"
            >
              {language.content.header.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <div className="flex items-center justify-between">
                  <LanguageSelector />
                  <a 
                    href="#contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="btn btn-primary ml-4"
                  >
                    {language.content.header.cta}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;