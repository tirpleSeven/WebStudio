import React from 'react';
import { FileCode2, Workflow, PenSquare, ListChecks, Rocket, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const Process: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { language } = useLanguage();

  const processIcons = [
    <MessageSquare className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    <Workflow className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    <PenSquare className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    <FileCode2 className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    <ListChecks className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
    <Rocket className="h-6 w-6 text-primary-600 dark:text-primary-500" />
  ];

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
    <section id="process" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="section-title-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {language.content.process.title}
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {language.content.process.subtitle}
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {language.content.process.steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="card h-full flex flex-col">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-700 flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="mt-8 mb-6">
                  {processIcons[index]}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#contact" 
            className="btn btn-primary text-lg px-8 py-4"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;