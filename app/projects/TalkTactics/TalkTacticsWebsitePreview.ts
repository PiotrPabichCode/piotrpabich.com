import { type WebsitePreviewItem } from '../models/WebsitePreviewItem';
import AddCourse from './assets/AddCourse.webp';
import AdminPanel from './assets/AdminPanel.webp';
import CourseDetails from './assets/CourseDetails.webp';
import SingleWord from './assets/SingleWord.webp';
import UserPanel from './assets/UserPanel.webp';

export const TalkTacticsWebsitePreview: WebsitePreviewItem[] = [
  {
    name: 'Add course',
    image: AddCourse,
    alt: 'TalkTactics Add Course',
  },
  {
    name: 'Course Details',
    image: CourseDetails,
    alt: 'TalkTactics Course Details',
  },
  {
    name: 'Single Word Details',
    image: SingleWord,
    alt: 'TalkTactics Single Word Details',
  },
  {
    name: 'User Panel',
    image: UserPanel,
    alt: 'TalkTactics User Panel',
  },
  {
    name: 'Admin Panel',
    image: AdminPanel,
    alt: 'TalkTactics Admin Panel',
  },
];
