import React, { useState } from 'react';
import { Code, Palette, BarChart, Globe, Server, Smartphone, PenTool, Lock, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const serviceIcons = [
    <Palette className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    <Code className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    <BarChart className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    <Globe className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    <Server className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    <Smartphone className="h-6 w-6 text-primary-600 dark:text-primary-500" />
  ];

  return (
    <section id="services" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="section-title-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {language.content.services.title}
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {language.content.services.subtitle}
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {language.content.services.items.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="card card-hover p-6 flex flex-col"
              onClick={() => setActiveService(index)}
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full w-fit mb-5">
                {serviceIcons[index]}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
              <button
                onClick={() => setActiveService(index)}
                className="flex items-center text-primary-600 dark:text-primary-500 hover:text-primary-700 dark:hover:text-primary-400 font-medium transition-colors mt-auto"
              >
                Learn More 
                <Plus className="h-4 w-4 ml-1" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Detail Modal */}
        {activeService !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                      {serviceIcons[activeService]}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {language.content.services.items[activeService].title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setActiveService(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {language.content.services.items[activeService].description}
                </p>
                
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What We Offer:</h4>
                <ul className="space-y-3 mb-6">
                  {language.content.services.items[activeService].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 dark:text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setActiveService(null)}
                    className="btn btn-outline mr-3"
                  >
                    Close
                  </button>
                  <a 
                    href="#contact" 
                    onClick={() => setActiveService(null)}
                    className="btn btn-primary"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

// Adding the Check icon component since it was missing in the imports
const Check: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default Services;