import React, { useState } from 'react';
import { Code, Palette, BarChart, Globe, Server, Smartphone, PenTool, Lock, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Custom designs that make your brand stand out with modern aesthetics and user-friendly interfaces.',
    icon: <Palette className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    features: [
      'Responsive layouts for all devices',
      'UI/UX design with user research',
      'Brand-aligned visual identity',
      'Wireframing and prototyping',
      'Accessibility compliance'
    ]
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Fast, responsive, and reliable websites built with modern technologies and best practices.',
    icon: <Code className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    features: [
      'Frontend development (React, Vue, Angular)',
      'Backend development (Node.js, PHP, Python)',
      'Database design and management',
      'API development and integration',
      'Performance optimization'
    ]
  },
  {
    id: 3,
    title: 'E-Commerce Solutions',
    description: 'Secure and intuitive online stores that drive sales and provide great shopping experiences.',
    icon: <BarChart className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    features: [
      'Custom e-commerce platforms',
      'Shopping cart and checkout systems',
      'Payment gateway integration',
      'Inventory management',
      'Mobile shopping experiences'
    ]
  },
  {
    id: 4,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive more organic traffic to your website.',
    icon: <Globe className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    features: [
      'Keyword research and strategy',
      'On-page and technical SEO',
      'Content optimization',
      'Performance improvement',
      'SEO analytics and reporting'
    ]
  },
  {
    id: 5,
    title: 'Backend Solutions',
    description: 'Robust server-side applications and APIs that power your digital products.',
    icon: <Server className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    features: [
      'Custom API development',
      'Database design and optimization',
      'Cloud infrastructure setup',
      'Serverless functions',
      'Authentication and authorization'
    ]
  },
  {
    id: 6,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that engage users on the go.',
    icon: <Smartphone className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    features: [
      'iOS and Android development',
      'React Native & Flutter solutions',
      'Mobile UI/UX design',
      'App Store optimization',
      'Push notifications integration'
    ]
  }
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="services" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="section-title-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive web solutions tailored to your business needs
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="card card-hover p-6 flex flex-col"
              onClick={() => setActiveService(service)}
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full w-fit mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
              <button
                onClick={() => setActiveService(service)}
                className="flex items-center text-primary-600 dark:text-primary-500 hover:text-primary-700 dark:hover:text-primary-400 font-medium transition-colors mt-auto"
              >
                Learn More 
                <Plus className="h-4 w-4 ml-1" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Detail Modal */}
        {activeService && (
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
                      {activeService.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{activeService.title}</h3>
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
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">{activeService.description}</p>
                
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What We Offer:</h4>
                <ul className="space-y-3 mb-6">
                  {activeService.features.map((feature, index) => (
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