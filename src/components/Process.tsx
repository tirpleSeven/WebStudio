import React from 'react';
import { FileCode2, Workflow, PenSquare, ListChecks, Rocket, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and target audience to create a solid foundation for your project.',
    icon: <MessageSquare className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
  },
  {
    id: 2,
    title: 'Strategy & Planning',
    description: 'We develop a comprehensive plan including site architecture, content strategy, and technical requirements.',
    icon: <Workflow className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
  },
  {
    id: 3,
    title: 'Design',
    description: 'Our designers create beautiful, intuitive interfaces that reflect your brand and enhance user experience.',
    icon: <PenSquare className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
  },
  {
    id: 4,
    title: 'Development',
    description: 'We build your website using modern technologies and best practices for performance and security.',
    icon: <FileCode2 className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
  },
  {
    id: 5,
    title: 'Testing & Review',
    description: 'Rigorous testing ensures your website works flawlessly across all devices, browsers, and user scenarios.',
    icon: <ListChecks className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
  },
  {
    id: 6,
    title: 'Launch & Support',
    description: 'We handle the deployment and provide ongoing support to ensure your website continues to perform optimally.',
    icon: <Rocket className="h-6 w-6 text-primary-600 dark:text-primary-500" />,
  },
];

const Process: React.FC = () => {
  const [ref, inView] = useInView({
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
    <section id="process" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="section-title-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Our Process
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How we transform your ideas into successful digital products
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {processSteps.map((step) => (
            <motion.div 
              key={step.id}
              variants={itemVariants}
              className="relative"
            >
              <div className="card p-6 h-full flex flex-col">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-700 flex items-center justify-center text-white font-bold shadow-lg">
                  {step.id}
                </div>
                <div className="mt-6 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
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
            className="btn btn-primary"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;