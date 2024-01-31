import { PLATFORM } from './models/Platform';
import { ProjectItem } from './models/ProjectItem';

export const projectItems: ProjectItem[] = [
  {
    title: 'SmartSenior',
    date: '05-01-2024',
    description:
      'SmartSenior is an innovative application built with React Native using Expo and Firebase as the backend. It enables active tracking and monitoring of the activities of senior individuals, featuring role division (Senior, Keeper), internationalization, style themes, account creation with OAuth2, and the scheduling of recurring events. With an intuitive interface and advanced functionalities, SmartSenior is the perfect tool for efficient elderly care management.',
    url: 'SmartSenior',
    repository: 'https://github.com/PiotrPabichCode/SmartSenior',
    platform: PLATFORM.MOBILE,
    techStack: [
      'React Native',
      'Expo Modules',
      'EAS Build',
      'Firebase',
      'i18n.js',
      'Redux Toolkit',
      'Push Notifications',
      'Formik + Yup',
    ],
  },
  {
    title: 'JobFinder',
    date: '15-11-2023',
    description:
      'JobFinder, developed using React Native with Expo and Firebase, simplifies job hunting in the tech industry. Enjoy easy login, seamless registration, and explore the latest programming job opportunities. The app features a web scraper for real-time job listings, enabling users to apply effortlessly within the application. Your go-to platform for swift and efficient tech job searches.',
    url: 'JobFinder',
    repository:
      'https://github.com/PiotrPabichCode/react-native-fullstack-jobfinder',
    platform: PLATFORM.MOBILE,
    techStack: [
      'React Native',
      'Expo Modules',
      'EAS Build',
      'Web Scrapper - Scrapy',
      'Firebase',
      'i18n.js',
      'Redux Toolkit',
      'Formik + Yup',
    ],
  },
  {
    title: 'TalkTactics',
    date: '20-06-2023',
    description:
      'A fullstack website designed to help users learn the most popular words in English. Application written in frontend(React.js) / backend(Spring, PostgreSQL). Division into roles (ADMIN, USER). Authorization using Spring Security and JSON Web Tokens. Data management with CRUD operations. Internationalization (PL - ENG) with i18Next.',
    url: 'TalkTactics',
    repository: 'https://github.com/PiotrPabichCode/talk-tactics-fullstack',
    platform: PLATFORM.WEBSITE,
    techStack: [
      'ReactJS',
      'React Router',
      'PostgreSQL',
      'Axios',
      'i18Next',
      'Spring Boot',
      'Spring Security',
      'JSON Web Tokens',
    ],
  },
  {
    title: 'Bibliopolium',
    date: '24-04-2023',
    description:
      'Bibliopolium, a PHP-based application with a MySQL database running on XAMPP, represents a student project designed for learning purposes. This bookstore application provides essential features like a user-friendly shopping cart, purchase history, and advanced security measures to counter SQL injection and Cross Site-Scripting. Moreover, it includes an admin panel with CRUD operations for efficient content management.',
    url: 'Bibliopolium',
    repository:
      'https://github.com/PiotrPabichCode/ecommerce-store-php-fullstack',
    platform: PLATFORM.WEBSITE,
    techStack: [
      'PHP',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
      'Cross Site Scripting | SQL Injection',
      'CRUD operations',
      'XAMPP',
    ],
  },
];
