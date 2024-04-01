import { PLATFORM } from './models/Platform';
import { ProjectItem } from './models/ProjectItem';

export const projectItems: ProjectItem[] = [
  {
    title: 'TalkTactics',
    date: '05-03-2024',
    description:
      'Language-learning app for mastering English words and their definitions, featuring role-based access, light/dark mode, query caching, and a separated backend. For backend development I used Spring Boot / Spring Security with Json Web Tokens authorization. For frontend development I decided to use Next.js 14 with App Router with combination of React Query (caching / better performance), Zod / React Hook Form (validation, better user experience), Zustand and more.',
    url: 'TalkTactics',
    frontendRepository:
      'https://github.com/PiotrPabichCode/talk-tactics-frontend-nextjs',
    backendRepository:
      'https://github.com/PiotrPabichCode/talk-tactics-backend-springboot',
    demoUrl: 'https://talk-tactics-frontend.vercel.app/',
    platform: PLATFORM.WEBSITE,
    techStack: [
      'Spring Boot',
      'Spring Security',
      'JSON Web Tokens',
      'PostgreSQL',
      'NextJS',
      'App Router',
      'React Query',
      'Zustand',
      'Zod',
      'Axios',
    ],
  },
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
