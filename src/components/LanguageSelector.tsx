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
    };
    process: {
      title: string;
      subtitle: string;
    };
    portfolio: {
      title: string;
      subtitle: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
      form: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
        submit: string;
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
        subtitle: 'Comprehensive web solutions tailored to your business needs'
      },
      process: {
        title: 'Our Process',
        subtitle: 'How we transform your ideas into successful digital products'
      },
      portfolio: {
        title: 'Our Portfolio',
        subtitle: 'Explore our recent projects and see what we can do for you'
      },
      testimonials: {
        title: 'Client Testimonials',
        subtitle: 'Hear what our clients have to say about our work'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Have a project in mind? Let\'s discuss how we can help',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          phone: 'Phone Number',
          subject: 'Subject',
          message: 'Message',
          submit: 'Send Message'
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
      hero: {
        title: 'Преобразуйте Ваше Цифровое Присутствие с Помощью Красивых Сайтов',
        subtitle: 'Мы создаем потрясающие, адаптивные веб-сайты, которые помогают вашему бизнесу выделиться. От концепции до запуска мы с вами на каждом этапе.',
        cta: {
          primary: 'Наши Работы',
          secondary: 'Изучить Услуги'
        }
      },
      services: {
        title: 'Наши Услуги',
        subtitle: 'Комплексные веб-решения, адаптированные под ваши бизнес-потребности'
      },
      process: {
        title: 'Наш Процесс',
        subtitle: 'Как мы превращаем ваши идеи в успешные цифровые продукты'
      },
      portfolio: {
        title: 'Наше Портфолио',
        subtitle: 'Изучите наши последние проекты и узнайте, что мы можем сделать для вас'
      },
      testimonials: {
        title: 'Отзывы Клиентов',
        subtitle: 'Узнайте, что говорят о нашей работе наши клиенты'
      },
      contact: {
        title: 'Свяжитесь с Нами',
        subtitle: 'Есть проект? Давайте обсудим, как мы можем помочь',
        form: {
          name: 'Полное Имя',
          email: 'Электронная Почта',
          phone: 'Номер Телефона',
          subject: 'Тема',
          message: 'Сообщение',
          submit: 'Отправить Сообщение'
        }
      }
    }
  },
  { 
    code: 'hy',
    name: 'Armenian',
    nativeName: 'Հայերեն',
    flag: '🇦🇲',
    content: {
      hero: {
        title: 'Վերափոխեք Ձեր Թվային Ներկայությունը Գեղեցիկ Կայքերով',
        subtitle: 'Մենք ստեղծում ենք գեղեցիկ, հարմարվող կայքեր, որոնք օգնում են ձեր բիզնեսին առանձնանալ: Գաղափարից մինչև թողարկում, մենք ձեզ հետ ենք ամեն քայլափոխին:',
        cta: {
          primary: 'Դիտել Մեր Աշխատանքները',
          secondary: 'Ուսումնասիրել Ծառայությունները'
        }
      },
      services: {
        title: 'Մեր Ծառայությունները',
        subtitle: 'Համապարփակ վեբ լուծումներ՝ հարմարեցված ձեր բիզնեսի կարիքներին'
      },
      process: {
        title: 'Մեր Գործընթացը',
        subtitle: 'Ինչպես ենք մենք ձեր գաղափարները վերածում հաջողված թվային արտադրանքի'
      },
      portfolio: {
        title: 'Մեր Պորտֆոլիոն',
        subtitle: 'Ուսումնասիրեք մեր վերջին նախագծերը և տեսեք, թե ինչ կարող ենք անել ձեզ համար'
      },
      testimonials: {
        title: 'Հաճախորդների Կարծիքներ',
        subtitle: 'Իմացեք, թե ինչ են ասում մեր հաճախորդները մեր աշխատանքի մասին'
      },
      contact: {
        title: 'Կապ Հաստատեք',
        subtitle: 'Ունե՞ք նախագիծ: Եկեք քննարկենք, թե ինչպես կարող ենք օգնել',
        form: {
          name: 'Անուն Ազգանուն',
          email: 'Էլ. Փոստ',
          phone: 'Հեռախոսահամար',
          subject: 'Թեմա',
          message: 'Հաղորդագրություն',
          submit: 'Ուղարկել Հաղորդագրություն'
        }
      }
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