import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show floating button after user has scrolled down a bit
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        if (isOpen) setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute bottom-16 right-0 mb-4 card p-6 w-64 shadow-soft-lg"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Us</h3>
                  
                  <a 
                    href="tel:+11234567890" 
                    className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-200"
                  >
                    <Phone className="h-5 w-5 text-primary-600 dark:text-primary-500 mr-3" />
                    <span>(123) 456-7890</span>
                  </a>
                  
                  <a 
                    href="mailto:contact@coolservices.com" 
                    className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-200"
                  >
                    <Mail className="h-5 w-5 text-primary-600 dark:text-primary-500 mr-3" />
                    <span>contact@coolservices.com</span>
                  </a>
                  
                  <a 
                    href="#contact" 
                    className="mt-2 btn btn-primary w-full justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Send Message
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleOpen}
            className={`p-4 rounded-full shadow-lg flex items-center justify-center text-white ${
              isOpen ? 'bg-gray-700 hover:bg-gray-800' : 'bg-primary-600 hover:bg-primary-700'
            } transition-colors duration-200`}
            aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;