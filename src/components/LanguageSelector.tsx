import React, { useState } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  content: {
    header: {
      logo: string;
      nav: {
        home: string;
        services: string;
        process: string;
        portfolio: string;
        testimonials: string;
        contact: string;
      };
      cta: string;
    };
    hero: {
      title: string;
      subtitle: string;
      cta: {
        primary: string;
        secondary: string;
      };
    };
    services: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
        features: string[];
      }>;
    };
    process: {
      title: string;
      subtitle: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    portfolio: {
      title: string;
      subtitle: string;
      categories: {
        all: string;
        ecommerce: string;
        business: string;
        realEstate: string;
        healthcare: string;
        mobile: string;
        education: string;
      };
      projects: Array<{
        title: string;
        description: string;
        longDescription: string;
        features: string[];
      }>;
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: Array<{
        content: string;
        name: string;
        role: string;
        company: string;
      }>;
    };
    contact: {
      title: string;
      subtitle: string;
      info: {
        phone: string;
        email: string;
        address: string;
      };
      form: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
        submit: string;
        success: string;
      };
      social: {
        follow: string;
      };
    };
  };
}

export const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    content: {
      header: {
        logo: 'WebStudio',
        nav: {
          home: 'Home',
          services: 'Services',
          process: 'Process',
          portfolio: 'Portfolio',
          testimonials: 'Testimonials',
          contact: 'Contact'
        },
        cta: 'Get in Touch'
      },
      hero: {
        title: 'Transform Your Digital Presence With Beautiful Websites',
        subtitle: 'We create stunning, responsive websites that help your business stand out. From concept to launch, we\'re with you every step of the way.',
        cta: {
          primary: 'View Our Work',
          secondary: 'Explore Services'
        }
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive web solutions tailored to your business needs',
        items: [
          {
            title: 'Web Design',
            description: 'Custom designs that make your brand stand out with modern aesthetics and user-friendly interfaces.',
            features: [
              'Responsive layouts for all devices',
              'UI/UX design with user research',
              'Brand-aligned visual identity',
              'Wireframing and prototyping',
              'Accessibility compliance'
            ]
          },
          {
            title: 'Web Development',
            description: 'Fast, responsive, and reliable websites built with modern technologies and best practices.',
            features: [
              'Frontend development (React, Vue, Angular)',
              'Backend development (Node.js, PHP, Python)',
              'Database design and management',
              'API development and integration',
              'Performance optimization'
            ]
          },
          {
            title: 'E-Commerce Solutions',
            description: 'Secure and intuitive online stores that drive sales and provide great shopping experiences.',
            features: [
              'Custom e-commerce platforms',
              'Shopping cart and checkout systems',
              'Payment gateway integration',
              'Inventory management',
              'Mobile shopping experiences'
            ]
          },
          {
            title: 'SEO Optimization',
            description: 'Improve your search rankings and drive more organic traffic to your website.',
            features: [
              'Keyword research and strategy',
              'On-page and technical SEO',
              'Content optimization',
              'Performance improvement',
              'SEO analytics and reporting'
            ]
          },
          {
            title: 'Backend Solutions',
            description: 'Robust server-side applications and APIs that power your digital products.',
            features: [
              'Custom API development',
              'Database design and optimization',
              'Cloud infrastructure setup',
              'Serverless functions',
              'Authentication and authorization'
            ]
          },
          {
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications that engage users on the go.',
            features: [
              'iOS and Android development',
              'React Native & Flutter solutions',
              'Mobile UI/UX design',
              'App Store optimization',
              'Push notifications integration'
            ]
          }
        ]
      },
      process: {
        title: 'Our Process',
        subtitle: 'How we transform your ideas into successful digital products',
        steps: [
          {
            title: 'Discovery',
            description: 'We start by understanding your business, goals, and target audience to create a solid foundation for your project.'
          },
          {
            title: 'Strategy & Planning',
            description: 'We develop a comprehensive plan including site architecture, content strategy, and technical requirements.'
          },
          {
            title: 'Design',
            description: 'Our designers create beautiful, intuitive interfaces that reflect your brand and enhance user experience.'
          },
          {
            title: 'Development',
            description: 'We build your website using modern technologies and best practices for performance and security.'
          },
          {
            title: 'Testing & Review',
            description: 'Rigorous testing ensures your website works flawlessly across all devices, browsers, and user scenarios.'
          },
          {
            title: 'Launch & Support',
            description: 'We handle the deployment and provide ongoing support to ensure your website continues to perform optimally.'
          }
        ]
      },
      portfolio: {
        title: 'Our Portfolio',
        subtitle: 'Explore our recent projects and see what we can do for you',
        categories: {
          all: 'All',
          ecommerce: 'E-commerce',
          business: 'Business',
          realEstate: 'Real Estate',
          healthcare: 'Healthcare',
          mobile: 'Mobile',
          education: 'Education'
        },
        projects: [
          {
            title: 'Modern E-commerce Platform',
            description: 'A fully responsive e-commerce website with advanced filtering, search, and checkout capabilities.',
            longDescription: 'We designed and developed a modern e-commerce platform that allows for seamless product browsing, advanced filtering, and a streamlined checkout process. The platform includes inventory management, order tracking, and analytics dashboards for the client.',
            features: [
              'Responsive design for all devices',
              'Advanced product filtering and search',
              'Secure payment processing',
              'Customer account management',
              'Order tracking and history',
              'Admin dashboard for inventory management'
            ]
          }
        ]
      },
      testimonials: {
        title: 'Client Testimonials',
        subtitle: 'Hear what our clients have to say about our work',
        items: [
          {
            content: 'Working with this team was a game-changer for our online presence. They took the time to understand our brand and goals, then delivered a website that exceeded our expectations. The increased conversion rates speak for themselves!',
            name: 'Sarah Johnson',
            role: 'Marketing Director',
            company: 'TechCorp Inc.'
          }
        ]
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Have a project in mind? Let\'s discuss how we can help',
        info: {
          phone: '(123) 456-7890',
          email: 'contact@webstudio.com',
          address: '123 Web Street, San Francisco, CA 94103'
        },
        form: {
          name: 'Full Name',
          email: 'Email Address',
          phone: 'Phone Number',
          subject: 'Subject',
          message: 'Message',
          submit: 'Send Message',
          success: 'Message sent successfully! We\'ll get back to you soon.'
        },
        social: {
          follow: 'Follow Us'
        }
      }
    }
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    content: {
      header: {
        logo: 'WebStudio',
        nav: {
          home: 'Главная',
          services: 'Услуги',
          process: 'Процесс',
          portfolio: 'Портфолио',
          testimonials: 'Отзывы',
          contact: 'Контакты'
        },
        cta: 'Связаться'
      },
      // ... rest of Russian content remains the same
    }
  },
  {
    code: 'hy',
    name: 'Armenian',
    nativeName: 'Հայերեն',
    flag: '🇦🇲',
    content: {
      header: {
        logo: 'WebStudio',
        nav: {
          home: 'Գլխավոր',
          services: 'Ծառայություններ',
          process: 'Գործընթաց',
          portfolio: 'Պորտֆոլիո',
          testimonials: 'Կարծիքներ',
          contact: 'Կապ'
        },
        cta: 'Կապ Հաստատել'
      },
      // ... rest of Armenian content remains the same
    }
  }
];

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg">{language.flag}</span>
        <span className="hidden sm:inline font-medium">{language.code.toUpperCase()}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu"
          >
            <div className="py-1" role="none">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang)}
                  className={`
                    w-full text-left px-4 py-2 text-sm flex items-center justify-between
                    ${language.code === lang.code
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }
                  `}
                  role="menuitem"
                >
                  <div className="flex items-center">
                    <span className="text-lg mr-2">{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                  </div>
                  {language.code === lang.code && (
                    <Check className="h-4 w-4 text-primary-600 dark:text-primary-500" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;