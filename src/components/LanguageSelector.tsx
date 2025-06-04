import React, { useState } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export interface Language {
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
          },
          {
            content: 'The e-commerce platform they built for us has transformed our business. The user experience is seamless, and our sales have increased by 150% since launch. Their attention to detail and technical expertise is outstanding.',
            name: 'Michael Chen',
            role: 'CEO',
            company: 'StyleHub'
          },
          {
            content: 'Their SEO optimization services have put us on the map. We\'ve seen a dramatic increase in organic traffic and our search rankings have improved significantly. The team is professional, responsive, and delivers results.',
            name: 'Emily Rodriguez',
            role: 'Digital Marketing Manager',
            company: 'GrowthWise'
          },
          {
            content: 'The mobile app they developed for our healthcare service has received outstanding feedback from users. The interface is intuitive, and the performance is exceptional. They truly understand how to create user-friendly solutions.',
            name: 'Dr. James Wilson',
            role: 'Chief Innovation Officer',
            company: 'HealthConnect'
          },
          {
            content: 'From concept to execution, their process was smooth and professional. They transformed our outdated website into a modern, responsive platform that perfectly represents our brand. Highly recommended!',
            name: 'Lisa Thompson',
            role: 'Operations Director',
            company: 'InnovateX'
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
      hero: {
        title: 'Преобразуйте Ваше Цифровое Присутствие с Помощью Красивых Сайтов',
        subtitle: 'Мы создаем потрясающие, адаптивные веб-сайты, которые помогают вашему бизнесу выделиться. От концепции до запуска, мы с вами на каждом этапе.',
        cta: {
          primary: 'Посмотреть Работы',
          secondary: 'Изучить Услуги'
        }
      },
      services: {
        title: 'Наши Услуги',
        subtitle: 'Комплексные веб-решения, адаптированные под ваши бизнес-потребности',
        items: [
          {
            title: 'Веб-Дизайн',
            description: 'Индивидуальный дизайн, который выделяет ваш бренд современной эстетикой и удобными интерфейсами.',
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
              'Проектирование и управление базами данных',
              'Разработка и интеграция API',
              'Оптимизация производительности'
            ]
          },
          {
            title: 'E-Commerce Решения',
            description: 'Безопасные и интуитивно понятные интернет-магазины, которые увеличивают продажи.',
            features: [
              'Индивидуальные платформы электронной коммерции',
              'Системы корзины и оформления заказа',
              'Интеграция платежных шлюзов',
              'Управление запасами',
              'Мобильный шоппинг'
            ]
          },
          {
            title: 'SEO Оптимизация',
            description: 'Улучшите свои позиции в поиске и увеличьте органический трафик на ваш сайт.',
            features: [
              'Исследование и стратегия ключевых слов',
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
              'Разработка пользовательских API',
              'Проектирование и оптимизация баз данных',
              'Настройка облачной инфраструктуры',
              'Бессерверные функции',
              'Аутентификация и авторизация'
            ]
          },
          {
            title: 'Мобильные Приложения',
            description: 'Нативные и кроссплатформенные мобильные приложения для взаимодействия с пользователями.',
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
            description: 'Мы начинаем с понимания вашего бизнеса, целей и целевой аудитории для создания прочного фундамента проекта.'
          },
          {
            title: 'Стратегия и Планирование',
            description: 'Мы разрабатываем комплексный план, включая архитектуру сайта, стратегию контента и технические требования.'
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
            title: 'Современная E-commerce Платформа',
            description: 'Полностью адаптивный сайт электронной коммерции с расширенной фильтрацией, поиском и возможностями оформления заказа.',
            longDescription: 'Мы разработали современную платформу электронной коммерции, которая обеспечивает удобный просмотр товаров, расширенную фильтрацию и оптимизированный процесс оформления заказа. Платформа включает управление запасами, отслеживание заказов и панели аналитики для клиента.',
            features: [
              'Адаптивный дизайн для всех устройств',
              'Расширенная фильтрация и поиск товаров',
              'Безопасная обработка платежей',
              'Управление аккаунтами клиентов',
              'Отслеживание и история заказов',
              'Панель администратора для управления запасами'
            ]
          }
        ]
      },
      testimonials: {
        title: 'Отзывы Клиентов',
        subtitle: 'Узнайте, что говорят наши клиенты о нашей работе',
        items: [
          {
            content: 'Работа с этой командой стала переломным моментом для нашего онлайн-присутствия. Они уделили время пониманию нашего бренда и целей, а затем создали сайт, превзошедший наши ожидания. Увеличение конверсии говорит само за себя!',
            name: 'Сара Джонсон',
            role: 'Директор по маркетингу',
            company: 'TechCorp Inc.'
          },
          {
            content: 'Разработанный ими интернет-магазин полностью преобразил наш бизнес. Интерфейс интуитивно понятен, а продажи выросли на 200% после запуска. Их внимание к деталям впечатляет.',
            name: 'Андрей Волков',
            role: 'Генеральный директор',
            company: 'ТехноМаркет'
          },
          {
            content: 'Мы очень довольны разработанным мобильным приложением. Команда продемонстрировала высокий профессионализм и техническую экспертизу. Все сроки были соблюдены, а результат превзошел ожидания.',
            name: 'Елена Петрова',
            role: 'Руководитель проектов',
            company: 'МобильПлюс'
          }
        ]
      },
      contact: {
        title: 'Свяжитесь с Нами',
        subtitle: 'Есть проект? Давайте обсудим, как мы можем помочь',
        info: {
          phone: '(123) 456-7890',
          email: 'contact@webstudio.com',
          address: '123 Web Street, Сан-Франциско, CA 94103'
        },
        form: {
          name: 'Полное Имя',
          email: 'Email Адрес',
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
      hero: {
        title: 'Վերափոխեք Ձեր Թվային Ներկայությունը Գեղեցիկ Կայքերի Միջոցով',
        subtitle: 'Մենք ստեղծում ենք գեղեցիկ, հարմարեցվող կայքեր, որոնք օգնում են ձեր բիզնեսին առանձնանալ: Գաղափարից մինչև թողարկում, մենք ձեզ հետ ենք ամեն քայլափոխին:',
        cta: {
          primary: 'Դիտել Աշխատանքները',
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
              'Հարմարեցվող դիզայն բոլոր սարքերի համար',
              'UI/UX դիզայն օգտատերերի հետազոտությամբ',
              'Բրենդի տեսողական ինքնություն',
              'Պրոտոտիպավորում',
              'Հասանելիության համապատասխանություն'
            ]
          },
          {
            title: 'Վեբ Ծրագրավորում',
            description: 'Արագ, արձագանքող և հուսալի կայքեր՝ ստեղծված ժամանակակից տեխնոլոգիաներով:',
            features: [
              'Frontend ծրագրավորում (React, Vue, Angular)',
              'Backend ծրագրավորում (Node.js, PHP, Python)',
              'Տվյալների բազայի նախագծում և կառավարում',
              'API մշակում և ինտեգրացիա',
              'Արդյունավետության օպտիմիզացիա'
            ]
          },
          {
            title: 'E-Commerce Լուծումներ',
            description: 'Անվտանգ և ինտուիտիվ առցանց խանութներ, որոնք խթանում են վաճառքը:',
            features: [
              'Անհատական էլեկտրոնային առևտրի հարթակներ',
              'Զամբյուղի և վճարման համակարգեր',
              'Վճարային համակարգերի ինտեգրացիա',
              'Պահեստի կառավարում',
              'Մոբայլ գնումների փորձառություն'
            ]
          },
          {
            title: 'SEO Օպտիմիզացիա',
            description: 'Բարելավեք ձեր որոնման դիրքերը և ավելացրեք օրգանական այցելություններ:',
            features: [
              'Բանալի բառերի հետազոտություն և ռազմավարություն',
              'Տեխնիկական SEO',
              'Բովանդակության օպտիմիզացիա',
              'Արդյունավետության բարելավում',
              'SEO վերլուծություն և հաշվետվություն'
            ]
          },
          {
            title: 'Backend Լուծումներ',
            description: 'Հուսալի սերվերային հավելվածներ և API-ներ ձեր թվային արտադրանքի համար:',
            features: [
              'Անհատական API մշակում',
              'Տվյալների բազայի օպտիմիզացիա',
              'Ամպային ենթակառուցվածքի կարգավորում',
              'Serverless ֆունկցիաներ',
              'Նույնականացում և թույլտվություն'
            ]
          },
          {
            title: 'Մոբայլ Հավելվածներ',
            description: 'Նատիվ և կրոս-պլատֆորմ մոբայլ հավելվածներ օգտատերերի համար:',
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
        subtitle: 'Ինչպես ենք մենք վերածում ձեր գաղափարները հաջողված թվային արտադրանքի',
        steps: [
          {
            title: 'Հետազոտություն',
            description: 'Մենք սկսում ենք ձեր բիզնեսը, նպատակները և թիրախային լսարանը հասկանալով՝ ստեղծելու համար ամուր հիմք ձեր նախագծի համար:'
          },
          {
            title: 'Ռազմավարություն և Պլանավորում',
            description: 'Մենք մշակում ենք համապարփակ պլան՝ ներառյալ կայքի ճարտարապետությունը, բովանդակության ռազմավարությունը և տեխնիկական պահանջները:'
          },
          {
            title: 'Դիզայն',
            description: 'Մեր դիզայներները ստեղծում են գեղեցիկ, ինտուիտիվ ինտերֆեյսներ, որոնք արտացոլում են ձեր բրենդը:'
          },
          {
            title: 'Մշակում',
            description: 'Մենք կառուցում ենք ձեր կայքը՝ օգտագործելով ժամանակակից տեխնոլոգիաներ և լավագույն փորձը:'
          },
          {
            title: 'Թեստավորում',
            description: 'Մանրակրկիտ թեստավորումը ապահովում է ձեր կայքի անթերի աշխատանքը բոլոր սարքերի և բրաուզերների վրա:'
          },
          {
            title: 'Թողարկում և Աջակցություն',
            description: 'Մենք իրականացնում ենք տեղադրումը և տրամադրում շարունակական աջակցություն:'
          }
        ]
      },
      portfolio: {
        title: 'Մեր Պորտֆոլիոն',
        subtitle: 'Ուսումնասիրեք մեր վերջին նախագծերը և տեսեք, թե ինչ կարող ենք անել ձեզ համար',
        categories: {
          all: 'Բոլորը',
          ecommerce: 'Էլ․ առևտուր',
          business: 'Բիզնես',
          realEstate: 'Անշարժ գույք',
          healthcare: 'Առողջապահություն',
          mobile: 'Մոբայլ',
          education: 'Կրթություն'
        },
        projects: [
          {
            title: 'Ժամանակակից E-commerce Հարթակ',
            description: 'Լիովին հարմարեցվող էլեկտրոնային առևտրի կայք՝ ընդլայնված զտման, որոնման և վճարման հնարավորություններով:',
            longDescription: 'Մենք նախագծել և մշակել ենք ժամանակակից էլեկտրոնային առևտ
            longDescription: 'Մենք նախագծել և մշակել ենք ժամանակակից էլեկտրոնային առևտրի հարթակ, որը թույլ է տալիս հեշտությամբ դիտել ապրանքները, կատարել ընդլայնված զտում և ունի պարզեցված վճարման գործընթաց: Հարթակը ներառում է պահեստի կառավարում, պատվերների հետևում և վերլուծական վահանակներ հաճախորդի համար:',
            features: [
              'Հարմարեցվող դիզայն բոլոր սարքերի համար',
              'Ընդլայնված ապրանքների զտում և որոնում',
              'Անվտանգ վճարումների մշակում',
              'Հաճախորդների հաշիվների կառավարում',
              'Պատվերների հետևում և պատմություն',
              'Ադմինիստրատորի վահանակ պահեստի կառավարման համար'
            ]
          }
        ]
      }
    }
  }
];

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Globe className="w-5 h-5" />
        <span>{language.nativeName}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span className="mr-2">{lang.flag}</span>
                <span>{lang.nativeName}</span>
                {language.code === lang.code && (
                  <Check className="w-4 h-4 ml-auto" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;