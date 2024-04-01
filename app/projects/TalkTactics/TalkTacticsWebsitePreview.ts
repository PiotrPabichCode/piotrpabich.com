import { type WebsitePreviewItem } from '../models/WebsitePreviewItem';
import AllCourses from './assets/AllCourses.webp';
import Course from './assets/Course.webp';
import Preferences from './assets/Preferences.webp';
import LandingPage from './assets/LandingPage.webp';
import MobileView from './assets/MobileView.jpg';
import WordDetails from './assets/Word.webp';

export const TalkTacticsWebsitePreview: WebsitePreviewItem[] = [
  {
    name: 'Landing page',
    image: LandingPage,
    alt: 'TalkTactics landing page',
  },
  {
    name: 'Mobile view',
    image: MobileView,
    alt: 'TalkTactics mobile view',
  },
  {
    name: 'All courses',
    image: AllCourses,
    alt: 'TalkTactics all courses page',
  },
  {
    name: 'Course',
    image: Course,
    alt: 'TalkTactics course page',
  },
  {
    name: 'Word details',
    image: WordDetails,
    alt: 'TalkTactics word details',
  },
  {
    name: 'Account - Preferences',
    image: Preferences,
    alt: 'TalkTactics prefences page',
  },
];
