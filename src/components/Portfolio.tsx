import React, { useState } from 'react';
import { ExternalLink, Code, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { language } = useLanguage();

  const categories = [
    { key: 'all', label: language.content.portfolio.categories.all },
    { key: 'ecommerce', label: language.content.portfolio.categories.ecommerce },
    { key: 'business', label: language.content.portfolio.categories.business },
    { key: 'realEstate', label: language.content.portfolio.categories.realEstate },
    { key: 'healthcare', label: language.content.portfolio.categories.healthcare },
    { key: 'mobile', label: language.content.portfolio.categories.mobile },
    { key: 'education', label: language.content.portfolio.categories.education }
  ];

  const projects = [
    {
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Modern E-commerce Platform',
      description: 'A fully responsive e-commerce website with advanced features',
      longDescription: 'A comprehensive e-commerce solution with advanced filtering, real-time inventory, and seamless checkout process.',
      features: ['Responsive design', 'Advanced filtering', 'Secure payments', 'Inventory management']
    },
    {
      category: 'business',
      image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Corporate Website Redesign',
      description: 'Modern corporate website with dynamic features',
      longDescription: 'Complete redesign of a corporate website focusing on user experience and modern design principles.',
      features: ['Custom CMS', 'Interactive elements', 'Performance optimization', 'Analytics integration']
    },
    {
      category: 'realEstate',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Real Estate Platform',
      description: 'Property listing and management system',
      longDescription: 'Comprehensive real estate platform with property listings, virtual tours, and agent management.',
      features: ['Property search', 'Virtual tours', 'Agent profiles', 'Booking system']
    },
    {
      category: 'healthcare',
      image: 'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Healthcare Management System',
      description: 'Digital healthcare solution for clinics',
      longDescription: 'Modern healthcare management system with appointment scheduling and patient records.',
      features: ['Appointment booking', 'Patient portal', 'Medical records', 'Telemedicine support']
    },
    {
      category: 'mobile',
      image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Fitness Tracking App',
      description: 'Mobile app for fitness and health tracking',
      longDescription: 'Comprehensive fitness tracking application with workout plans and progress monitoring.',
      features: ['Workout tracking', 'Nutrition planning', 'Progress analytics', 'Social features']
    },
    {
      category: 'education',
      image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'E-Learning Platform',
      description: 'Online education and course management system',
      longDescription: 'Feature-rich e-learning platform with course management and student progress tracking.',
      features: ['Course creation', 'Student management', 'Progress tracking', 'Interactive quizzes']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  return (
    <section id="portfolio" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="section-title-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {language.content.portfolio.title}
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {language.content.portfolio.subtitle}
          </motion.p>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === category.key
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              layout
              className="group"
            >
              <div 
                className="card overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-0"
                onClick={() => setSelectedProject(index)}
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-200 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary-600/20 dark:bg-primary-800/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(index);
                      }}
                      className="rounded-full bg-white text-primary-600 p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg"
                    >
                      <PlusCircle className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 p-4 flex items-center justify-center bg-black/70"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img 
                    src={filteredProjects[selectedProject].image}
                    alt={filteredProjects[selectedProject].title}
                    className="w-full h-72 object-cover"
                  />
                  <button 
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {filteredProjects[selectedProject].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {filteredProjects[selectedProject].longDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {filteredProjects[selectedProject].features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-primary-600 dark:text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="btn btn-outline"
                    >
                      Close
                    </button>
                    <a 
                      href="#contact" 
                      onClick={() => setSelectedProject(null)}
                      className="btn btn-primary"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Adding the Check and X icons since they were missing in the imports
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

const X: React.FC<{ className?: string }> = ({ className }) => (
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
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default Portfolio;