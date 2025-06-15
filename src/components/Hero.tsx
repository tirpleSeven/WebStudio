import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 dark:from-primary-900/10 dark:to-secondary-900/10"></div>
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-accent-300/10 dark:bg-accent-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary-300/10 dark:bg-primary-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300">
              Professional Web Development
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-8"
          >
            <span className="text-primary-600 dark:text-primary-500">{language.content.hero.title}</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {language.content.hero.subtitle}
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <a 
              href="#portfolio" 
              className="btn btn-primary text-base sm:text-lg px-8 py-4"
            >
              {language.content.hero.cta.primary}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="#services" 
              className="btn btn-outline text-base sm:text-lg px-8 py-4"
            >
              {language.content.hero.cta.secondary}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;