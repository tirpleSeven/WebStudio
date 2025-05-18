import React, { useState } from 'react';
import { ExternalLink, Code, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  longDescription: string;
  link?: string;
  features: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    category: 'E-commerce',
    tags: ['Web Design', 'Web Development', 'E-commerce'],
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A fully responsive e-commerce website with advanced filtering, search, and checkout capabilities.',
    longDescription: 'We designed and developed a modern e-commerce platform that allows for seamless product browsing, advanced filtering, and a streamlined checkout process. The platform includes inventory management, order tracking, and analytics dashboards for the client.',
    link: '#',
    features: [
      'Responsive design for all devices',
      'Advanced product filtering and search',
      'Secure payment processing',
      'Customer account management',
      'Order tracking and history',
      'Admin dashboard for inventory management'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS']
  },
  {
    id: 2,
    title: 'Corporate Website Redesign',
    category: 'Business',
    tags: ['Web Design', 'UI/UX', 'Corporate'],
    image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete redesign of a corporate website focusing on brand storytelling and lead generation.',
    longDescription: 'We completely redesigned a corporate website to better reflect the company\'s brand identity and improve lead generation. The new design focuses on storytelling, clear service offerings, and conversion optimization throughout the user journey.',
    link: '#',
    features: [
      'Modern brand-aligned design',
      'Optimized lead generation forms',
      'Interactive service showcases',
      'Team member profiles',
      'Case study portfolio',
      'Integrated blog platform'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'HubSpot']
  },
  {
    id: 3,
    title: 'Real Estate Listing Platform',
    category: 'Real Estate',
    tags: ['Web Development', 'Real Estate', 'Maps Integration'],
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A sophisticated platform for real estate listings with map integration and advanced search features.',
    longDescription: 'We built a comprehensive real estate platform that allows users to search for properties using various criteria, view property details with high-quality images, and contact agents directly. The platform includes map integration to visualize property locations and neighborhood amenities.',
    link: '#',
    features: [
      'Advanced property search filters',
      'Interactive maps integration',
      'Virtual tours capability',
      'Agent profiles and contact system',
      'Saved searches and favorites',
      'Market trend analytics'
    ],
    technologies: ['React', 'Next.js', 'PostgreSQL', 'Google Maps API', 'Firebase']
  },
  {
    id: 4,
    title: 'Healthcare Patient Portal',
    category: 'Healthcare',
    tags: ['Web Development', 'Healthcare', 'Accessibility'],
    image: 'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A secure patient portal for a healthcare provider with appointment scheduling and record access.',
    longDescription: 'We developed a secure, HIPAA-compliant patient portal that allows users to schedule appointments, access their medical records, communicate with healthcare providers, and manage prescriptions. The platform prioritizes accessibility and ease of use for all patients.',
    link: '#',
    features: [
      'Secure patient authentication',
      'Appointment scheduling system',
      'Medical records access',
      'Secure messaging with providers',
      'Prescription management',
      'Payment processing'
    ],
    technologies: ['Angular', 'Express', 'MySQL', 'Azure', 'OAuth 2.0']
  },
  {
    id: 5,
    title: 'Food Delivery Mobile App',
    category: 'Mobile',
    tags: ['Mobile Development', 'UI/UX', 'Food & Beverage'],
    image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A user-friendly mobile app for food ordering and delivery with real-time order tracking.',
    longDescription: 'We designed and developed a mobile application for ordering food from local restaurants with real-time order tracking, estimated delivery times, and secure payment processing. The app includes features for saving favorite orders, restaurant ratings, and promotional offers.',
    link: '#',
    features: [
      'Restaurant browsing and searching',
      'Menu customization options',
      'Real-time order tracking',
      'Secure payment processing',
      'Order history and reordering',
      'Restaurant ratings and reviews'
    ],
    technologies: ['React Native', 'Redux', 'Firebase', 'Google Maps API', 'Stripe']
  },
  {
    id: 6,
    title: 'Educational Learning Platform',
    category: 'Education',
    tags: ['Web Development', 'Education', 'E-learning'],
    image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'An interactive learning platform with course management, progress tracking, and certification.',
    longDescription: 'We built an educational platform that enables institutions to create and manage courses, track student progress, and issue certifications. The platform includes interactive learning materials, quizzes, discussion forums, and a comprehensive analytics dashboard for educators.',
    link: '#',
    features: [
      'Course creation and management',
      'Interactive learning materials',
      'Progress tracking and assessments',
      'Discussion forums and collaboration',
      'Certification generation',
      'Analytics dashboard'
    ],
    technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'AWS', 'WebSockets']
  }
];

const categories = ['All', 'E-commerce', 'Business', 'Real Estate', 'Healthcare', 'Mobile', 'Education'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = filter === 'All'
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
            Our Portfolio
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our recent projects and see what we can do for you
          </motion.p>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center mb-8 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
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
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              layout
              className="group"
            >
              <div 
                className="card overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index} 
                            className="text-xs font-medium px-2 py-1 rounded-full bg-white/20 text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-gray-200 text-sm">{project.description}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary-600/20 dark:bg-primary-800/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="rounded-full bg-white text-primary-600 p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
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
          {selectedProject && (
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
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-72 object-cover"
                  />
                  <button 
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    onClick={() => setSelectedProject(null)}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs font-medium px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedProject.longDescription}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-primary-600 dark:text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {selectedProject.link && (
                    <div className="mt-6 flex justify-end">
                      <a 
                        href={selectedProject.link} 
                        className="btn btn-primary flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;