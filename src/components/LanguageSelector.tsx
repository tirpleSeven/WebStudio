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
          },
          // ... other projects
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
          },
          // ... other testimonials
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
        subtitle: 'Комплексные веб-решения, адаптированные под ваши бизнес-потребности',
        items: [
          {
            title: 'Веб-Дизайн',
            description: 'Индивидуальные дизайны, которые выделяют ваш бренд современной эстетикой и удобными интерфейсами.',
            features: [
              'Адаптивные макеты для всех устройств',
              'UI/UX дизайн с исследованием пользователей',
              'Визуальная идентичность бренда',
              'Создание прототипов',
              'Соответствие стандартам доступности'
            ]
          },
          {
            title: 'Веб-Разработка',
            description: 'Быстрые, отзывчивые и надежные веб-сайты, созданные с использованием современных технологий.',
            features: [
              'Фронтенд разработка (React, Vue, Angular)',
              'Бэкенд разработка (Node.js, PHP, Python)',
              'Проектирование баз данных',
              'Разработка и интеграция API',
              'Оптимизация производительности'
            ]
          },
          {
            title: 'Решения для Электронной Коммерции',
            description: 'Безопасные и интуитивно понятные интернет-магазины, которые увеличивают продажи.',
            features: [
              'Индивидуальные платформы e-commerce',
              'Системы корзины и оформления заказа',
              'Интеграция платежных систем',
              'Управление складом',
              'Мобильный шоппинг'
            ]
          },
          {
            title: 'SEO Оптимизация',
            description: 'Улучшите ваши позиции в поиске и привлеките больше органического трафика.',
            features: [
              'Исследование ключевых слов',
              'Техническая SEO оптимизация',
              'Оптимизация контента',
              'Улучшение производительности',
              'SEO аналитика и отчетность'
            ]
          },
          {
            title: 'Серверные Решения',
            description: 'Надежные серверные приложения и API для ваших цифровых продуктов.',
            features: [
              'Разработка API',
              'Оптимизация баз данных',
              'Настройка облачной инфраструктуры',
              'Serverless функции',
              'Аутентификация и авторизация'
            ]
          },
          {
            title: 'Мобильные Приложения',
            description: 'Нативные и кросс-платформенные мобильные приложения для взаимодействия с пользователями.',
            features: [
              'Разработка для iOS и Android',
              'Решения на React Native и Flutter',
              'Мобильный UI/UX дизайн',
              'Оптимизация для App Store',
              'Интеграция push-уведомлений'
            ]
          }
        ]
      },
      process: {
        title: 'Наш Процесс',
        subtitle: 'Как мы превращаем ваши идеи в успешные цифровые продукты',
        steps: [
          {
            title: 'Исследование',
            description: 'Мы начинаем с понимания вашего бизнеса, целей и целевой аудитории для создания прочной основы проекта.'
          },
          {
            title: 'Стратегия и Планирование',
            description: 'Мы разрабатываем комплексный план, включающий архитектуру сайта, стратегию контента и технические требования.'
          },
          {
            title: 'Дизайн',
            description: 'Наши дизайнеры создают красивые, интуитивно понятные интерфейсы, отражающие ваш бренд.'
          },
          {
            title: 'Разработка',
            description: 'Мы создаем ваш сайт, используя современные технологии и лучшие практики для обеспечения производительности и безопасности.'
          },
          {
            title: 'Тестирование',
            description: 'Тщательное тестирование обеспечивает безупречную работу вашего сайта на всех устройствах и браузерах.'
          },
          {
            title: 'Запуск и Поддержка',
            description: 'Мы осуществляем развертывание и обеспечиваем постоянную поддержку для оптимальной работы вашего сайта.'
          }
        ]
      },
      portfolio: {
        title: 'Наше Портфолио',
        subtitle: 'Изучите наши последние проекты и узнайте, что мы можем сделать для вас',
        categories: {
          all: 'Все',
          ecommerce: 'Электронная коммерция',
          business: 'Бизнес',
          realEstate: 'Недвижимость',
          healthcare: 'Здравоохранение',
          mobile: 'Мобильные',
          education: 'Образование'
        },
        projects: [
          {
            title: 'Современная Платформа Электронной Коммерции',
            description: 'Полностью адаптивный сайт электронной коммерции с расширенной фильтрацией и поиском.',
            longDescription: 'Мы разработали современную платформу электронной коммерции, которая обеспечивает удобный просмотр товаров, расширенную фильтрацию и оптимизированный процесс оформления заказа. Платформа включает управление запасами, отслеживание заказов и аналитические панели для клиента.',
            features: [
              'Адаптивный дизайн для всех устройств',
              'Расширенная фильтрация и поиск товаров',
              'Безопасная обработка платежей',
              'Управление аккаунтами клиентов',
              'Отслеживание и история заказов',
              'Панель администратора для управления запасами'
            ]
          },
          // ... other projects
        ]
      },
      testimonials: {
        title: 'Отзывы Клиентов',
        subtitle: 'Узнайте, что говорят о нашей работе наши клиенты',
        items: [
          {
            content: 'Работа с этой командой стала переломным моментом для нашего онлайн-присутствия. Они уделили время пониманию нашего бренда и целей, а затем создали сайт, превзошедший наши ожидания. Увеличение конверсии говорит само за себя!',
            name: 'Сара Джонсон',
            role: 'Директор по маркетингу',
            company: 'ТехКорп Inc.'
          },
          // ... other testimonials
        ]
      },
      contact: {
        title: 'Свяжитесь с Нами',
        subtitle: 'Есть проект? Давайте обсудим, как мы можем помочь',
        info: {
          phone: '(123) 456-7890',
          email: 'contact@webstudio.com',
          address: '123 Веб Стрит, Сан-Франциско, CA 94103'
        },
        form: {
          name: 'Полное Имя',
          email: 'Электронная Почта',
          phone: 'Номер Телефона',
          subject: 'Тема',
          message: 'Сообщение',
          submit: 'Отправить Сообщение',
          success: 'Сообщение успешно отправлено! Мы скоро свяжемся с вами.'
        },
        social: {
          follow: 'Подписывайтесь на Нас'
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
        subtitle: 'Համապարփակ վեբ լուծումներ՝ հարմարեցված ձեր բիզնեսի կարիքներին',
        items: [
          {
            title: 'Վեբ Դիզայն',
            description: 'Անհատական դիզայններ, որոնք առանձնացնում են ձեր բրենդը ժամանակակից էսթետիկայով և հարմար ինտերֆեյսներով:',
            features: [
              'Հարմարվող մակետներ բոլոր սարքերի համար',
              'UI/UX դիզայն օգտատերերի հետազոտությամբ',
              'Բրենդի վիզուալ ինքնություն',
              'Պրոտոտիպերի ստեղծում',
              'Հասանելիության համապատասխանություն'
            ]
          },
          {
            title: 'Վեբ Ծրագրավորում',
            description: 'Արագ, արձագանքող և հուսալի կայքեր՝ ստեղծված ժամանակակից տեխնոլոգիաներով:',
            features: [
              'Frontend ծրագրավորում (React, Vue, Angular)',
              'Backend ծրագրավորում (Node.js, PHP, Python)',
              'Տվյալների բազաների նախագծում',
              'API մշակում և ինտեգրացիա',
              'Արդյունավետության օպտիմիզացիա'
            ]
          },
          {
            title: 'Էլեկտրոնային Առևտրի Լուծումներ',
            description: 'Անվտանգ և ինտուիտիվ առցանց խանութներ, որոնք մեծացնում են վաճառքները:',
            features: [
              'Անհատական e-commerce պլատֆորմներ',
              'Զամբյուղի և պատվերի համակարգեր',
              'Վճարային համակարգերի ինտեգրացիա',
              'Պահեստի կառավարում',
              'Մոբայլ գնումներ'
            ]
          },
          {
            title: 'SEO Օպտիմիզացիա',
            description: 'Բարելավեք ձեր որոնման դիրքերը և ներգրավեք ավելի շատ օրգանական տրաֆիկ:',
            features: [
              'Բանալի բառերի հետազոտություն',
              'Տեխնիկական SEO օպտիմիզացիա',
              'Բովանդակության օպտիմիզացիա',
              'Արդյունավետության բարելավում',
              'SEO վերլուծություն և հաշվետվություն'
            ]
          },
          {
            title: 'Սերվերային Լուծումներ',
            description: 'Հուսալի սերվերային հավելվածներ և API-ներ ձեր թվային պրոդուկտների համար:',
            features: [
              'API մշակում',
              'Տվյալների բազաների օպտիմիզացիա',
              'Ամպային ենթակառուցվածքի կարգավորում',
              'Serverless ֆունկցիաներ',
              'Նույնականացում և թույլտվություն'
            ]
          },
          {
            title: 'Մոբայլ Հավելվածներ',
            description: 'Նատիվ և կրոս-պլատֆորմ մոբայլ հավելվածներ օգտատերերի հետ փոխազդեցության համար:',
            features: [
              'iOS և Android մշակում',
              'React Native և Flutter լուծումներ',
              'Մոբայլ UI/UX դիզայն',
              'App Store օպտիմիզացիա',
              'Push ծանուցումների ինտեգրացիա'
            ]
          }
        ]
      },
      process: {
        title: 'Մեր Գործընթացը',
        subtitle: 'Ինչպես ենք մենք ձեր գաղափարները վերածում հաջողված թվային արտադրանքի',
        steps: [
          {
            title: 'Հետազոտություն',
            description: 'Մենք սկսում ենք ձեր բիզնեսը, նպատակները և թիրախային լսարանը հասկանալով՝ նախագծի համար ամուր հիմք ստեղծելու համար:'
          },
          {
            title: 'Ռազմավարություն և Պլանավորում',
            description: 'Մենք մշակում ենք համապարփակ պլան, ներառյալ կայքի ճարտարապետությունը, բովանդակության ռազմավարությունը և տեխնիկական պահանջները:'
          },
          {
            title: 'Դիզայն',
            description: 'Մեր դիզայներները ստեղծում են գեղեցիկ, ինտուիտիվ ինտերֆեյսներ, որոնք արտացոլում են ձեր բրենդը:'
          },
          {
            title: 'Մշակում',
            description: 'Մենք կառուցում ենք ձեր կայքը՝ օգտագործելով ժամանակակից տեխնոլոգիաներ և լավագույն փորձը արդյունավետության և անվտանգության համար:'
          },
          {
            title: 'Թեստավորում',
            description: 'Մանրակրկիտ թեստավորումը ապահովում է ձեր կայքի անթերի աշխատանքը բոլոր սարքերի և բրաուզերների վրա:'
          },
          {
            title: 'Թողարկում և Աջակցություն',
            description: 'Մենք իրականացնում ենք տեղակայումը և տրամադրում շարունակական աջակցություն ձեր կայքի օպտիմալ աշխատանքի համար:'
          }
        ]
      },
      portfolio: {
        title: 'Մեր Պորտֆոլիոն',
        subtitle: 'Ուսումնասիրեք մեր վերջին նախագծերը և տեսեք, թե ինչ կարող ենք անել ձեզ համար',
        categories: {
          all: 'Բոլորը',
          ecommerce: 'Էլեկտրոնային առևտուր',
          business: 'Բիզնես',
          realEstate: 'Անշարժ գույք',
          healthcare: 'Առողջապահություն',
          mobile: 'Մոբայլ',
          education: 'Կրթություն'
        },
        projects: [
          {
            title: 'Ժամանակակից Էլեկտրոնային Առևտրի Պլատֆորմ',
            description: 'Լիովին հարմարվող էլեկտրոնային առևտրի կայք՝ ընդլայնված զտման և որոնման հնարավորություններով:',
            longDescription: 'Մենք նախագծել և մշակել ենք ժամանակակից էլեկտրոնային առևտրի պլատֆորմ, որը թույլ է տալիս հեշտությամբ դիտել ապրանքները, կատարել ընդլայնված զտում և ունի օպտիմիզացված վճարման գործընթաց: Պլատֆորմը ներառում է պահեստի կառավարում, պատվերների հետևում և վերլուծական վահանակներ հաճախորդի համար:',
            features: [
              'Հարմարվող դիզայն բոլոր սարքերի համար',
              'Ընդլայնված ապրանքների զտում և որոնում',
              'Անվտանգ վճարումների մշակում',
              'Հաճախորդների հաշիվների կառավարում',
              'Պատվերների հետևում և պատմություն',
              'Ադմինիստրատորի վահանակ պահեստի կառավարման համար'
            ]
          },
          // ... other projects
        ]
      },
      testimonials: {
        title: 'Հաճախորդների Կարծիքներ',
        subtitle: 'Իմացեք, թե ինչ են ասում մեր հաճախորդները մեր աշխատանքի մասին',
        items: [
          {
            content: 'Այս թիմի հետ աշխատանքը բեկումնային էր մեր առցանց ներկայության համար: Նրանք ժամանակ տրամադրեցին մեր բրենդը և նպատակները հասկանալուն, այնուհետև ստեղծեցին մի կայք, որը գերազանցեց մեր սպասելիքները: Կոնվերսիայի աճը խոսում է ինքն իր մասին:',
            name: 'Սառա Ջոնսոն',
            role: 'Մարքեթինգի տնօրեն',
            company: 'ՏեխԿորպ Inc.'
          },
          // ... other testimonials
        ]
      },
      contact: {
        title: 'Կապ Հաստատեք',
        subtitle: 'Ունե՞ք նախագիծ: Եկեք քննարկենք, թե ինչպես կարող ենք օգնել',
        info: {
          phone: '(123) 456-7890',
          email: 'contact@webstudio.com',
          address: '123 Վեբ Փողոց, Սան Ֆրանցիսկո, CA 94103'
        },
        form: {
          name: 'Անուն Ազգանուն',
          email: 'Էլ. Փոստ',
          phone: 'Հեռախոսահամար',
          subject: 'Թեմա',
          message: 'Հաղորդագրություն',
          submit: 'Ուղարկել Հաղորդագրություն',
          success: 'Հաղորդագրությունը հաջողությամբ ուղարկվել է: Մեն շուտով կապ կհաստատենք ձեզ հետ:'
        },
        social: {
          follow: 'Հետևեք Մեզ'
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